import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Register from './auth/Daftar';
import Beranda from './pages/Beranda';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Beranda' element={<Beranda />}></Route>
        <Route path='*' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
