import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'sonner'
import LayoutRoutes from './routes/LayoutRoutes';

function App() {
  return (
    <div className="App background-color">
      <Toaster closeButton richColors position="top-right" className='me-2'/>
      <AppRoutes/> 
    </div>
  );
}

export default App;
