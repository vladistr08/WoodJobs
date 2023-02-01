import React from 'react';
import './App.css'
import Nav from "./components/Nav";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

function App() {
  return (
      <div className="row">
        <Nav/>
        <Home/>
      </div>
  );
}

export default App;
