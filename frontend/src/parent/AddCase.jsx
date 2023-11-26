import { Grid, Card, TextField, FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from "@emotion/styled";


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function AddCase(){
    const navigate = useNavigate();

    const [child, setChild] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const [childError, setChildError] = useState(false); 
    const [descriptionError, setDescriptionError] = useState(false); 

    const [children, setChildren] = useState([  // WE SHOULD GET THE DATA FROM A CONTROLLER
        { id: 1, name: "Mario", taj:1231  },
        { id: 2, name: "David", taj:1231  },
        { id: 3, name: "Marta", taj:1231  },
        { id: 4, name: "Mache", taj:1231  },
    ])


    const navigateToCases = () => { 
        navigate('/parent');
    }
    const handleSubmit = (e) => {
        e.preventDefault()
      

        if(child == ''){
            setChildError(true);
        }

        if(description == ''){
            setDescriptionError(true);
        }


        if(child && description){
            console.log(child, description);
            navigateToCases();

        }
       
        //TODO calling controller to add it to the list without id
        // only after that succeeds do we navigate back 
        // navigate back to listchild component where the new item will show as well
    }



return(
 <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >

            <Grid item xs={3}>
                <Card className='mycard-case-form'>
                        <form noValidate autoComplete='off' className='myform' onSubmit={handleSubmit}>
                            <div>
                              <FormControl sx={{ width: 250 }}>
                                <InputLabel id="demo-simple-select-label">Child</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={child}
                                    label="Child"
                                    onChange={(e) =>{setChild(e.target.value);}}
                                >
                                    {children.map((c) => (
                                    <MenuItem value={c.name}>{c.name}</MenuItem>)
                                    )}
                                </Select>
        </FormControl>

                            </div>
                    
                            <div className="description">
                                <TextField 
                                    label="Description"
                                    multiline
                                    minRows={3}
                                    variant='outlined'
                                    required
                                    error={descriptionError}
                                    onChange={(e) => {setDescription(e.target.value);}}
                                />
                            </div>
                         
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>

                            <div className='buttons-in-form'>
                                <Button variant='contained' color='secondary' type='submit'>Save</Button>  
                                <Button onClick={navigateToCases} variant='outlined'>Cancel</Button>
                            </div>
                        </form>
                </Card>
            </Grid>
        </Grid>
    </div>
)};