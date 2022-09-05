// imports for components 
import 'react-native-gesture-handler'
//import AppTest from './src/pages/screens/tests/AppTest'
import MainStack from "./src/navigation/MainStack";
import AuthStack from "./src/navigation/AuthStack";
import { AuthContext } from "./src/components/context"
import React, { useState, useEffect, useMemo, useReducer } from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './src/styles';

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function App() {

  //const [isLoading, setIsLoading] = useState(true)
  //const [userToken, setUserToken] = useState(false)

  const initialLoginState = {
    isLoading: false,
    userToken: null,
    userName: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          userEmail: action.id,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userEmail: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          userEmail: action.id,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(
    loginReducer, initialLoginState
  )

  const authContext = useMemo(() => ({
    signIn: (userEmail, userPassword) => {
      //setUserToken('nmlivan')
      //setIsLoading(false)
      let userToken
      userEmail = null
      if ( userEmail === "noumel" && userPassword === "noumel" ) {
        userToken = "nmlivan"
        console.log(userEmail + userPassword)
      }
      dispatch({ type: 'LOGIN', id: userEmail, token: userToken })
    },
    signOut: () => {
      //setUserToken(null)
      //setIsLoading(false)
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      setUserToken('nmlivan')
      setIsLoading(false)
    },
  }), [])

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false)
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'nmlspaker' })
    }, 3000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={styles.loadContainer}>
        <ActivityIndicator
          size="large"
        />
      </View>
    )
  }

  return (
    //<AppTest/>
    //<MainStack/>
    <AuthContext.Provider value={authContext}>
      { loginState.userToken !== null ? (
        <MainStack/>
      ): 
        <AuthStack/>
      }
      
    </AuthContext.Provider>
  )
}

