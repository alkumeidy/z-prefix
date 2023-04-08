import React from 'react'
// const initialStateSaved =  window.sessionStorage.getItem("reducer") && JSON.parse( window.sessionStorage.getItem("reducer"));
// const loggedIn = [initialStateSaved][0][0].loggedIn
// const user = [initialStateSaved][0][0].user

function LoginError() {
  return (
    <h3 > User is not signed in. <br /><br /> Please <a href="http://localhost:3000/login">login</a> to access the Warehouse Inventory Management System. </h3>
  )
}

export default LoginError