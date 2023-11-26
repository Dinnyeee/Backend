import { Grid, Card, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminResponsiveAppBar from "./AdminResponsiveNavbar";

export default function EditPraxis(){
    
    const [selectedDoctor, setSelectedDoctor] = useState(''); //FETCH IT BASED ON URL OR PROPS?
    
    const [name, setName] = useState(''); //TODO TO GET IT FROM ID. IT COULD BE PASSED FROM PROPS OR IDK
    const [nameError, setNameError] = useState(false); 
    const [doctorError, setDoctorError] = useState(false); 
    
    const navigate = useNavigate()
    const navigateToHome =()=>{
        navigate("/administration")
    }
    const [doctors, setDoctors] = useState([  // WE SHOULD GET THE DATA FROM A CONTROLLER
        { id: 1, name: "Mario", taj:1231  },
        { id: 2, name: "David", taj:1231  },
        { id: 3, name: "Marta", taj:1231  },
        { id: 4, name: "Mache", taj:1231  },
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setDoctorError(false)

        if(name == ''){
            setNameError(true);
        }

        if(selectedDoctor == ''){
            setDoctorError(true);
        }

        if(name && selectedDoctor){
            navigateToHome();

        }
       
        //TODO calling controller to add it to the list without id
        // only after that succeeds do we navigate back 
        // navigate back to listchild component where the new item will show as well
    }


    return (
        <div>
        <AdminResponsiveAppBar></AdminResponsiveAppBar>
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
                            <div className="title-of-form"><h2>Edit praxis</h2></div>
                            <div>
                                <TextField 
                                    label="Name of praxis"
                                    variant='outlined'
                                    required
                                    error={nameError}
                                    onChange={(e) => {setName(e.target.value);}}
                                />
                            </div>
                    
                             <div>
                              <FormControl sx={{ width: 250 }}>
                                <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedDoctor}
                                    label="Doctor"
                                    error={doctorError}
                                    onChange={(e) =>{setSelectedDoctor(e.target.value);}}
                                >
                                    {doctors.map((c) => (
                                    <MenuItem value={c.name}>{c.name}</MenuItem>)
                                    )}
                                </Select>
                             </FormControl>

                            </div>
                            

                            <div className='buttons-in-form'>
                                <Button variant='contained' color='secondary' type='submit'>Save</Button>  
                                <Button onClick={navigateToHome} variant='outlined'>Cancel</Button>
                            </div>
                        </form>
                </Card>
            </Grid>
        </Grid>
    </div>
    )
}