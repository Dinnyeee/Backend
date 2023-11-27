
import ResponsiveAppBar from "./ResponsiveAppBar";
import React, { useEffect, useState } from "react";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllCases } from "services/CaseApi";





export default function BookAppointment(){

    const navigate = useNavigate();

    const [selectedTime, setSelectedTime] = useState(dayjs(new Date()))
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))
    const [selectedCase, setSelectedCase] = useState(null)
    const [cases, setCases] = useState(null)

    
    const navigateToAppointments = () => {
        navigate("/myappointments")
    }
   

    useEffect(() => {
    const getCases = async () => {
      try{
        const result = await getAllCases();
        console.log(result);
        setCases(result);
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 

  
    getCases();
  }, [])

    const isWeekend = (date) => {
        const day = date.day();
        return day === 0 || day === 6;
    };

    const handleBookAppointment = ()=>{
        let updatedCase = selectedCase;
        updatedCase.appointmentDate = selectedTime;
        updatedCase(updatedCase).then(
             navigate("/myappointments")
        );
    }
    return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        
        <div className="fix-center-card">
            <Paper className="book-appointment-container"> 
            
            <Paper className="date-picker-container">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <StaticDatePicker
                    disablePast
                    value={selectedDate.format('MM.dd')}
                    onChange={(e) => setSelectedDate(e)}
                    shouldDisableDate={isWeekend}></StaticDatePicker>
             </LocalizationProvider>
            </Paper>
            <Paper className="time-picker-container">
                 
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                   <TimePicker className="time-picker-form-field"
                        label="Pick a time"
                        value={selectedTime.format('HH:mm')}
                        onChange={(newValue) => setSelectedTime(dayjs(newValue))}
                    />
                   </LocalizationProvider>

                <FormControl sx={{ width: 250 }} className="time-picker-form-field">
                        <InputLabel id="demo-simple-select-label">Case</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCase}
                        label="Case"
                        onChange={(e) => setSelectedCase(e.target.value)}
                        >
                          { cases?.map((c)=>{
                              <MenuItem value={c}>{"c.title"}</MenuItem>
                         })}
                                   
                                   
                               
                                    
                        </Select>
                </FormControl>

                <div>Selected appointment:</div>
                 <h3>{selectedDate.format('MM.DD')} {selectedTime.format('HH:mm')}</h3>
                <Button sx={{margin:2}} variant="contained" color="secondary" onClick={handleBookAppointment}>Book it</Button>
                <Button sx={{margin:1}} variant="outlined" color="secondary" onClick={navigateToAppointments}>Cancel</Button>
               
            </Paper>
             
        </Paper>
        </div>
        
           

        

    </div>
    );
}
