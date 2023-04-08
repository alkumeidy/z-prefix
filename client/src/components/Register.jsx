import React, { useState } from "react";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function addUser(){
        console.log("Adding user")
        fetch('http://localhost:8080/users/', {
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({first_name: firstName, last_name: lastName, username: username, password: password})
        })
    }

    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={e => setLastName(e.target.value)}/>
        </div>
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
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={() => addUser()}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
}

export default Register;