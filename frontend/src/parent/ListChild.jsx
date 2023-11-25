import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from "react";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Text from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from '@mui/material/Grid';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Routes, Route, useNavigate} from 'react-router-dom';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export const ListChild = () =>{
   
  const navigate = useNavigate();

   const navigateToAdmin = () => {
    navigate('/addchild');
  }
    const [children, setChildren] = useState([  // WE SHOULD GET THE DATA FROM A CONTROLLER
        { id: 1, name: "Mario", taj:1231  },
        { id: 2, name: "David", taj:1231  },
        { id: 3, name: "Marta", taj:1231  },
        { id: 4, name: "Mache", taj:1231  },
    ])

  const handleAddChild = (e) => {
        navigateToAdmin();
    }

return (

  <div className='admin-parent'>
    <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
        >

            <Grid item xs={3}>
<Button onClick={handleAddChild} variant="contained" color='secondary' className='add-new-button'>
                Add new child
            </Button>
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="right"><b>Name</b></TableCell>
            <TableCell align="right"><b>TAJ</b></TableCell>
            <TableCell align="right"><b>Date of birth</b></TableCell>
            <TableCell align="right"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {children.map((child) => (
            <TableRow
              key={child.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {child.id}
              </TableCell>
              <TableCell align="right">{child.name}</TableCell>
              <TableCell align="right">{child.taj}</TableCell>
              <TableCell align="right">1999.08.26</TableCell>
              <TableCell align="right">
               <IconButton aria-label="edit" size="small">
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
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
/*<Container>
          <Container maxWidth="sm">
            <Button onClick={handleAddChild} variant="contained">
                Add new child
            </Button>
          </Container>
           <Grid container>
                <Text>
                  Id
                </Text>
                <Text>
                  Name
                </Text>
                <Text>
                  TAJ
                </Text>
              </Grid>
          <Grid container>
            <List
              sx={{
                width: '100%',
                maxWidth: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
              }}
              subheader={<li />}
            >
            
                  <ul>
                    {children.map((item) => (
                      <ListItem>
                        <ListItemText primary={`${item.id}`} />
                        <ListItemText primary={`Item ${item.name}`} />
                        <ListItemText primary={`Item ${item.taj}`} />
                      </ListItem>
                    ))}
                  </ul>
               
            </List>
            
          </Grid>
        </Container>*/


  /*   <TableContainer component={Paper} className='container'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Date of birth</TableCell>
            <TableCell align="right">Allergies</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">Edit Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    */
)
}
export default ListChild;