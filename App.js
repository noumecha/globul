// imports for components 
import 'react-native-gesture-handler'
//import AppTest from './src/pages/screens/tests/AppTest'
import MainStack from "./src/navigation/MainStack";
import AuthStack from "./src/navigation/AuthStack";
import { AuthContext } from "./src/components/context"
import React, { useState, useEffect, useMemo } from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './src/styles';

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(false)

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('nmlivan')
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('nmlivan')
      setIsLoading(false)
    },
  }))

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) {
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
      { userToken != null ? (
        <MainStack/>
      ): 
        <AuthStack/>
      }
      
    </AuthContext.Provider>
  )
}

