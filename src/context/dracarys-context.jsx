import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const DracarysContext = createContext({
  loggedIn: null,
  setLoggedIn: () => {},
  users:[],
  setUsers: () => {},
})

export function DracarysContextProvider({
  children,
  defaultValues = {
    loggedIn: false,
    users: [{
      userName: 'Drogon',
      password: 'dracarys',
    }],
  },
}) {
  const [loggedIn, setLoggedIn] = useState(defaultValues.loggedIn)
  const [users, setUsers] = useState(defaultValues.users)

  const values = {
    loggedIn,
    setLoggedIn,
    users,
    setUsers
  }

  return <DracarysContext.Provider value={values}>{children}</DracarysContext.Provider>
}

DracarysContextProvider.propTypes = {
  children: PropTypes.element,
}
