import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const UserTable = (props) => (
  <Box>
    <Typography variant="h4"> Students Details  Table</Typography>
    <TableContainer component={Paper} >
      <Table aria-label="simple table" sx={{bgcolor:"lightblue",}}>
        <TableHead>
          <TableRow>
            <TableCell> First Name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Edit & Delete Actions</TableCell>
            
            {/* <TableCell align="right">Delete Actions</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">
                <Stack spacing={1} direction="row" >
                  <Button variant="outlined" onClick={()=>{
                            props.editRow(user)
                        }}> <EditIcon/></Button>
                        <Button
                    variant="outlined"
                    onClick={() => props.deleteUser(user.id)}
                  >
                    <DeleteIcon/>
                    
                  </Button>
                  </Stack>
                </TableCell>
               
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="right" colSpan={3}>
                {" "}
                no useres
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
export default UserTable;
