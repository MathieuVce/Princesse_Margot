import { Snackbar, Alert } from "@mui/material";

interface IAlertPopProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const AlertPop: React.FC<IAlertPopProps> = ({ show, setShow }) => {


  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={() => {setShow(false)}}>
      <Alert onClose={() => {setShow(false)}} severity="success" sx={{ width: '100%' }}>
        Successfully logged in
      </Alert>
    </Snackbar>
  );
};