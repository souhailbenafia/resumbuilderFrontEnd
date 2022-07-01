import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/actions/authAction';

const pages = ['Home', 'Create cv', 'Profile'];
const links = ['/home','/info','/profilepage']
const settings = ['Logout'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutHanlder= () => {

    dispatch(Logout());
    
  };


  return (
    <AppBar position="static " color='transparent'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
          color='white'
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography >
          <Box color='white' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Link className='mx-5 text-lg font-semibold' to={"/home"}>
                Home
              </Link>
              <Link className='mx-5 text-lg font-semibold' to={"/info"}>
                Crée un cv
              </Link>
              <Link className='mx-5 text-lg font-semibold ' to={"/profile"}>
                profile
              </Link>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Box color="white" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          <Link className='text-lg font-semibold' to="/login" onClick={LogoutHanlder}>Logout</Link>

         
        </Box>
                
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
