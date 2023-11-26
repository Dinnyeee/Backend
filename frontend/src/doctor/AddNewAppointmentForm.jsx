// @ts-nocheck
import React, { useState } from "react";
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";



export const AddNewAppointmentForm = (props) => {

    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))
    const [value, setValue] = React.useState(dayjs('2022-04-17T08:00'));

    const handleAdding=(e)=>{
        //TODO create date from selectedDate and value and create a new appointment for that
    }

    const isWeekend = (date) => {
        const day = date.day();
        return day === 0 || day === 6;
    };

    const navigate = useNavigate();
    const navigateToAppointments = () => {
        navigate("/appointments")
    }
    return (
        <div>
            <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
            <div className="fix-center-card">
             <Paper className="book-appointment-container"> 
                <Paper className="date-picker-container">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    <StaticDatePicker
                        disablePast
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e)}
                        shouldDisableDate={isWeekend}></StaticDatePicker>
                </LocalizationProvider>
                </Paper>

                <Paper className="time-picker-container">
                   <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                   <TimePicker className="time-picker-form-field"
                        label="Pick a time"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                   </LocalizationProvider>
                     <div>New appointment:</div>
                 <h3>{selectedDate.format('MM.DD')} {value.format('HH:mm')}</h3>
                <Button sx={{margin:2}} variant="contained" color="secondary" onClick={handleAdding} >Add</Button>
                <Button sx={{margin:1}} variant="outlined" color="secondary" onClick={navigateToAppointments}>Cancel</Button>
               
                </Paper>
            </Paper>
            </div>
        </div>
    );
}