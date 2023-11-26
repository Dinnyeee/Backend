import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Autocomplete, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Height, Visibility } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";



export const CasesPage = (props) => {

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
    navigate('/addcase');
  }


  const cases = [
    { id:1, name: "Kovács", date: '2023-12-02', status: "new", priority: "TOP" },
    { id:2, name: "Kiss", date: '2023-10-22', status: "inprogress", priority: "low" },
    { id:3, name: "Shwarz", date: '2023-11-12', status: "new", priority: "medium" },
    { id:4, name: "Bali", date: '2023-11-02', status: "new", priority: "TOP" },
  ]
  return (
    <div className="cases-parent">
     

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
          New case
        </Button>

        <Autocomplete 
            
            value={childValue}
            onChange={(event, newValue) => {
              setChildValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label="Child" />}
      />

      

        <FormControl sx={{ width: 250 }}>
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

</div>
    
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="left"><b>Case</b></TableCell>
            <TableCell align="left"><b>Child</b></TableCell>
            <TableCell align="left"><b>Opened</b></TableCell>
            <TableCell align="left"><b>Status</b></TableCell>
            <TableCell align="left"><b>Appointment</b></TableCell>
            <TableCell align="left"><b></b></TableCell>
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
              <TableCell align="left">{"CASE TITLE"}</TableCell>
              <TableCell align="left">{child.name}</TableCell>
              <TableCell align="left">{child.date}</TableCell>
              <TableCell align="left">{child.status}</TableCell>
              <TableCell align="left">{"YYYY.MM.DD.HH:MM"}</TableCell>
              <TableCell align="left"><IconButton><Visibility fontSize="small"/></IconButton>
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

/* EZ JÓ LESU A DOKIHOZ
 <FormControl 
       sx={{ width: 250 }}>
  <InputLabel id="demo-simple-select-label">Priority</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={priority}
      label="Priority"
      onChange={handleChange}
    >
    <MenuItem value={10}>TOP</MenuItem>
    <MenuItem value={20}>MEDIUM</MenuItem>
    <MenuItem value={30}>LOW</MenuItem>
  </Select>
</FormControl> */