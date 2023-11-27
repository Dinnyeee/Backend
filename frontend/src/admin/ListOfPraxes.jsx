
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';import { useNavigate } from 'react-router-dom';
import { getAllPraxises } from 'services/PraxisApi';
import { useEffect } from 'react';
const { Grid, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } = require("@mui/material");
const { useState } = require("react");
const React = require("react");


export default function ListOfPraxes(){

    const navigate = useNavigate();
    const [praxes ,setPraxes] = useState([])


        useEffect(() => {
        getPraxes();
      }, []);

     const getPraxes = async () => {
      try{
        const result = await getAllPraxises();
        console.log(result);
        setPraxes(result);
      } catch(error){
        console.error('Error getAllPraxises data', error);
      }
    }; 

  

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
          {praxes?.map((p) => (
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