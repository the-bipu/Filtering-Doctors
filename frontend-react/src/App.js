import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home, Service } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors/:pageNumber" element={<Home />} />
      <Route path="/doctors" element={<Home />} />
      <Route path="/Hospital" element={<Service />} />
      <Route path="/About" element={<Service />} />
      <Route path="/Contact" element={<Service />} />
    </Routes>
  );
}

export default App;
