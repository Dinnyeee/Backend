import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            General Practitioner Site
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
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                      
                      <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}> 
                        <Link to = '/admin'>Admin</Link>
                      </Button>

                       <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Link to = '/cases'>Cases</Link>
                      </Button>
                      
                      <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}> 
                         <Link to = '/appointments'>Appointments</Link>
                      </Button>
                    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}> 
                         <Link to = '/'>Log out</Link>  
                     </Button>
                    
                    </Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            GPApp
          </Typography>
          <Box sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' } }}>
              
              <Button onClick={handleCloseNavMenu}sx={{ my: 2, color: 'white', display: 'block' }}> 
                <Link to = '/admin'> Admin </Link>
              </Button>

              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}> 
                 <Link to = '/cases'>Cases</Link>                
              </Button>

              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}> 
                <Link to = '/appointments'>Appointments</Link> 
              </Button>

              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}> 
                <Link to = '/'>Log Out</Link>                 
              </Button>
            
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;