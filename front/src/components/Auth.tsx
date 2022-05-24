import { EAuth } from "../@types/EAuth";
import { LoadingButton } from '@mui/lab';
import { checkEmail } from '../utils/utils';
import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AlertContext } from "../contexts/AlertContext";
import { ClientContext } from "../contexts/ClientContext";
import { IAuth, IPassword, IRegister, IResponse } from "../@types/IClient";
import { LockOutlined, PersonRounded, LockOpenRounded, RotateLeftRounded } from '@material-ui/icons';
import { Box, Grid, Avatar, IconProps, Checkbox, Typography, FormControlLabel, Button } from '@mui/material';

interface IAuthProps {
    type: EAuth;
    values: IAuth | IRegister | IPassword;
}

export const Auth: React.FC<IAuthProps> = ({ type, values, children }) => {
  const { login, register, resetPassword } = useContext(ClientContext);
  const { Alerts } = useContext(AlertContext);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState<boolean>(false);
  const [consent, setConsent] = useState<boolean>(false);
  const itemObj: {[key: string]: {info: string[], icon: IconProps}} = {
    'login': {info: ["Se connecter", "Rester connecté", "Pas encore de compte ? S'inscrire", "/register"], icon: <LockOpenRounded/>},
    'register': {info: ["S'inscrire", "J'accepte les conditions d'utilisation de Princesse Margot*",  "Déjà un compte ? Connectez-vous", "/login"], icon:  <PersonRounded/>},
    'password': {info: ["Réinitialiser mot de passe", "",  "Revenir à la page de connexion", "/login"], icon: <RotateLeftRounded/>}
  };
  const itemRedirect: {[key: string]: string} = {
    'login': "/home",
    'register': "/login",
    'password': "/login"
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const callbackList: {[key: string]: Function} = {
      'login': async function loginUser() {
        return await login(values as IAuth);
      },
      'register': async function registerUser() {
        return await register(values as IRegister);
      },
      'password': async function resetUserPassword() {
        return await resetPassword(values as IPassword);
      }
    };
    setLoading(true);
    const res: IResponse = await callbackList[type]();
    Alerts[res.status]({message: res.message})
    setLoading(false);
    navigate(itemRedirect[type]);
  };

  const handleDisable = () => {
    const callbackList: {[key: string]: Function} = {
      'login': function disableLogin() {
        const authValues = values as IAuth;
        return (!checkEmail(authValues.email) || !authValues.password);
      },
      'register': function disableRegister() {
        const registerValues = values as IRegister;
        return (!consent || !registerValues.login.password || !registerValues.details.birthDate || !registerValues.details.firstName || !registerValues.details.lastName || !checkEmail(registerValues.login.email));
      },
      'password': function disablePassword() {
        const { email } = values as IPassword;
        return (!checkEmail(email));
      }
    };
    return callbackList[type]();
  };

  return (
   <>
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 12
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined/>
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
        {itemObj[type].info[0]}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {children}
        {type !== EAuth.password && (
          <Grid item xs={12} marginTop={2}>
            <FormControlLabel
              control={<Checkbox color="secondary" onChange={() => setConsent(!consent)}/>}
              label={itemObj[type].info[1]}
            />
          </Grid>
        )}
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={handleDisable()}
          endIcon={itemObj[type].icon}
          loading={loading}
          loadingPosition="end"
        >
          {itemObj[type].info[0]}
        </LoadingButton>
        <Grid container>
          <Grid item xs textAlign={'center'}>
            <Button variant='text' color='secondary'sx={{ "&:hover": { backgroundColor: 'transparent' }, textAlign: 'right' }}>
              <Link to={itemObj[type].info[3]} style={{ color: '#009CAB' }}>
                {itemObj[type].info[2]}
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
   </>
  );
};