import React, { useState } from "react";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from '@mui/material/Grid';
import Text from '@mui/material/ListItemText';
import { Button } from "@mui/base";
import { Praxes } from "./Praxes";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const Appointments = (props) => {
    
    const [value, setValue] = React.useState(0);
    
    return (
      <div>
          <AppBar position="static">
          <Container maxWidth="sm">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                General Practitioner Site
              </Typography>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                GPApp
              </Typography>
            
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <Container maxWidth="sm">
            <Button>
              <Link to = '/addnewappointmentform'>
                Add new appointment dates
              </Link>
              
            </Button>
          </Container>
          <Grid container>
                <Text>
                  Num.
                </Text>
                <Text>
                  Family
                </Text>
                <Text>
                  Date
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
              {[0, 1, 2, 3, 4].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                  <ul>
                    <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                    {[0, 1, 2].map((item) => (
                      <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText primary={`${item}`} />
                        <ListItemText primary={`Item ${item}`} />
                        <ListItemText primary={`Item ${item}`} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </List>
            
          </Grid>
        </Container>
    </div>
);
}