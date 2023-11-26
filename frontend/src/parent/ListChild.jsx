import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Routes, Route, useNavigate} from 'react-router-dom';
import EditChild from './EditChild';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export const ListChild = () =>{
   
  const navigate = useNavigate();

   const navigateToAdmin = () => {
    navigate('/addchild');
  }
    const [children, setChildren] = useState([  // WE SHOULD GET THE DATA FROM A CONTROLLER
        { id: 1, name: "Mario", taj:1231  },
        { id: 2, name: "David", taj:1231  },
        { id: 3, name: "Marta", taj:1231  },
        { id: 4, name: "Mache", taj:1231  },
    ])

  const handleAddChildClicked = (e) => {
        navigateToAdmin();
    }

   const  handleDelete = (id) => {
      const newList = children.filter((child) => child.id !== id);
      setChildren(newList);
      //TODO controller needs to be called to make the removal permanent
   }

   const  handleEdit = (id) => {
      <EditChild props={id}/>
      
   }

return (

  <div className='admin-parent'>
    <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >

            <Grid item xs={3}>
<Button onClick={handleAddChildClicked} variant="contained" color='secondary' className='add-new-button'>
                Add new child
            </Button>
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="left"><b>Name</b></TableCell>
            <TableCell align="left"><b>TAJ</b></TableCell>
            <TableCell align="left"><b>Date of birth</b></TableCell>
            <TableCell align="left"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {children.map((child) => (
            <TableRow
              key={child.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {child.id}
              </TableCell>
              <TableCell align="left">{child.name}</TableCell>
              <TableCell align="left">{child.taj}</TableCell>
              <TableCell align="left">1999.08.26</TableCell>
              <TableCell align="left">
               <IconButton aria-label="edit" size="small" onClick={() => handleEdit(child.id)}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(child.id)}>
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

)
}
export default ListChild;