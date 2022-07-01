import React, { useState,useEffect } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import {useDispatch,useSelector} from 'react-redux'
import { Registration } from "../Components/redux/actions/authAction";
import Inputs from'../Components/Common/inputs'
import {useNavigate} from 'react-router-dom'

const theme = createTheme();

const validate = (values) => {
  const errors = {};
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!values.firstName) {
    errors.firstName = " firstName! is required!";
  } 
  if (!values.lastName) {
    errors.lastName = "lastName is required!";
  } 
  if (!values.genre) {
    errors.genre = "genre is required!";
  } 
  // if (!values.Birthdate) {
  //   errors.Birthdate = "Birthdate is required!";
  // } 
  if (!values.email) {
    errors.email = "email is required!";
  } 
  if (!values.Phone) {
    errors.Phone = "PhoneNumber is required!";
  } 
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } 
  return errors;
};


const Registerpage = () => {
  const [form, setForm] = useState({ "Societe": "dddd"})
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const error = useSelector(state => state.error.error.title)
  const [dateNaissance, setdateNaissance] = useState(new Date());
  const [genre, setGenre] = useState("");

  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };

  const OnChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const onbrul = ()=>{
    setFormErrors(validate(form));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(form));
    if (Object.keys(formErrors).length === 0 ) {
    dispatch(Registration(form,navigate));
    }
    
  };
  useEffect(() => {
   
  }, [formErrors]);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2">
      <div className=" hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover "
          src="https://process.filestackapi.com/auto_image/compress/VPvVyWktRI2ttYaqaX9J"
        ></img>
      </div>
      <div>
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={OnChangeHandler}
                      onBlur={onbrul}
                    />
                     <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formErrors.firstName}
        </span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={OnChangeHandler}
                      onBlur={onbrul}
                    />
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formErrors.lastName}
        </span>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Genre
                      </InputLabel>
                      <Select
                        labelId="genre"
                        name="genre"
                        
                        value={genre}
                        label="Genre"
                        onChange={handleChangeGenre}
                        fullWidth
                        autoComplete="family-name"
                        required
                      >
                        <MenuItem value="">
                          <em></em>
                        </MenuItem>
                        <MenuItem value="Homme">Homme</MenuItem>
                        <MenuItem value="Femme">Femme </MenuItem>
                        <MenuItem value="Autre">Autre</MenuItem>
                      </Select>
                    </FormControl>
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formErrors.genre}
        </span>
                  </Grid>

                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        fullWidth
                        required
                        name="Birthdate"
                        label="Brirthday"
                        value={dateNaissance} 
                        onChange={(dateNaissance) => {
                          setdateNaissance(dateNaissance);
                        }}
                        renderInput={(params) => (
                          <TextField fullWidth onChange={OnChangeHandler }  {...params} />
                        )}
                      />
                    </LocalizationProvider>
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formErrors.Birthdate}
        </span>
                  </Grid>
                  
                  
                  <Inputs  label="Email" name="email" type="email" icon="fa-solid fa-user"  onbrul={onbrul} OnChangeHandler={OnChangeHandler} errors={formErrors.email}/>

                  <Inputs  label="Phone number" name="Phone" type="number" icon="fa-solid fa-user"  onbrul={onbrul} OnChangeHandler={OnChangeHandler} errors={formErrors.PhoneNumber}/>
              
                  <Inputs  label="Password" name="password" type="password" icon="fa-solid fa-user"  onbrul={onbrul} OnChangeHandler={OnChangeHandler} errors={formErrors.password}/>
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
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
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
  );
};

export default Registerpage;

