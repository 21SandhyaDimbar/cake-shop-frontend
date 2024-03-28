
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

import React from 'react'
const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:2
};
function FrogotPassword() {
  return (
    <>
       <Box sx={boxStyle}>
       <Box sx={{ position: "relative", top: "5%", display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <Typography
                      component="h3"
                      variant="h4"
                      sx={{color:'blue'}}
                    >
                      Reset Password
                    </Typography>
                  </Box>
                  <Box height={45} />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        required
                        fullWidth
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        required
                        fullWidth
                        type="password"
                        id="cpassword"
                        label="Confirm Password"
                        name="password"
                        autoComplete="password"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ml:'3em', mr:'3em'}}>
                      <Button type="submit" 
                      variant="contained" 
                      fullWidth='true'
                      size="large"
                      sx={{mt:'20px', mr:'20px', borderRadius:2, color:'#fff', minWidth:'170px',
                      backgroundColor:'blue'}}> 
                      Reset Password </Button>
                    </Grid>
                    </Grid>
       </Box>
       
    </>
  )
}

export default FrogotPassword