import { useState } from "react";
import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl";
import { TextField, FormLabel, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',username:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    }
    return (
    
    <Grid container spacing={1} alignItems="flex-end">
    <FormControl 
    component="form" alignItems="flex-end"
    sx={{display:"flex",p:3}}
   
      
      
    >
      
      <FormLabel>
       First Name
      </FormLabel>
      <TextField id="outlined-basic"   onChange={handleInputChange} name="name" value={user.name}/>
      <FormLabel>
        Last Name
      </FormLabel>
      <TextField id="outlined-basic"  onChange={handleInputChange} name="username" value={user.username}/>
<Typography sx={{p:1}}>

      <Button variant="contained" onClick={event => {
            event.preventDefault();
             if(!user.name||!user.username) return;
            props.addUser(user);
            setUser(initialFormState);
        }}>Add</Button>
      </Typography>
    </FormControl>
  </Grid>
    )
 }

export default AddUserForm;