import './App.css';
import AppNavbar from './components/AppNavbar';
import {createContext, useEffect, useState } from 'react';
import React from 'react';
import Inventory from './components/Inventory';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import MyInventory from './components/MyInventory';
import LoginError from './components/LoginError';

// if (initialStateSaved === undefined) {
//   const initialStateSaved =  window.sessionStorage.getItem("reducer") && JSON.parse( window.sessionStorage.getItem("reducer"));
// }
// const loggedIn = [initialStateSaved][0][0].loggedIn
// const user = [initialStateSaved][0][0].user

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

    
    return (
    <>
      <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Inventory" element={<Inventory />}/>
          <Route path="/Inventory/:id" element={<Inventory />}/>
          <Route path="/my-inventory/:id" element={<MyInventory /> }/>
          {/* <Route path="/my-inventory/:id" element={loggedIn ? <MyInventory /> : <LoginError />}/> */}
        </Routes>
    </>
    )
}

export default App;