import './App.css';
import AppNavbar from './components/AppNavbar';
import {createContext, useEffect, useState } from 'react';
import React from 'react';
import Inventory from './components/Inventory';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import MyInventory from './components/MyInventory';

export const LoggedInContext = createContext({
  loggedIn: false,
  setLoggedIn: (login) => {}
});

export const UserInfoContext = createContext({
  user: {},
  setUser: (user) => {}
});


function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState();
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
    <>
      <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Inventory" element={<Inventory />}/>
          <Route path="/Inventory/:id" element={<Inventory />}/>
          <Route path="/my-inventory" element={<MyInventory />}/>
        </Routes>
    </>
    )
}

export default App;