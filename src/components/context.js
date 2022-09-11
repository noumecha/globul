import React from 'react'

const AuthContext = React.createContext()
const EmailContext = React.createContext({
    userEmail: '',
    setUserEmail: (em) => {},
})
const pwdContext = React.createContext({
    pwd: '',
    setPwd: (pwd) => {},
})

export { AuthContext, EmailContext, pwdContext }