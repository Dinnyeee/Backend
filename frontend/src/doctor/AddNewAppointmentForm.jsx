import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Calendar from "react-calendar";

export const AddNewAppointmentForm = (props) => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
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
            <div>
            <Calendar showWeekNumbers onChange={onChange} value={date} />
                {console.log(date)}
                {date.toString()}
            

            </div>
        </div>
    );
}