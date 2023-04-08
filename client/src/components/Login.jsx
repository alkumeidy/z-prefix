import React, { useEffect, useState, useContext, createContext } from "react";
import { setGlobalState, useGlobalState } from './state'


const initialStateSaved =  window.sessionStorage.getItem("reducer") && JSON.parse( window.sessionStorage.getItem("reducer"));

console.log("state on login: ", initialStateSaved)

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    // const [loggedIn, setLoggedIn] = useGlobalState('loggedIn');   

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

        const updateLogStatus = (user) => {
            setGlobalState("loggedIn", true)
            setGlobalState("user", user)
            window.sessionStorage.setItem("reducer", JSON.stringify([{"loggedIn": true, "user": user}]));
        }

        for (let user of users) {
            if (user.username === un && user.password === pw) {
                updateLogStatus(user);
                return (alert("Logged in successfully."))
                
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

// export function updateContext () {
//     const setLoggedIn = useContext(LoggedInContext)

// }

export default Login;