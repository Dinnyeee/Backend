import React, { useEffect, useState } from "react";
import DoctorResponsiveAppBar from "./DoctorResponsiveAppBar";
import { Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { getCaseById, updateCase } from "services/CaseApi";
import {useParams} from "react-router-dom";

export const DetailedCase = (props) => {

    const {id} = useParams();
    const [caseDetails, setCaseDetails] = useState([]);


    useEffect(() => {
        console.log("res"+caseDetails);
        getData(id);
  }, []);   
  
  const getData = async (i) => {
      try{
        const result = await getCaseById(i);
        console.log("detailed ccase reult: "+result);
        setCaseDetails(result);
      } catch(error){
        console.error('Error getDetails data', error);
      }
    }

    

    const handleChangeInPrio = async(e) => {
        let updatedValue={};
        updatedValue ={priority:e.target.value};
        const newCaseDetails = {}
        setCaseDetails(caseDetails =>({
            ...caseDetails,
            ...updatedValue
        }))
    
        await updateCase(newCaseDetails).then(()=>setCaseDetails(newCaseDetails));  
    }

    const handleChangeInStatus = async (e) => {
         let updatedValue={};
        updatedValue ={status:e.target.value};
        const newCaseDetails = {}
        setCaseDetails(caseDetails =>({
            ...caseDetails,
            ...updatedValue
        }))
    
        await updateCase(newCaseDetails).then(()=>setCaseDetails(newCaseDetails));
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
                        <h3>Patient:</h3><p>{caseDetails}</p>
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
                        <h3>Appointment:</h3><p>{caseDetails.appointmentDate}</p>
                     </CardContent>
                     <CardActions>
                        
                     </CardActions>
                </Card>
            </div>
        </div>
    );
}