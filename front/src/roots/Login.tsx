import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AlertPop } from '../components/Alert';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ClientContext } from '../contexts/ClientContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login: React.FunctionComponent = () => {

  // const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { login } = useContext(ClientContext); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      email: data.get('email')?.toString()!,
      password: data.get('password')?.toString()!
    };
    const res = await login(values);

    if (res === 'logged in') {
      // navigate("/home");
      setShow(true);
    }
  };

  
  return (
    <>
        <AlertPop show={show} setShow={setShow}/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Se connecter
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary"/>}
              label="Rester connecté"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2" color={'secondary'}>
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item xs textAlign={'end'}>
                <Link variant="body2" color={'secondary'}>
                  Pas encore de compte ? S'inscrire
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
         </>
  );
}

export default Login
