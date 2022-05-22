import { EAlert } from "../@types/EAlert";
import { Snackbar, Alert } from "@mui/material";

interface IAlertPopProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  message: string;
  type: EAlert;
}

export const AlertPop: React.FC<IAlertPopProps> = ({ show, setShow, message, type }) => {
  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={() => {setShow(false)}} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={() => {setShow(false)}} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};