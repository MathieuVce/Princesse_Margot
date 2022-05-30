import { Outlet } from 'react-router';
import Image from '../assets/bg.jpeg';
import { Header } from '../components/Header';
import { Copyright } from '../components/Copyright';
import { Container, CssBaseline } from '@mui/material/';

const App: React.FunctionComponent = () => {

  return (
    <>
      <Header/>
      <div style={{ display: 'grid', height: '100%', opacity: '0.1', }}>
        <img src={Image} alt='background' style={{ position: 'fixed', minWidth: '150vh', maxHeight: '150vh'}}/>
        <div style={{ backgroundColor: 'black', height: '100%', width: '100%', position: 'fixed', opacity: '0.2' }}/>
      </div>
      <Container component="main" maxWidth="xs" sx={{ mt: { xs: 4, sm: 6, md: 8, lg: 16 }}}>
        <CssBaseline/>
        <Outlet/>
      </Container>
      <Copyright sx={{ pt: 3, pl: 4, position: 'fixed', bottom: 0, backgroundColor: '#95679C', width: '100%', height: 62 }}/>
    </>
    );
};

export default App;