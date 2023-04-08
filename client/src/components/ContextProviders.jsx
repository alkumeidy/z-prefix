import React from 'react'
import { LoggedInContext, UserInfoContext } from '../App'

function ContextProviders({children, loggedIn, user}) {

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <UserInfoContext.Provider value={user}>
        {children}
      </UserInfoContext.Provider>
    </LoggedInContext.Provider>
  )
}

export default ContextProviders
// export default [LoggedInContext, UserInfoContext]