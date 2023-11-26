import React, { useState } from "react";
import DoctorResponsiveAppBar from "./DoctorResponsiveAppBar";
import { Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { getCaseById } from "services/CaseApi";

export const DetailedCase = (props) => {

    const getData = async () => {
      try{
        console.log("Hellothere!")
        const result = await getCaseById(1);
        console.log(result);
        setCaseDetails(result);
      } catch(error){
        console.error('Error getDetails data', error);
      }
    }; 


    const [caseDetails, setCaseDetails] = useState({
        id:1,
        title:"Title of Case", 
        description: "Long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long desciption",
        appointment: "----",
        createdAt: "2023.11.12",
        patient: "Child's Name",
        priority: "TOP",
        status: "INPROGRESS",
    });

    const handleChangeInPrio=(e)=>{
        let updatedValue={};
        updatedValue =e.target.value;
        const newCaseDetails = {
        id:caseDetails.id,
        title:caseDetails.title, 
        description: caseDetails.description,
        appointment: caseDetails.appointment,
        createdAt: caseDetails.createdAt,
        patient: caseDetails.patient,
        priority: updatedValue,
        status: caseDetails.status,
        }
        setCaseDetails(newCaseDetails);
    }

    const handleChangeInStatus=(e)=>{
        let updatedValue={};
        updatedValue =e.target.value;
        const newCaseDetails = {
        id:caseDetails.id,
        title:caseDetails.title, 
        description: caseDetails.description,
        appointment: caseDetails.appointment,
        createdAt: caseDetails.createdAt,
        patient: caseDetails.patient,
        priority: caseDetails.priority,
        status: updatedValue,
        }
        setCaseDetails(newCaseDetails);

    }



    return (
        <div>
            <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
            <div className="case-detailed-container">
                <Card elevation={3} className="detailed-case-paper">
                    <CardContent>                  
                    
                     <Typography variant="h5" component="div" sx={{ fontSize: 48, mb :1.5 }}>
                            Case: {caseDetails.title}
                     </Typography>
                        <h3>Patient:</h3><p>{caseDetails.patient}</p>
                        <div className="prio-status-setter">
                        <div>
                        <h3>Priority:</h3>
                            <FormControl 
                            sx={{ width: 250, margin:1 }}>
                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={caseDetails.priority}
                                    label="Priority"
                                    onChange={(newValue => handleChangeInPrio(newValue))}
                                    >
                                    <MenuItem value={"TOP"}>TOP</MenuItem>
                                    <MenuItem value={"MEDIUM"}>MEDIUM</MenuItem>
                                    <MenuItem value={"LOW"}>LOW</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>

                        
                        <h3>Status:</h3>
                         <FormControl 
                            sx={{ width: 250, margin:1 }}>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={caseDetails.status}
                                    label="Status"
                                    onChange={(newValue => handleChangeInStatus(newValue))}
                                    >
                                    <MenuItem value={"NEW"}>NEW</MenuItem>
                                    <MenuItem value={"INPROGRESS"}>INPROGRESS</MenuItem>
                                    <MenuItem value={"CLOSED"}>CLOSED</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                            </div>
                      
                        <h3>Description:</h3><p>{caseDetails.description}</p>
                        <h3>Opened:</h3><p>{caseDetails.createdAt}</p>
                        <h3>Appointment:</h3><p>{caseDetails.appointment}</p>
                     </CardContent>
                     <CardActions>
                        
                     </CardActions>
                </Card>
            </div>
        </div>
    );
}