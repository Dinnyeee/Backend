import {useEffect, useState} from "react";
import Pusher from "pusher-js";
import React from 'react';
import axios from 'axios';
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Home() {
    const [username, setUsername] = useState('Karoly');
    const [userId, setUserId] = useState(0);
    const [caseId, setCaseId] = useState(0);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let allMessages = [];

    useEffect(() => {
        Pusher.logToConsole = true;

        var pusher = new Pusher('d59e879f73837467b4fe', {
          cluster: 'eu'
        });
    
        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
          alert(JSON.stringify(data));
        });
    });

    const submit = async (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8080/ws/message',{userId: userId, caseId: caseId, message: message})
            .then((responses:any) : void => {
                console.log(responses)

            })
        /*await fetch('http://localhost:8080/api/messages', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });*/

        setMessage(e.target.value);
    }

    return (
        <div className="container">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >
        <Paper elevation={6}  >
            
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                      crossOrigin="anonymous"/>
            

            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                <div
                    className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                    <input className="fs-5 fw-semibold" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="list-group list-group-flush border-bottom scrollarea" style={{minHeight: "500px"}}>
                    {messages.map(message => {
                        return (
                            
                            <div className="list-group-item list-group-item-action py-3 lh-tight">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{message.username}</strong>
                                </div>
                                <div className="col-10 mb-1 small">{message.message}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <form onSubmit={submit}>
                <Grid>
                <input className="form-control" placeholder="Write a message" value={message}
                       onChange={e => setMessage(e.target.value)}
                       
                />
                <IconButton aria-label="delete" onClick={submit}>
                    <SendIcon />
                </IconButton>
                </Grid>
            </form>
            </Paper>
            </Grid>
        </div>
    )
}