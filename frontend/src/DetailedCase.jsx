import React, { useState } from "react";
import DoctorResponsiveAppBar from './doctor/DoctorResponsiveAppBar';
import Chat from "./chat/Chat";



export const DetailedCase = (props) => {

    return (
        <div>
            <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
            <Chat></Chat>
                </div>
    );
}