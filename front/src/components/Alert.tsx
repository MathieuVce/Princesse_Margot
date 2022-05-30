import { forwardRef, useCallback } from 'react';
import { Alert, AlertColor } from '@mui/material';
import { SnackbarContent, useSnackbar } from 'notistack';

interface IAlertComponentProps {
  key: string | number,
  message: string | React.ReactNode
}

export const AlertComponent = forwardRef<HTMLDivElement, IAlertComponentProps>((props, ref) => {
  const { closeSnackbar } = useSnackbar();
  const message = props.message?.toString().split("/")[0];
  const severity = props.message?.toString().split("/")[1] as AlertColor;

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.key);
  }, [props.key, closeSnackbar]);

  return (
    <SnackbarContent ref={ref}>
      <Alert onClose={() => handleDismiss()} severity={severity}>
          {message}
      </Alert>
    </SnackbarContent>
  );
});