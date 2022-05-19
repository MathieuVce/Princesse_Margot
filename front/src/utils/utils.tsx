import { Link, Typography } from "@mui/material";

export const Copyright = (props: any) =>{
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
      Copyright ©
      <Link color="inherit" href="https:/https://www.princessemargot.org/" sx={{ mx: 0.5 }}>
          Princesse Margot
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
};