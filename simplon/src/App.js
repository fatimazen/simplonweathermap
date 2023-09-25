import React from 'react';
import './App.css';
import Map from "./Map"
import "./Map.css"
import Header from './components/Header';
import Fabrique from './components/Fabrique';
// import Header from "./components/Header";

export default function App(){
  return (
    
    <div>
    <Fabrique />
    <Header />
      <Map />
    
    </div>
    
  );
}


