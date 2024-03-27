import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const boxStyle = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
};
function Registration() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={boxStyle}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={4}>
            <Box
              sx={{
                background: "linear-gradient(to right, blue , navy)",
                backgroundSize: "cover",
                height: "80vh",
                color: "#f5f5f5",
                borderRadius: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 50,
                  fontWeight: 300,
                }}
              >
                Welcome to Sagar Cake Studio
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={8}>
            <Box sx={{ position: "relative", top: "3%", left: "37%" }}>
              <Avatar sx={{ ml: "35px", mb: "4px", backgroundColor: "blue" }}>
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h4" color={"blue"}>
                Sign Up
              </Typography>
            </Box>
            <Box sx={{ mr: 6, ml: 6, mt: 4 }}>
              <TextField label="Full Name" id="fname" fullWidth required />
              <TextField
                type="email"
                id="email"
                label="Email"
                fullWidth
                sx={{ mt: 1 }}
                required
              />
              <TextField
                label="Mobile number"
                id="mobileNo"
                fullWidth
                sx={{ mt: 1 }}
                required
              />
              <TextField
                type="password"
                label="Password"
                id="password"
                fullWidth
                sx={{ mt: 1 }}
                required
              />
              <TextField
                type="password"
                label="Confirm Password"
                id="CPassword"
                fullWidth
                sx={{ mt: 1 }}
                required
              />
            </Box>
            <Box sx={{ mr: 6, ml: 6, mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ fontSize: "20px", backgroundColor: "blue" }}
                onClick={() => navigate('/')}
              >
                {" "}
                Sign up
              </Button>
            </Box>
            <Box sx={{ mr: 6, ml: 6, mt: 2 }}>
              <Stack direction={"row"} spacing={2}>
                <Typography variant="body1" component={"span"}>
                  {" "}
                  Already have an account{" "}
                  <span
                    style={{ cursor: "pointer", color: "blueviolet" }}
                    onClick={() => navigate("/")}
                  >
                    Sign In
                  </span>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Registration;
