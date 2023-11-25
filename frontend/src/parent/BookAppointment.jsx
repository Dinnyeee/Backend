
import ResponsiveAppBar from "./ResponsiveAppBar";
import React, { useState } from "react";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";





export default function BookAppointment(){
   
   const lastMonday = dayjs().startOf('week');
    const nextSunday = dayjs().endOf('week').startOf('day');

    const [times, setTime] = useState([1,2,3,4,5])
    const [selectedTime, setSelectedTime] = useState('')
    const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-17'))
    const [appointments, setAppointments] = useState([lastMonday,nextSunday ])
    
    const isAvailable = (date) => {
        console.log(dayjs(date).format('DD/MM/YYYY'));
        console.log("Last Monday "+dayjs(lastMonday).format('DD/MM/YYYY'));
    if(appointments.includes(dayjs(date))){
        return true;
    }
    return false;
   
};
    return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        
        <div className="fix-center-card">
            <Paper className="book-appointment-container"> 
            
            <Paper className="date-picker-container">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <StaticDatePicker
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e)}
                    shouldDisableDate={isAvailable}></StaticDatePicker>
             </LocalizationProvider>
            </Paper>
            <Paper>
                 <FormControl sx={{ width: 250 }}>
                        <InputLabel id="demo-simple-select-label">Time</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedTime}
                        label="Time"
                        onChange={(e) => setSelectedTime(e.target.value)}
                        >
                           {times.map((a) => (
                                    <MenuItem value={a}>{a}</MenuItem>)
                                    )}
                        </Select>
                </FormControl>
                <Button>Book selected appointment</Button>
                <h2>{selectedDate.format('DD/MM/YYYY')}</h2>
            </Paper>
             
        </Paper>
        </div>
        
           

        

    </div>
    );
}
