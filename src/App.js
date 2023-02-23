import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Adduser from "./Components/Adduser";
import Table from "./Components/Table";
import EditUser from './Components/Edituser';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SchoolIcon from '@mui/icons-material/School';

const pages = ['', '', ''];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function App() {

  const usersData = [
    {id:1,name:'Luxshana',username:'sivapatham'},
    {id:2,name:'Kayathiri',username:'sivapatham'},
    {id:3,name:'Kashmiha',username:'Pirashana'},
    {id:4,name:'diya',username:'dinesh'},
    {id:5,name:'shopa',username:'dinesh'},
    {id:6,name:'heshan',username:'dinesh'},
    
    
];
const addUser = (user)=>{
  user.id = users.length + 1;
  setUsers([...users,user])
}
const deleteUser = (id)=>{
  setUsers(users.filter((user)=>user.id!==id))
  // setEditing(false);
}
const [users,setUsers] = useState(usersData);
const [editing,setEditing] = useState(false)
    

const initialFormState = {id:null,name:'',username:''}

const [currentUser,setCurrentUser] = useState(initialFormState);

const editRow = (user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});
}

const updateUser = (id,updatedUser)=>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
}
const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
<Grid container spacing={2}sx={{p:3,color:"",bgcolor:"lightblue"}} >
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-Education
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            </Menu>
          </Box>
          <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-Education
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/e-learning-abstract-education-white-background-done-d-37073831.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
<Grid item xs={12} md={6} >
<Typography>
{editing?(<Box>
                <Typography>Edit Student details</Typography>
                <EditUser 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </Box>):(<Box>
                <Typography variant="h4">Add Student details</Typography>
          <Adduser addUser={addUser} />
          </Box>
            ) 
        }
</Typography>
</Grid>
<Grid item xs={12} md={6}>
<Typography>
  <Table editRow={editRow} deleteUser={deleteUser} users={users}/>
</Typography>
</Grid>
{/* <Grid item xs={12} md={4}>
<Typography>
  yop
</Typography>
</Grid> */}
  </Grid>
  );
}

export default App;
