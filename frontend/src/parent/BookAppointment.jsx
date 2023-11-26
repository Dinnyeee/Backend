
import ResponsiveAppBar from "./ResponsiveAppBar";
import React, { useState } from "react";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";





export default function BookAppointment(){

    const navigate = useNavigate();
   
    const lastMonday = dayjs().startOf('week');
    const nextSunday = dayjs().endOf('week').startOf('day');

    const [times, setTime] = useState([15,13,14,17])
    const [selectedTime, setSelectedTime] = useState('')
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))
    const [selectedCase, setSelectedCase] = useState("case4")
    const [appointments, setAppointments] = useState([lastMonday,nextSunday ])
    
    const navigateToAppointments = () => {
        navigate("/myappointments")
    }
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
                    disablePast
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e)}
                    shouldDisableDate={isAvailable}></StaticDatePicker>
             </LocalizationProvider>
            </Paper>
            <Paper className="time-picker-container">
                 
                <FormControl sx={{ width: 250 }} className="time-picker-form-field">
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

                <FormControl sx={{ width: 250 }} className="time-picker-form-field">
                        <InputLabel id="demo-simple-select-label">Case</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCase}
                        label="Case"
                        onChange={(e) => setSelectedCase(e.target.value)}
                        >
                          
                                    <MenuItem value={"case1"}>{"case1"}</MenuItem>
                                    <MenuItem value={"case2"}>{"case2"}</MenuItem>
                                    <MenuItem value={"case3"}>{"case3"}</MenuItem>
                               
                                    
                        </Select>
                </FormControl>

                <div>Selected appointment:</div>
                 <h3>{selectedDate.format('MM.DD')} {selectedTime}</h3>
                <Button sx={{margin:2}} variant="contained" color="secondary" >Book it</Button>
                <Button sx={{margin:1}} variant="outlined" color="secondary" onClick={navigateToAppointments}>Cancel</Button>
               
            </Paper>
             
        </Paper>
        </div>
        
           

        

    </div>
    );
}
