import React, { useState } from "react";
import DoctorResponsiveAppBar from './doctor/DoctorResponsiveAppBar';
import { Chat } from "@mui/icons-material";



export const DetailedCase = (props) => {

    return (
        <div>
            <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
            <Chat></Chat>
                </div>
    );
}