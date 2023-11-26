import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';



export const Appointments = (props) => {
    
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

      const navigateToAddNewAppointment = () => {
        navigate('/addnewappointmentform');
      }
    const handleAddAppointmentClicked = (e) => {
      navigateToAddNewAppointment();
  }
  const [appointments, setFamily] = useState([  // WE SHOULD GET THE DATA FROM A CONTROLLER
        { id: 1, family: "Fabian", date:'2023-12-25'  },
        { id: 2, family: "Peter", date:'2023-12-25'   },
        { id: 3, family: "Nemeth", date:'2023-12-25'   },
        { id: 4, family: "Fekete", date:'2023-12-25'   },
    ])
    const  handleDelete = (id) => {
      const newList = appointments.filter((family) => family.id !== id);
      setFamily(newList);
      //TODO controller needs to be called to make the removal permanent
   }
    
    return (
      <div>
        <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
        <Grid
          container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '50vh' }}
        >
            <Grid item xs={3}>
      
           
            </Grid>

       <div className="button-and-table-doctor-appointment">
        
     
       <Button onClick={handleAddAppointmentClicked} variant="contained"  color='secondary' className='add-new-button'>
                Add new appointment
            </Button>
    <TableContainer component={Paper} className="doctor-appointments-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="left"><b>Name</b></TableCell>
            <TableCell align="left"><b>Date</b></TableCell>
            <TableCell align="left"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((family) => (
            <TableRow
              key={family.id}
              sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {family.id}
              </TableCell>
              <TableCell align="left">{family.family}</TableCell>
              <TableCell align="left">{family.date}</TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(family.id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </div>   





            
        
      </Grid>
    </div>
);
}