import './App.css';
import AppNavbar from './components/AppNavbar';
import {react, createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Inventory from './components/Inventory';
import Login from './components/Login';


export const LoggedInContext = createContext();
export const UserInfoContext = createContext();

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
      <Route path="/Login" element={<Login />}/>
        <Route path="/Inventory" element={<Inventory />}/>
      </Routes>
    </>
  );
}

export default App;
