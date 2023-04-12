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



function App() {



    return (
    <>
      <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Inventory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Inventory" element={<Inventory />}/>
          <Route path="/Inventory/:id" element={<Inventory />}/>
          <Route path="/my-inventory/:id" element={<MyInventory /> }/>
        </Routes>
    </>
    )
}

export default App;