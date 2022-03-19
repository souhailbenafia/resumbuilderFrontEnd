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

const Registerpage = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const errors = useSelector(state=>state.errors)
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(Registration(form,navigate));
    
  };
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
                    />
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
                    />
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
                  </Grid>
                  
                  
                  <Inputs  label="Email" name="email" type="email" icon="fa-solid fa-user" OnChangeHandler={OnChangeHandler}/>
              

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
  );
};

export default Registerpage;

