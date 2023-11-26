
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';import { useNavigate } from 'react-router-dom';
const React = require("react");
const { Grid, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } = require("@mui/material");
const { useState } = require("react");

export default function ListOfPraxes(){

    const navigate = useNavigate();
    const [praxes ,setPraxes] = useState([
        {id:1, doctor:"Dr.Kovács", name:"XI.kerület"},
        {id:2, doctor:"Dr.Péter", name: "V.kerület"},
        {id:3, doctor:"Dr.Fekete", name: "Erzsébet városrész"},
    ])
    const handleAddPraxisClicked =(e) => {
      navigate("/addpraxis");
    }
    const handleEdit =(e) => {
      navigate("/editpraxis");
    }
    const handleDelete =(id) => {
          const newList = praxes.filter((p) => p.id !== id);
            setPraxes(newList);
      //TODO controller needs to be called to make the removal permanent
    }
    return (
         <div className='administration-container'>
    <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >

            <Grid item xs={3}>
<Button onClick={handleAddPraxisClicked} variant="contained" color='secondary' className='add-new-button'>
                Add new Praxis
            </Button>
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="left"><b>Name</b></TableCell>
            <TableCell align="left"><b>Doctor</b></TableCell>
            <TableCell align="left"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {praxes.map((p) => (
            <TableRow
              key={p.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{p.id}</TableCell>
              <TableCell align="left">{p.name}</TableCell>
              <TableCell align="left">{p.doctor}</TableCell>
              <TableCell align="left">
               <IconButton aria-label="edit" size="small" onClick={() => handleEdit(p.id)}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(p.id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
</Grid>
</Grid>
</div>
    );
}