import { Link, Typography } from "@mui/material";

interface ICopyrightProps {
  sx: any;
}

export const Copyright: React.FC<ICopyrightProps> = ({ sx }) => {
  return (
    <Typography variant="body2" color="white" align="left" {...sx}>
      Copyright ©
      <Link color="inherit" href="https://www.princessemargot.org/" sx={{ mx: 0.5 }}>
          Princesse Margot
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
};