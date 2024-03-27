import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import cakeBg from "../../Assets/cakeBg.jpg";
import { useNavigate } from "react-router-dom";
const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:2
};
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={boxStyle}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              sx={{
                backgroundImage: `url(${cakeBg})`,
                backgroundSize: "cover",
                marginTop: "25px",
                marginLeft: "15px",
                marginRight: "15px",
                height: "63vh",
                color: "#f5f5f5",
                borderRadius:5
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              sx={{
                backgroundSize: "cover",
                height: "70vh",
                minHeight: "500px",
                backgroundColor: "#3b33d5",
                borderRadius:2
              }}
            >
              <ThemeProvider theme={darkTheme}>
                <Container>
                  <Box height={35} />
                  <Box sx={{ position: "relative", top: "50%", left: "37%" }}>
                    <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}>
                      <LockIcon />
                    </Avatar>
                    <Typography
                      component="h1"
                      variant="h4"
                      sx={{ color: "#ffffff" }}
                    >
                      {" "}
                      Sign In
                    </Typography>
                  </Box>
                  <Box height={35} />
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Username"
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
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="body1"
                          component={"span"}
                          sx={{ marginTop: "20px", cursor: "pointer", color:'#fff' }}
                          onClick={() => {
                            navigate("/reset-pass");
                          }}
                        >
                          Forgot Password?
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ml:'5em', mr:'5em'}}>
                      <Button type="submit" 
                      variant="contained" 
                      fullWidth='true'
                      size="large"
                      sx={{mt:'10px', mr:'20px', borderRadius:28, color:'#fff', minWidth:'170px',
                      backgroundColor:'#FF9A01'}}> 
                      Sign In</Button>
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <Stack direction={'row'} spacing={2}>
                        <Typography variant="body1" component='span' sx={{mt:20, color:'#fff'}}>
                          Not registered yet?{" "}
                          <span style={{color:'#beb4fb' ,cursor:'pointer'}}
                           onClick={()=>{navigate('/register')}}
                          >
                            Create an Account
                          </span>
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
