import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Link, useNavigate } from 'react-router-dom';

interface IHeaderProps {
  color: string;
}

export const Header: React.FC<IHeaderProps> = ({ color }) => {
  const [navBar, setNavBar] = React.useState<null | HTMLElement>(null);
  const pages = ['Login', 'Register'];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavBar(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setNavBar(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" style={{ backgroundColor: color }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', flexGrow: 10 }}>
            <Button color="inherit" component={Link} to="/">Princesse Margot</Button>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none' }}}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navBar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(navBar)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }}}>
              {pages.map((page) => (
                <MenuItem key={page} color='inherit' onClick={() => {handleCloseNavMenu(); navigate(`/${page.toLowerCase()}`)}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};