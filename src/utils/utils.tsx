import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#95679C',
    },
    secondary: {
      main: '#009CAB',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

export const checkEmail = (input: string) => {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(input)
};

export const checkPassword = (input: string) => {
  // eslint-disable-next-line no-useless-escape
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(input)
}
export const checkBirthDate = (input: Date) => {
    const today = new Date();
    const dateNaissance = new Date(input);

    let age = today.getFullYear() - dateNaissance.getFullYear();
    const m = today.getMonth() - dateNaissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
    }
    return age >= 10;
}