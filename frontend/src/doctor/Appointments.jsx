import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import { IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllCases } from "services/CaseApi";
import dayjs from "dayjs";



export const Appointments = (props) => {

     /* const navigateToAddNewAppointment = () => {
       // navigate('/addnewappointmentform');
      }
    const handleAddAppointmentClicked = (e) => {
      navigateToAddNewAppointment();
  }*/

  useEffect(() => {
    const getCases = async () => {
      try{
        const result = await getAllCases();
        setCases(result);
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 
    getCases();
  }, [])

  const [cases, setCases] = useState([])
    const  handleDelete = (id) => {
      const newList = cases.filter((family) => family.id !== id);
      let updateCase = cases.filter((c) => c.id == id)[0];
      updateCase.appointmentDate = null;
      updateCase(updateCase).then(() => setCases(newList));
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
        
     
    <TableContainer component={Paper} className="doctor-appointments-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="left"><b>Case</b></TableCell>
            <TableCell align="left"><b>Patient</b></TableCell>
            <TableCell align="left"><b>Date</b></TableCell>
            <TableCell align="left"><b>Time</b></TableCell>
            <TableCell align="center"><b>Action</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((c) => (
            <TableRow
              key={c.id}
              sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {c.id}
              </TableCell>
              <TableCell align="left">{c.family}</TableCell>
              <TableCell align="left">{c.family}</TableCell>
              <TableCell align="left">{dayjs(c.date).format('MM.dd')}</TableCell>
              <TableCell align="left">{dayjs(c.date).format('HH:mm')}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(c.id)}>
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