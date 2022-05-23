import { EAuth } from "../@types/EAuth";
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { checkEmail } from '../utils/utils';
import { useContext, useState } from "react";
import { EAlert } from "../@types/IAlert";
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

  
  const [loading, setLoading] = useState<boolean>(false);
  const [consent, setConsent] = useState<boolean>(false);
  const itemObj: {[key: string]: {info: string[], icon: IconProps}} = {
    'login': {info: ["Se connecter", "Rester connecté", "Pas encore de compte ? S'inscrire", "/register"], icon: <LockOpenRounded/>},
    'register': {info: ["S'inscrire", "J'accepte les conditions d'utilisation de Princesse Margot*",  "Déjà un compte ? Connectez-vous", "/login"], icon:  <PersonRounded/>},
    'password': {info: ["Réinitialiser mot de passe", "",  "Revenir à la page de connexion", "/login"], icon: <RotateLeftRounded/>}
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const callbackList: {[key: string]: Function} = {
      'login': async function loginUser() {
        const res: IResponse = await login(values as IAuth);
        if (res.status === EAlert.success) {
          Alerts.success({
            message: res.message
          });
        }
      },
      'register': async function registerUser() {
        const res: IResponse = await register(values as IRegister);
        if (res.status === EAlert.success) {
          Alerts.success({
            message: res.message
          });
        }
      },
      'password': async function resetUserPassword() {
        const res: IResponse = await resetPassword(values as IPassword);
        if (res.status === EAlert.success) {
          Alerts.success({
            message: res.message
          });
        }
      }
    };
    setLoading(true);
    await callbackList[type]();
    setLoading(false);
  };

  const handleDisable = () => {
    if (type === EAuth.register) {
      const registerValues = values as IRegister;
      return (!consent || !registerValues.login.password || !registerValues.details.birthDate || !registerValues.details.firstName || !registerValues.details.lastName || !checkEmail(registerValues.login.email));
    } else if (type === EAuth.login) {
      const authValues = values as IAuth;
      return (!checkEmail(authValues.email) || !authValues.password);
    } else {
      const { email } = values as IPassword;
      return (!checkEmail(email));
    }
  };

  return (
   <>
    {/* <AlertPop alert={alert}  setAlert={setAlert}/> */}
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