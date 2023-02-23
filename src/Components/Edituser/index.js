import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl";
import { TextField, FormLabel, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const EditUser = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

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
      <TextField id="outlined-basic"   onChange={handleInputChange} name="name"  value={user.name} />
      <FormLabel>
       Last Name
      </FormLabel>
      <TextField id="outlined-basic"  onChange={handleInputChange} name="username" value={user.username}/>

<Stack spacing={2} direction="row" sx={{p:1,}}>
      <Button variant="contained" onClick={
      event => {
          event.preventDefault();
          if(!user.name||!user.username) return;
          props.updateUser(user.id,user);
      }
  }>update</Button>
  <br/>
        <Button variant="contained"onClick={()=>{
                props.setEditing(false)
            }}>cancel</Button>
            </Stack>
      
    </FormControl>
  </Grid>
    )
 }

export default EditUser 