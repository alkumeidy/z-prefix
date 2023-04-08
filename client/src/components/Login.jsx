import React, { useEffect, useState, useContext, createContext } from "react";
import ContextProviders from "./ContextProviders";
// import ContextProviders from "./ContextProviders";
// import { Routes, Route } from 'react-router-dom'
import { LoggedInContext } from "../App";
import { UserInfoContext } from "../App";


// export const LoggedInContext = createContext(false);
// export const UserInfoContext = createContext({});

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useContext(ContextProviders);

    // const userInfo = useContext(UserInfoContext)

    useEffect(() => {
            fetch("http://localhost:8080/users", {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
            })
                .then((res) => res.json())
                .then((data) => setUsers(data))
    }, []);

    function loginEval(){
        const un = username;
        const pw = password;

        // console.log("login state: ", isLoggedIn)

        for (let user of users) {
            if (user.username === un && user.password === pw) {
                setUser(user)
                setLoggedIn(true)
                return (alert("Successful login"))
            } else {
                continue;
            } 
        } return (alert(`No matching records found for that username and password combination.`))
    }

       

    return (
        <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">

        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={() => loginEval()}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="http://localhost:3000/signup" onClick={() => alert("That sucks. :( I guess just make a new one? I don't know, I'm not your mom.")}>password?</a>
        </p>
      </form>
      
    )
}

export function updateContext () {
    
}

export default Login;