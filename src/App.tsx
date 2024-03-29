import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./screens/Home";
import { Ressources } from "./screens/Ressources";
import { Contacts } from "./screens/Contacts";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to='/'>Acceuil</NavLink><br />
          <NavLink to='/ressources'>Ressources</NavLink>
          <NavLink to='/contacts'>Contact</NavLink>

        </nav>
      </header>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressources' element={ <Ressources/> }/>
        <Route path='/contacts' element={ <Contacts/> }/>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;

