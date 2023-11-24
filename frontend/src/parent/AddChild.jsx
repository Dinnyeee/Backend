import Container from '@mui/material/Container';
import React, { useState } from "react";
import { Button, Card, Grid, TextField } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';




export default function AddChild(){
  const navigate= useNavigate();

   const navigateToHome = () => {
    navigate('/parent');
  }
      const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('faef');
    const [taj, setTaj] = useState('xxxx2112');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleSubmitForm = (e) => {

    }
    return (

       <div>
<ResponsiveAppBar></ResponsiveAppBar>
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '80vh' }}
 >

  <Grid item xs={3}>
<Card className='mycard'>
<form noValidate autoComplete='off' className='myform'>
                    <div>
                        <TextField 
                    label="Name"
                    variant='outlined'
                    required
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    />
                    </div>
                    
                    <div>
                    <TextField 
                    label="TAJ"
                    variant='outlined'
                    required
                    onChange={(event) => {
                        setTaj(event.target.value);
                    }}
                    />
                    </div>
                    <div>
                    <TextField 
                    helperText="Birthdate"
                    variant='outlined'
                    required
                    type='date'
                    />
                    </div> 

                    <div className='buttons-in-form'>
                        <Button variant='contained'>Save</Button>  
                        <Button onClick={navigateToHome} variant='text'>Cancel</Button>
                    </div>
                         

                </form>
     
           
</Card>
</Grid>
</Grid>

             </div>

                
             
         
        
    )}

