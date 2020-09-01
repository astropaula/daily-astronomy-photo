import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./comps/Home";
import SpacePhoto from "./comps/SpacePhoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route component={Home} path="/" exact />
        <Route component={SpacePhoto} path="/spacephoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
