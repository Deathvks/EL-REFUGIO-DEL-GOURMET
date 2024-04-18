import './App.css';
import Home from './pages/home/Home';
import Privacy from './pages/privacy/Privacy';
import Sales from './pages/sales/Sales';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
