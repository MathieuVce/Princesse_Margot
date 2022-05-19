import { Snackbar, Alert } from "@mui/material";

interface IAlertPopProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AlertPop: React.FC<IAlertPopProps> = ({ open, setOpen }) => {


  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={() => {setOpen(false)}}>
      <Alert onClose={() => {setOpen(false)}} severity="success" sx={{ width: '100%' }}>
        Successfully logged in
      </Alert>
    </Snackbar>
  );
};