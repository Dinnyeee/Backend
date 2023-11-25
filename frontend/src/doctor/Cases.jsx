import React, { useState } from "react";
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import { Autocomplete, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';



export const Cases = (props) => {

  const [familyValue, setFamilyValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const [priority, setPrio] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleChange_1 = (event) => {
    setStatus(event.target.value);
  };
  const handleChange_2 = (event) => {
    setPrio(event.target.value);
  };
  const [cases, setFamily] = useState([
    { id:1, name: "Fabian", date: '2023-12-02', status: "new", priority: "TOP" },
    { id:2, name: "Fekete", date: '2023-10-22', status: "inprogress", priority: "low" },
    { id:3, name: "Peter", date: '2023-11-12', status: "new", priority: "medium" },
    { id:4, name: "Nemeth", date: '2023-11-02', status: "new", priority: "TOP" },
  ])
  const  handleDelete = (id) => {
    const newList = cases.filter((family) => family.id !== id);
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

<div className="search-field">
        <Autocomplete 
            
            value={familyValue}
            onChange={(event, newValue) => {
              setFamilyValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={['Family 1', 'Family 2']}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label="Family" />}
      />

        <FormControl sx={{ width: 250 }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChange_1}
            >
                <MenuItem value={10}>NEW</MenuItem>
                <MenuItem value={20}>IN PROGRESS</MenuItem>
                <MenuItem value={30}>CLOSED</MenuItem>
            </Select>
        </FormControl>

        <FormControl 
              sx={{ width: 250 }}>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              label="Priority"
              onChange={handleChange_2}
            >
            <MenuItem value={10}>TOP</MenuItem>
            <MenuItem value={20}>MEDIUM</MenuItem>
            <MenuItem value={30}>LOW</MenuItem>
          </Select>
        </FormControl>

</div>
    
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="right"><b>Family</b></TableCell>
            <TableCell align="right"><b>Date</b></TableCell>
            <TableCell align="right"><b>Status</b></TableCell>
            <TableCell align="right"><b>Priority</b></TableCell>
            <TableCell align="right"><b></b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((family) => (
            <TableRow
              key={family.id}
              sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {family.id}
              </TableCell>
              <TableCell align="right">{family.name}</TableCell>
              <TableCell align="right">{family.date}</TableCell>
              <TableCell align="right">
                  {family.status}
                </TableCell>
              <TableCell align="right">
                  {family.priority}
                </TableCell>
              <TableCell align="right">
                 <IconButton>
                  <Visibility fontSize="small"/>
                 </IconButton>
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(family.id)}>
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