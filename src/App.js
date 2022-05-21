import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Crud from './components/Crud';
import Add from './components/Add';
import Info from './components/Info';

import Footer from './components/Footer';
import React from 'react';
import Post from './components/Post';
import Ann from './components/Ann';


function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/Crud" element={<Crud/>} />
        <Route  path="/Add" element={<Add/>} />
        <Route  path="/Info" element={<Info/>} />
        <Route  path="/message" element={<Post/>} />
        <Route  path="/announce" element={<Ann/>} />
        
     
        
      </Routes>
     <Footer/>
     </BrowserRouter>
    
    </div>

  );
}

export default App;
