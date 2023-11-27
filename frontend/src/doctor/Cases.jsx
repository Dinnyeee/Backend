import React, { useEffect, useState } from "react";
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import { Autocomplete, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { deleteCase, getAllCases } from "services/CaseApi";
import { getAllFamilies } from "services/FamilyApi";
import dayjs from "dayjs";
import { getDoctorById } from "services/DoctorApi";



export function Cases(props){
  const [cases, setCases] = useState([])
  //const [families, setFamilies] = React.useState([]);

  const getData = async () => {
    try{
      const result = await getAllCases();
      setCases(result);
      console.log(result);
    } catch(error){
      console.error('Error getAllCases data', error);
    }
  }; 

  /*const fetchFamilies = async () => {
    try{
      const res = await getAllFamilies();
      console.log("getallfamilies eredménye: "+res);
      setFamilies(res);
    }catch (error){
        console.error('Error getAllFamilies data', error);

    }
  }*/


  useEffect(() => {
    getData();
    //fetchFamilies();
  }, [])

  const navigate = useNavigate();
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
  const handleViewDetail =(e) => {
    navigate("/detailedcase/"+e);
  }
  const handleSearch = () => {
    const getRes = async () => {
      try{
          const result = await getAllCases();
          let filteredList = result;
          
          if(priority !== "" && priority !== "ALL"){
            filteredList = result.filter(r=>r.priority == priority);
          }
          if(status !== '' && status !== "ALL"){
            filteredList = filteredList.filter(r=> r.status == status)
          }
          setCases(filteredList);
        } catch(error){
          console.error('Error getAllCases data', error);
      }
    }; 
      getRes();
    //TODO send data and fetch the search result!! and update the list of cases based on that
  }

  
  const  handleDelete =(id) => {
    const newList = cases.filter((c) => c.id !== id);
   deleteCase(id).then(() =>setCases(newList));
 }

 function appointmentString(d){
  console.log("A Date tartalma: "+d);
    if(d =="Invalid Date")
    return "-----------";

    return d;
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

<div className="search-field-doctor">
       
        <FormControl sx={{ width: 250, margin:1}}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChange_1}
            >
                <MenuItem value={"NEW"}>NEW</MenuItem>
                <MenuItem value={"IN_PROGRESS"}>IN PROGRESS</MenuItem>
                <MenuItem value={"CLOSED"}>CLOSED</MenuItem>
                <MenuItem value={"ALL"}>ALL</MenuItem>
            </Select>
        </FormControl>

        <FormControl 
              sx={{ width: 250, margin:1 }}>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              label="Priority"
              onChange={handleChange_2}
            >
            <MenuItem value={"HIGH"}>HIGH</MenuItem>
            <MenuItem value={"MEDIUM"}>MEDIUM</MenuItem>
            <MenuItem value={"LOW"}>LOW</MenuItem>
            <MenuItem value={"ALL"}>ALL</MenuItem>
          </Select>
        </FormControl>

        <Button sx={{ margin:1}} variant="contained" startIcon={<SearchIcon/>} onClick={handleSearch}> Search
        </Button>

</div>
    
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Case</b></TableCell>
            <TableCell align="right"><b>Patient</b></TableCell>
            <TableCell align="right"><b>Opened</b></TableCell>
            <TableCell align="right"><b>Status</b></TableCell>
            <TableCell align="right"><b>Priority</b></TableCell>
            <TableCell align="right"><b>Appointment</b></TableCell>
            <TableCell align="right"><b></b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases?.map((c) => (
            <TableRow
              key={c.id}
              sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {c.title}
              </TableCell>
              <TableCell align="right">{c.child.name}</TableCell>
              <TableCell align="right">{dayjs(c.createdAt).format('YYYY/MM/DD hh:MM')}</TableCell>
              <TableCell align="right">
                  {c.status}
                </TableCell>
              <TableCell align="right">
                  {c.priority}
                </TableCell>
              <TableCell align="right">{appointmentString(dayjs(c.appointmentDate).format('YYYY/MM/DD hh:MM'))}</TableCell>

              <TableCell align="right">
                 <IconButton onClick={()=>handleViewDetail(c.id)}>
                  <Visibility fontSize="small"/>
                 </IconButton>
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(c.id)}>
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