import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Grid, Card, TextField, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import isEmail from 'validator/lib/isEmail';
import { register } from "services/AuthApi";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [roleError, setRoleError] = useState(false);

    const navigate = useNavigate();
     const navigateToLogin = () =>{
        navigate("/login") ;
    }

     const handleSubmit = (e) => {
        e.preventDefault();
         setNameError(false)
        setEmailError(false)
        setRoleError(false)
        setPassError(false)
        
        if(name == ''){ setNameError(true);}
        if(email == '' || !isEmail(email)){setEmailError(true);}
        if(pass == ''){setPassError(true);}
        if(role == ''){ setRoleError(true); }

        if(name && email && role && pass){

            const ReginJSON = {
            'name': name,
            'email': email,
            'password': pass,
            'role': role
            }       

          /*  await register(ReginJSON);
            const LoginJSON = {
            'email': email,
            'password': pass   
            }
           await login(LoginJSON);*/
        }
    
        
        
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
                                <h1>Welcome! Sign up!</h1>
                                <div>
                                    <TextField 
                                        label="Name"
                                        variant='outlined'
                                        required
                                        value={name}
                                        error={nameError}
                                        onChange={(e) => {setName(e.target.value);}}
                                    />
                                </div>
                                
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

                                      <FormControl sx={{ width: 250 }}>
                                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={role}
                                            label="Role"
                                            error={roleError}
                                            onChange={(e) => setRole(e.target.value)}
                                            >
                                                <MenuItem value={"DOCTOR"}>Doctor</MenuItem>
                                                <MenuItem value={"ASSISSTANT"}>Assistant</MenuItem>
                                                <MenuItem value={"PARENT"}>Parent</MenuItem>
                                            </Select>
                                    </FormControl>

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
                                    <Button variant='contained' color='secondary' type='submit'>Sign up</Button>  
                                    <Button variant='outlined' color="secondary" onClick={navigateToLogin}>Already have an account? Log in here.</Button>
                                </div>
                            </form>
                    </Card>
                </Grid>
             </Grid>
        </div>
    )
}