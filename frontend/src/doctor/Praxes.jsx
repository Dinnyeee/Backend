// @ts-nocheck
import React, { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import { Autocomplete, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Visibility } from "@mui/icons-material";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Praxes = (props) => {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    const [familyValue, setFamilyValue] = React.useState('');
    const [assistantValue, setAssistantValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    const [families, setFamily] = useState([
      { id:1, name: "Fabian"},
      { id:2, name: "Fekete"},
      { id:3, name: "Peter"},
      { id:4, name: "Nemeth"},
    ])
    const [assistants, setAssistant] = useState([
      { id:1, name: "Fabian"},
      { id:2, name: "Fekete"},
      { id:3, name: "Peter"},
      { id:4, name: "Nemeth"},
    ])

    return (
      <div>
      <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
    <Container>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Families" {...a11yProps(0)} />
              <Tab label="Assistants" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableCell align="center"><b>Families in my praxis</b></TableCell>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell><b>Id</b></TableCell>
                  <TableCell align="right"><b>Family</b></TableCell>
                  <TableCell align="right"><b></b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {families.map((family) => (
                  <TableRow
                    key={family.id}
                    sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {family.id}
                    </TableCell>
                    <TableCell align="right">{family.name}</TableCell>
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
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableCell align="center"><b>All families</b></TableCell>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell><b>Id</b></TableCell>
                  <TableCell align="right"><b>Family</b></TableCell>
                  <TableCell align="right"><b></b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {families.map((family) => (
                  <TableRow
                    key={family.id}
                    sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {family.id}
                    </TableCell>
                    <TableCell align="right">{family.name}</TableCell>
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
        </CustomTabPanel>
          
        <CustomTabPanel value={value} index={1}>
          <Grid container>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableCell align="center"><b>Assistant in my praxis</b></TableCell>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Id</b></TableCell>
                    <TableCell align="right"><b>Assistant</b></TableCell>
                    <TableCell align="right"><b></b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assistants.map((assistant) => (
                    <TableRow
                      key={assistant.id}
                      sx={{ '&:last-assistant td, &:last-assistant th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {assistant.id}
                      </TableCell>
                      <TableCell align="right">{assistant.name}</TableCell>
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
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableCell align="center"><b>All assistants</b></TableCell>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Id</b></TableCell>
                    <TableCell align="right"><b>Assistant</b></TableCell>
                    <TableCell align="right"><b></b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assistants.map((assistant) => (
                    <TableRow
                      key={assistant.id}
                      sx={{ '&:last-assistant td, &:last-assistant th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {assistant.id}
                      </TableCell>
                      <TableCell align="right">{assistant.name}</TableCell>
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
        </CustomTabPanel>
            
    </Container>
    </div>
);
}