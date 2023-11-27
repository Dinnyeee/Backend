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
import { getAllCases, updateCase } from "services/CaseApi";
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
        setCases(result.filter(a => a.appointmentDate != null));
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 
    getCases();
  }, [])

  const [cases, setCases] = useState([])
      const  handleDelete = async(id) => {
      const newList = cases.filter((c) => c.id !== id);
      let ToUpdateCase = cases.filter((c) => c.id == id)[0];
      ToUpdateCase.appointmentDate = null;
      await updateCase(ToUpdateCase).then(() => setCases(newList));
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
            <TableCell><b>Case</b></TableCell>
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
                {c.title}
              </TableCell>
              <TableCell align="left">{c.child.name}</TableCell>
              <TableCell align="left">{dayjs(c.appointmentDate).format('MM.DD')}</TableCell>
              <TableCell align="left">{dayjs(c.appointmentDate).format('HH:mm')}</TableCell>
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