import * as React from 'react';
import { useState } from 'react';
import { EAuth } from '../@types/EAuth';
import { Auth } from '../components/Auth';
import { Grid, TextField } from '@mui/material';
import { IAuth, IClient } from '../@types/IClient';
import { IconTextField } from '../components/IconTextField';
import { checkBirthDate, checkEmail, checkPassword } from '../utils/utils';
import { VisibilityRounded, VisibilityOffRounded } from '@material-ui/icons';

const Register: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [authValues, setAuthValues] = useState<IAuth>({
      email: 'tmp.tmp@tmp.tmp',
      password: 'Motdepasse1',
  });
  const [detailsValues, setDetailsValues] = useState<IClient>({
    firstName: '',
    lastName: '',
    birthDate: new Date('2000-01-01'),
    email: '',
  });

  const handleChangeDetails = (prop: keyof typeof detailsValues, value: string) => {
    setDetailsValues({
        ...detailsValues,
        [prop]: value
    });
  };

  const handleChangeAuth = (prop: keyof typeof authValues, value: string) => {
    setAuthValues({
        ...authValues,
        [prop]: value
    });
  };

  return (
    <Auth type={EAuth.register} values={{
    login: {...authValues},
    details: {...detailsValues},
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Prénom"
            autoFocus
            onChange={(e) => handleChangeDetails('firstName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Nom"
            name="lastName"
            autoComplete="family-name"
            onChange={(e) => handleChangeDetails('lastName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Addresse E-mail"
            name="email"
            autoComplete="email"
            error={!checkEmail(authValues.email)}
            helperText={!checkEmail(authValues.email) ? "Veuillez suivre le format d'email: exemple@exemple.com" : ''}
            onChange={(e) => handleChangeAuth('email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <IconTextField
          variant='outlined'
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mot de passe"
          type={visible ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          onChange={(e: { target: { value: string; }; }) => handleChangeAuth('password', e.target.value)}
          iconEnd={visible ? <VisibilityOffRounded/> : <VisibilityRounded/>}
          onIconClick={() => setVisible(!visible)}
          error={!checkPassword(authValues.password)}
          helperText={!checkPassword(authValues.password) ? "Votre mot de passe doit contenir au moins 6 caractères, une lettre majuscule et un chiffre. Pas d'accent ni de caractère spécial." : ' '}
        />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="date"
            label="Date de naissance"
            type="date"
            defaultValue="2000-01-01"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChangeDetails('birthDate', e.target.value)}
            error={!checkBirthDate(detailsValues.birthDate)}
            helperText={!checkBirthDate(detailsValues.birthDate) ? "Vous devez avoir au moins 10 ans" : ' '}
          />
        </Grid>
      </Grid>
    </Auth>
  );
};
  
export default Register
  