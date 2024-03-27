
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import FrogotPassword from './Components/Forget-password/FrogotPassword';

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element ={<Registration />} />
          <Route path='/reset-pass' element={<FrogotPassword/>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
