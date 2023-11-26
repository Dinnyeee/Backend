import React, { useState } from "react";

import {  useNavigate } from "react-router-dom";
import { Grid, Card, TextField, Button } from "@mui/material";
import isEmail from 'validator/lib/isEmail';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
     const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [role, setRole] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(false)
        setPassError(false)
        console.log(email);

        if(email == '' || !isEmail(email)){
            setEmailError(true);
        }

        if(pass == ''){
            setPassError(true);
        }
        

        if(email && role && pass){
            //DO SOME MAGIC, API CALLING CREATING NEW USER
            //THEN NAVIGATE TO CORRECT PAGE
        }
        //TODO log in API - based on result navigate to appropriate site
        //get the role of the received user and then...
        switch(role){
            case "DOCTOR":
                navigate("/doctorstart");
                break;
            case "PARENT": 
                navigate("/parent");
                break;
            case "ASSISTANT":
                navigate("/administration");
                break;
            default: break;
        }
    }

    const navigateToHome  = (e) => {
        navigate("/doctorstart")
    }

    return (
     

         <div> 
           
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '80vh' }}
                >

                <Grid item xs={3}>
                    <Card className='mycard'>
                        
                            <form noValidate autoComplete='off' className='myform' onSubmit={handleSubmit}>
                                <h1>Welcome! Log in!</h1>
                                <div>
                                    <TextField 
                                        label="Email"
                                        variant='outlined'
                                        required
                                        value={email}
                                        type="email"
                                        error={emailError}
                                        onChange={(e) => {setEmail(e.target.value);}}
                                    />
                                </div>

                                <div>
                                    <TextField 
                                        label="Password"
                                        variant='outlined'
                                        required
                                        value={pass}
                                        type="password"
                                        error={passError}
                                        onChange={(e) => {setPass(e.target.value);}}
                                    />
                                </div>
                                

                                <div className='buttons-in-form'>
                                    <Button variant='contained' color='secondary' type='submit'>Log in</Button>  
                                    <Button variant='outlined' color="secondary" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</Button>
                                </div>
                            </form>
                    </Card>
                </Grid>
             </Grid>
        </div>
    );
}