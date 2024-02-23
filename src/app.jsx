import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Modeld from './component/mode';
import Navbar from './component/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Modeld />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </BrowserRouter>

  
  );
}

export default App;
