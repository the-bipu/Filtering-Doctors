import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home, Service } from './pages'
import Doctors from './pages/Doctors/Doctors';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/Doctors/:pageNumber" element={<Doctors />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Service/:pageNumber" element={<Service />} />
      <Route path="/About" element={<Service />} />
      <Route path="/Contact" element={<Service />} />
    </Routes>
  );
}

export default App;
