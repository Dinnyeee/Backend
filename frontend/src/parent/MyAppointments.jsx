import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getAllCases } from "services/CaseApi";
import dayjs from "dayjs";



export const MyAppointments = () => {
  const navigate= useNavigate();

   const handleViewDetail =(id) => {
    navigate("/detailedcase/"+id);
  }

  const handleAddNewCase = (e) => {
    navigate('/bookappointment');
  }

   useEffect(() => {
    const getData = async () => {
      try{
        const result = await getAllCases();
        console.log(result);
        setCases(result.filter(c => c.appointmentDate !==null));
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 
    getData();
  }, [])


  const [cases, setCases] = useState([])
  return (
    <div className="myappointments-parent">
     <ResponsiveAppBar/>
      <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >


            <Grid item xs={3}>

<div className="search-field">

        <Button variant="contained" color="secondary" startIcon={<AddCircleIcon />} onClick={handleAddNewCase}>
          Book Appointment
        </Button>

        
      

      

</div>
    
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>CaseId</b></TableCell>
            <TableCell align="left"><b>Case</b></TableCell>
            <TableCell align="left"><b>Child</b></TableCell>
            <TableCell align="left"><b>Date</b></TableCell>
            <TableCell align="left"><b>Status</b></TableCell>
            <TableCell align="left"><b>Details</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((c) => (
            <TableRow
              key={c.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {c.id}
              </TableCell>
              <TableCell align="left">{c.title}</TableCell>
              <TableCell align="left">{c.child.name}</TableCell>
              <TableCell align="left">{dayjs(c.appointmentDate).format('MM.DD HH:mm')}</TableCell>
              <TableCell align="left">
                  {c.status}
                </TableCell>
              <TableCell align="left">
                 <IconButton onClick={()=> handleViewDetail(c.id)}>
                  <Visibility fontSize="small"/>
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