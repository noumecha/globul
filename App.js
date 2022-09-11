// imports for components 
import 'react-native-gesture-handler'
//import AppTest from './src/pages/screens/tests/AppTest'
import MainStack from "./src/navigation/MainStack";
import AuthStack from "./src/navigation/AuthStack";
import { AuthContext, EmailContext, pwdContext } from "./src/components/context"
import React, { useState, useEffect, useMemo, useReducer } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './src/styles';
// import firebase 
import { firebase } from './config'
import { setUserId } from 'firebase/analytics';

export default function App() {

  // initial state values
  const initialLoginState = {
    isLoading: true,
    userToken: null,
    userEmail: null,
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
  const [loginState, dispatch] = useReducer(
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
                const userData = firestoreDocument.data()
                alert('Connexion success!')
                return userData
                //navigation.navigate('HomeScreen', { user })
              })
              .catch(e => {
                //alert(e)
                alert('erreur 1 : ' + e)
              })       
          })
          .catch(e => {
            //updateError(e, setError)
            alert('erreur 2 : ' + e)
            //alert(e)
          })
        //userToken = firebase.auth().currentUser?.uid
        userToken = 'nml_ivan_237'
        await AsyncStorage.setItem('userToken', userToken)
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGIN', id: userEmail, token: userToken })
    },
    // for test 
    /*token: () => {
      console.log('the user token : ' + loginState.userToken)
      return loginState.userToken
    },*/
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
  }), [])

  // data context
  const [userEmail, setUserEmail] = useState()
  const [pwd, setPwd] = useState()
  // use effect for retrieving token 
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
        <EmailContext.Provider value={{userEmail, setUserEmail}}>
          <pwdContext.Provider value={{pwd , setPwd}}>
            <MainStack/>
          </pwdContext.Provider>
        </EmailContext.Provider>
      ): 
        <EmailContext.Provider value={{userEmail, setUserEmail}}>
          <pwdContext.Provider value={{pwd , setPwd}}>
            <AuthStack/>
          </pwdContext.Provider>
        </EmailContext.Provider>
      }
    </AuthContext.Provider>
  )
}

