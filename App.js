// imports for components 
import 'react-native-gesture-handler'
//import AppTest from './src/pages/screens/tests/AppTest'
import MainStack from "./src/navigation/MainStack";
import AuthStack from "./src/navigation/AuthStack";
import { AuthContext } from "./src/components/context"
import React, { useState, useEffect, useMemo, useReducer } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './src/styles';
// import firebase 
import { firebase } from './config'
import { setUserId } from 'firebase/analytics';

export default function App() {

  //const [isLoading, setIsLoading] = useState(true)
  //const [userToken, setUserToken] = useState(false)

  // initial state values
  const initialLoginState = {
    isLoading: true,
    userToken: null,
    userName: null,
  }

  // switch case for my tokening state
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

  // the login state and reducer
  const [loginState, dispatch] = React.useReducer(
    loginReducer, initialLoginState
  )

  // the authentification context
  const authContext = useMemo(() => ({
    // for the logiing 
    signIn: async(userEmail, userPassword) => {
      let userToken
      userToken = null
      try {
        // good function with the firebae auth
        console.log('email: ' + userEmail + ' password: ' + userPassword)
        firebase
          .auth()
          .signInWithEmailAndPassword( userEmail, userPassword)
          .then((response) => {
              const uid = response.user.uid
              const usersRef = firebase.firestore().collection('users')
              usersRef
                  .doc(uid)
                  .get()
                  .then(firestoreDocument => {
                      if(!firestoreDocument.exists) {
                          alert('adresse email ou mot de passe incorrect')
                          return
                      }
                      const user = firestoreDocument.data()
                      alert('Connexion success!')
                      //navigation.navigate('HomeScreen', { user })
                  })
                  .catch(e => {
                      //alert(e)
                      alert('erreur de syntaxe')
                  })
                  
          })
          .catch(e => {
              //updateError(e, setError)
              alert('addresse email ou mot de passe invalide b')
              //alert(e)
          })
        userToken = firebase.auth().currentUser?.uid
        //userToken = 'nml_ivan_237'
        await AsyncStorage.setItem('userToken', userToken)
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGIN', id: userEmail, token: userToken })
    },
    // for the signout
    signOut: async() => {
      //setUserToken(null)
      //setIsLoading(false)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },
    // for ther registering
    signUp: () => {
      //setUserToken('nmlivan')
      //setIsLoading(false)
    },
    // for test 
    takeEmail: (e) => {
      console.log('email : ' + e)
    },
  }), [])

  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false)
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
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

