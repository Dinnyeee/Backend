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
import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 4.3),
  createData('Gingerbread', 356, 49, 3.9),
];
export const ListChild = (props) =>  {
 const children = props.children

return (
<Container>
          <Container maxWidth="sm">
            <Button variant="contained">
              <Link to = '/addchild'>
                Add new child
              </Link>
              
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
        </Container>

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