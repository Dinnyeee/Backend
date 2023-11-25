import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Autocomplete, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';


export const MyAppointments = () => {
  const navigate= useNavigate();


  const options = ['Option 1', 'Option 2'];
  const [childValue, setChildValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const [priority, setPrio] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setPrio(event.target.value);
  };

  const handleAddNewCase = (e) => {
    navigate('/bookappointment');
  }


  const cases = [
    { id:1, name: "Kovács", date: '2023-12-02', status: "new", priority: "TOP" },
    { id:2, name: "Kiss", date: '2023-10-22', status: "inprogress", priority: "low" },
    { id:3, name: "Shwarz", date: '2023-11-12', status: "new", priority: "medium" },
    { id:4, name: "Bali", date: '2023-11-02', status: "new", priority: "TOP" },
  ]
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

        
      

      {/*  <FormControl sx={{ width: 250 }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
                <MenuItem value={"New"}>New</MenuItem>
                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                <MenuItem value={"Closed"}>Closed</MenuItem>
                <MenuItem value={"All"}>All</MenuItem>
            </Select>
        </FormControl>
  */}

</div>
    
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>CaseId</b></TableCell>
            <TableCell align="right"><b>Child</b></TableCell>
            <TableCell align="right"><b>Date</b></TableCell>
            <TableCell align="right"><b>Time</b></TableCell>
            <TableCell align="right"><b>Details</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((child) => (
            <TableRow
              key={child.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {child.id}
              </TableCell>
              <TableCell align="right">{child.name}</TableCell>
              <TableCell align="right">{child.date}</TableCell>
              <TableCell align="right">
                  {child.status}
                </TableCell>
              <TableCell align="right">
                 <IconButton>
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