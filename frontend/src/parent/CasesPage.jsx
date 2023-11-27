import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Autocomplete, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Height, Visibility } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";
import { getAllCases } from "services/CaseApi";
import dayjs from "dayjs";
import { getAllChildren } from "services/ChildApi";



export const CasesPage = (props) => {

  const [cases, setCases] = useState([]);
  const [options, setOptions] = useState([]);
  const [childValue, setChildValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');  
  const [status, setStatus] = React.useState('');

  const navigate= useNavigate();

  useEffect(() => {
    getCases();
    getChildrenOption();
    
  }, [childValue,inputValue])

  const getCases = async () => {
      try{
        const result = await getAllCases();
        setCases(result);
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 

    const getChildrenOption = async () => {
      try{
        const result = await getAllChildren();
        setOptions(result);
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 

  

  const handleViewDetail =(id) => {
    navigate("/detailedcase/"+id);
  }

  const handleAddNewCase = (e) => {
    navigate('/addcase');
  }


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

        

       <FormControl sx={{ width: 250 }}>
            <InputLabel id="demo-simple-select-label">Child</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={childValue}
              label="Child"
              onChange={(e) => setChildValue(e.target.value)}
            >
               {
                  options?.map((o) => (
                 <MenuItem value={o}>{o.name}</MenuItem>
              ))}
            </Select>
        </FormControl>

      

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
              <TableCell align="left">{dayjs(c.createdAt).format('MM.DD HH:mm')}</TableCell>
              <TableCell align="left">{c.status}</TableCell>
              <TableCell align="left">{dayjs(c.appointmentDate).format('MM.DD HH:mm')}</TableCell>
              <TableCell align="left">
                  <IconButton onClick={handleViewDetail}>
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