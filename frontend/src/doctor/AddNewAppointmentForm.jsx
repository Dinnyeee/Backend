// @ts-nocheck
import React, { useState } from "react";
import Calendar from "react-calendar";
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';

export const AddNewAppointmentForm = (props) => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    return (
        <div>
            <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
            <div>
            <Calendar showWeekNumbers onChange={onChange} value={date} />
                {console.log(date)}
                {date.toString()}
            

            </div>
        </div>
    );
}