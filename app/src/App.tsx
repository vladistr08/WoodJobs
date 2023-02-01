import React from 'react';
import './App.css'
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
      <div className="row">
        <Nav></Nav>
        <Home></Home>
      </div>
  );
}

export default App;
