import React from 'react'

const AuthContext = React.createContext()
const DataContext = React.createContext({
    userEmail: '',
    setUserEmail: (em) => {},
})

export { AuthContext, DataContext }