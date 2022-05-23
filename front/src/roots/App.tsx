import { Outlet } from 'react-router';
import Image from '../assets/bg.jpeg';
import { theme } from '../utils/utils';
import { Header } from '../components/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Copyright } from '../components/Copyright';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

const App: React.FunctionComponent = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <div style={{ position: 'fixed', opacity: '0.15', maxWidth: 'xs' }}>
        <img src={Image} alt='background'/>
      </div>
      <Container component="main" maxWidth="xs" sx={{ mt: 6 }}>
        <CssBaseline/>
        <Outlet/>
      </Container>
      <Copyright sx={{ pt: 3, pl: 4, position: 'fixed', bottom: 0, backgroundColor: '#95679C', width: '100%', height: 62 }}/>
    </ThemeProvider>
  );
};

export default App;