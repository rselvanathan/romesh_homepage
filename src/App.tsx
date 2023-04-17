import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Particle from "./components/Particle";

function App() {
    return (
    <div className="App">
      <Particle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home></Home> }/>
          {/* Fallback */}
          <Route path='*' element = { <Home></Home>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
