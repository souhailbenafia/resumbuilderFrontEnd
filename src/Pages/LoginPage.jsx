
import React, { useState ,useEffect } from "react";
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


const validate = (values) => {
  const errors = {};
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!values.username) {
    errors.username = "username is required!";
  } 
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } 
  return errors;
};



function LoginPage() {
  const initialValues = { username: "", password: "" };
  const [form, setForm] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector(state => state.error.error.error)

  const OnChangeHandler = (e)=>{
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value 
    })
   
  }
 const onquite = ()=>{
  setFormErrors(validate(form));
 }

  const handleSubmit = (event) => {

    event.preventDefault();
    setFormErrors(validate(form));

    if (Object.keys(formErrors).length === 0 ) {
    dispatch(LoginAction(form,navigate));
    }

   

    
    
  };

  useEffect(() => {
    
   
  }, [formErrors]);
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
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}

              >
                <Grid  container spacing={2}>
                
                  
                  <Inputs  label="Email" name="username" type="email" icon="fa-solid fa-user" onbrul={onquite} OnChangeHandler={OnChangeHandler} errors={formErrors.username}/>
              

                  <Inputs  label="Password" name="password" type="password" icon="fa-solid fa-user" onbrul={onquite} OnChangeHandler={OnChangeHandler} errors={formErrors.password}/>
                  </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="register" variant="body2">
                      Don't have an account? Sign Up for free now!
                    </Link>
                  </Grid>

                  
                </Grid>
              </Box>
              {error && (
                 <span className="flex  font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
             {error}
             </span>)}
             
              
            </Box>
          </Container>
        </ThemeProvider>
    </div>
    
</div>
  )
}

export default LoginPage