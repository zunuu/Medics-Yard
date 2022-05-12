import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Homepage/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='about' element={<About />} />
        <Route path='appoinment' element={<Appoinment />} />
        <Route path='login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
