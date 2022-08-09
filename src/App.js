import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import axios, { Axios } from 'axios';
import Course from './Course';
import{BrowserRouter, Route,Routes,Router} from 'react-router-dom';
import Collection from './Collection';
import React, { useCallback,useEffect, useState } from 'react'
import Science from './Science';
import Questions from './Questions';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Course/>}/>
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/science" element={<Science/>}/>
    <Route path="/quest" element={<Questions/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
