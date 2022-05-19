import { Outlet } from 'react-router';
import { Header } from '../components/Header';

const App: React.FunctionComponent = () => {
  
  return (
    <div>
      <Header color='#0094AB'/>
      <Outlet/>
    </div>
  );
};

export default App
