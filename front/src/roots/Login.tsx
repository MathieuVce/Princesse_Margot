import * as React from 'react';
import { useState } from 'react';
import { EAuth } from '../@types/EAuth';
import { Link } from 'react-router-dom';
import { IAuth } from '../@types/IClient';
import { Auth } from '../components/Auth';
import { checkEmail } from '../utils/utils';
import { Grid, TextField, Button} from '@mui/material';

const Login: React.FunctionComponent = () => {

  const [authValues, setAuthValues] = useState<IAuth>({
    email: 'tmp.tmp@tmp.tmp',
    password: '',
  });

  const handleChangeAuth = (prop: keyof typeof authValues, value: string) => {
    setAuthValues({
        ...authValues,
        [prop]: value
    });
  };

  return (
    <>
      <Auth type={EAuth.login} values={authValues}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Adresse E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          error={!checkEmail(authValues.email)}
          onChange={(e) => handleChangeAuth('email', e.target.value)}
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
          onChange={(e) => handleChangeAuth('password', e.target.value)}
        />
        <Grid item xs textAlign={'right'}>
          <Button variant='text' color='secondary' sx={{ "&:hover": { backgroundColor: 'transparent' } }}>
            <Link to='/password' style={{ color: '#009CAB' }}>
              Mot de passe oublié ?
            </Link>
          </Button>
        </Grid>
      </Auth>
    </>
  );
}

export default Login
