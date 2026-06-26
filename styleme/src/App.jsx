import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Footwear from './pages/Footwear';
import Makeup from './pages/Makeup';
import Hairstyles from './pages/Hairstyles';
function App(){
  return(
    <div>
     <nav className='navbar'>
      <Link to="/" className='nav-logo'>Style Me</Link>
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/Clothing">Clothing</Link>
        <Link to="/Footwear">Footwear</Link>
        <Link to="/Hairstyles">Hairstyles</Link>
        <Link to="/Makeup">Makeup</Link>
      </div>
     </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Clothing" element={<Clothing/>}/>
        <Route path="/Footwear" element={<Footwear/>}/>
        <Route path="/Makeup"element={<Makeup/>}/>
        <Route path="/Hairstyles" element={<Hairstyles/>}/>

      </Routes>
    </div>
  );
}
export default App;