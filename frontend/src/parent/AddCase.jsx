import { Grid, Card, TextField, FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from "@emotion/styled";
import { getAllChildren } from "services/ChildApi";
import { createCase } from "services/CaseApi";


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

    const [child, setChild] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const [childError, setChildError] = useState(false); 
    const [titleError, setTitleError] = useState(false); 
    const [descriptionError, setDescriptionError] = useState(false); 

    const [children, setChildren] = useState([])

    useEffect(() => {
    const getChildren = async () => {
      try{
        const result = await getAllChildren();
        console.log(result);
        setChildren(result);
      } catch(error){
        console.error('Error getAllCases data', error);
      }
    }; 
    getChildren();
  }, [])


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
        if(title == ''){
            setTitleError(true);
        }


        if(title && child && description){
            console.log(child, description, title);
            let c = {
                title: title,
                description: description,
                nickname: "nick",
                childId: child.id,
            }
            createCase(c).then(()=>{navigateToCases()})
            

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
                                    value={child.name}
                                    label="Child"
                                    error={childError}
                                    onChange={(e) =>{setChild(e.target.value);}}
                                >
                                     {children?.map((c) => (
                                    <MenuItem value={c.name}>{c.name}</MenuItem>)
                                    )}
                                   
                                </Select>
                             </FormControl>

                            </div>

                            <div className="title">
                                <TextField 
                                    label="Title"
                                    minRows={3}
                                    variant='outlined'
                                    required
                                    error={titleError}
                                    onChange={(e) => {setTitle(e.target.value);}}
                                />
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