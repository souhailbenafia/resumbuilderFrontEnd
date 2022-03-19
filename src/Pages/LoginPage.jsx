
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useDispatch,useSelector} from 'react-redux'
import { LoginAction, Registration } from "../Components/redux/actions/authAction";
import Inputs from'../Components/Common/inputs'
import {useNavigate} from 'react-router-dom'
const theme = createTheme();

function LoginPage() {


  const [form, setForm] = useState({})
  const errors = useSelector(state=>state.errors)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const OnChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(LoginAction(form,navigate));
    
  };
  return (
   
    <div className=" grid grid-cols-1 sm:grid-cols-2">

    <div className=" hidden sm:block h-screen w-full">
        <img  className="w-full h-full object-cover "src="https://process.filestackapi.com/auto_image/compress/VPvVyWktRI2ttYaqaX9J"></img>
    </div>

    <div className="bg-gray-100 flex flex-col justify-center">
    <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}

              >
                <Grid  container spacing={2}>
                
                  
                  <Inputs  label="Email" name="username" type="email" icon="fa-solid fa-user" OnChangeHandler={OnChangeHandler}/>
              

                  <Inputs  label="Password" name="Password" type="password" icon="fa-solid fa-user" OnChangeHandler={OnChangeHandler}/>
                  </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    </div>
    
</div>
  )
}

export default LoginPage