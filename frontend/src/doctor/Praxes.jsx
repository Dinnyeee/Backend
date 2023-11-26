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
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import Tooltip from '@mui/material/Tooltip';



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
    const handleRemoveFamily = (id) => {
        //TODO MAGIC SERVICE-EN KERESZTÜL TÖRÖLNI A PRAXISBÓL A CSALÁDOT, MAJD VISSZATÉRNI A A FRISS LISTÁKKAL
    }
    const handleAddFamily = (id) => {
        //TODO MAGIC SERVICE-EN KERESZTÜL HOZZÁADNI  A PRAXISBÓL A CSALÁDOT, MAJD VISSZATÉRNI A FRISS LISTÁKKAL
    }
    const handleRemoveAssistant = (id) => {
        //TODO MAGIC SERVICE-EN KERESZTÜL TÖRÖLNI A PRAXISBÓL AZ ASSZISZTENST, MAJD VISSZATÉRNI A A FRISS LISTÁKKAL
    }
    const handleAddAssistant = (id) => {
        //TODO MAGIC SERVICE-EN KERESZTÜL HOZZÁADNI  A PRAXISBÓL AZ ASSZISZTENST, MAJD VISSZATÉRNI A FRISS LISTÁKKAL
    }

    const [familyValue, setFamilyValue] = React.useState('');
    const [assistantValue, setAssistantValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    const [families, setFamily] = useState([
      { id:1, name: "Fabian"},
      { id:2, name: "Fekete"},
      { id:3, name: "Peter"},
      { id:4, name: "Nemeth"},
    ])
    const [allfamilies, setAllFamily] = useState([
      { id:1, name: "Fabian"},
      { id:2, name: "Fekete"},
      { id:3, name: "Peter"},
      { id:4, name: "Nemeth"},
      { id:5, name: "Auuuu"},
    ])
    const [assistants, setAssistant] = useState([
      { id:1, name: "Fabian"},
      { id:2, name: "Fekete"},
      { id:3, name: "Peter"},
      { id:4, name: "Nemeth"},
    ])
    const [allassistants, setAllAssistant] = useState([
      { id:1, name: "Fabian"},
      { id:2, name: "Fekete"},
      { id:3, name: "Peter"},
      { id:4, name: "Nemeth"},
      { id:5, name: "Auuuu"},
    ])

    return (
      <div>
      <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
    <Container>
        <Box className="tabs-box" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Families" {...a11yProps(0)} />
              <Tab label="Assistants" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} >
          <Grid container>
          <TableContainer component={Paper} sx={{ width: 400 }} >
          <Table aria-label="simple table" sx={{ width: 400 }} >
              <TableHead>
                <TableCell align="center"><b>Families in my praxis</b></TableCell>
                <TableCell><b></b></TableCell>
              </TableHead>
              <TableHead>
              </TableHead>
              <TableBody>
                {families.map((family) => (
                  <TableRow
                    key={family.id}
                    sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
                  >
                    <TableCell>{family.name}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Remove from praxis">
                         <IconButton onClick={() => handleRemoveFamily(family.id)}>
                            <PersonOffIcon fontSize="small"/>
                         </IconButton>
                      </Tooltip>
                     
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            <TableContainer component={Paper} sx={{ width: 400 }} >
            <Table aria-label="simple table" sx={{ width: 400 }} >
              <TableHead >
                <TableCell align="center"><b>All families</b></TableCell>
                <TableCell><b></b></TableCell>
              </TableHead>
              <TableHead>
              </TableHead>
              <TableBody>
                {allfamilies.map((family) => (
                  <TableRow
                    key={family.id}
                    sx={{ '&:last-family td, &:last-family th': { border: 0 } }}
                  >
                    <TableCell>{family.name}</TableCell>
                    <TableCell align="right">
                       <Tooltip title="Add to praxis">
                      <IconButton  onClick={() => handleAddFamily(family.id)}>
                        <PersonAddAlt1Icon fontSize="small"/>
                      </IconButton>
                      </Tooltip>
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
            <TableContainer component={Paper} sx={{ width: 400 }} >
              <Table aria-label="simple table" sx={{ width: 400 }} >
                <TableHead>
                  <TableCell align="center"><b>Assistant in my praxis</b></TableCell>
                  <TableCell align="right"><b></b></TableCell> 
                </TableHead>
                <TableHead>
                </TableHead>
                <TableBody>
                  {families.map((assistant) => (
                    <TableRow
                      key={assistant.id}
                      sx={{ '&:last-assistant td, &:last-assistant th': { border: 0 } }}
                    >
                      <TableCell>{assistant.name}</TableCell>
                      <TableCell align="right">
                         <Tooltip title="Remove praxis"> 
                        <IconButton onClick={() => handleAddAssistant(assistant.id)}>
                          <PersonOffIcon fontSize="small"/>
                        </IconButton>
                        </Tooltip>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper} sx={{ width: 400 }} >
              <Table aria-label="simple table" sx={{ width: 400 }} >
                <TableHead>
                  <TableCell align="center"><b>All assistants</b></TableCell>
                  <TableCell><b></b></TableCell>
                </TableHead>
                <TableHead>
                </TableHead>
                <TableBody>
                  {allassistants.map((assistant) => (
                    <TableRow
                      key={assistant.id}
                      sx={{ '&:last-assistant td, &:last-assistant th': { border: 0 } }}
                    >
                      <TableCell>{assistant.name}</TableCell>
                      <TableCell align="right">
                       <Tooltip title="Add to praxis"> 
                        <IconButton onClick={() => handleRemoveAssistant(assistant.id)}>
                          <PersonAddAlt1Icon fontSize="small"/>
                        </IconButton>
                        </Tooltip>
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