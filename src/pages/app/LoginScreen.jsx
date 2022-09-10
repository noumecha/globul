import react, { useState, useContext } from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import { ScrollView } from 'react-native-gesture-handler'
import FormInput from '../../components/FormInput'
import CustButton from '../../components/CustButton';
//import ErrorMessage from '../../components/ErrorMessage';
import styles from '../../styles'
import { firebase } from '../../../config'
import { AuthContext } from '../../components/context';

const image = require('../../assets/logo2.jpg')

export default function LoginScreen({ navigation }) 
{
    // validating the form input values
    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim()) 
    }
    const [passwordVisible, setPasswordVisible] = useState(true);

    // the user informations
    const [userInfoCon, setUserInfoCon] = useState({
        email: '',
        password: '',
    })
    // userInfoCon params
    const { email, password } = userInfoCon

    // for validating the email address
    const isValidEmail = (value) => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return regx.test(value)
    }

    // form verification
    const isValidForm = () => {
        // all field have value
        if(!isValidObjField(userInfoCon)) return updateError('tout les champs sont requis', setError)
        // if email is not valid 
        if(!isValidEmail(email)) return updateError('L\'email n\'est pas valide', setError)
        // password validation 
        if(!password.trim() || password.length < 8) return updateError('le mot de passe doit avoir au moins 8 caractères', setError)
        
        return true
    } 

    // update the error message int the input form component
    const updateError = (e, stateUpdater) => {
        stateUpdater(e)
        setTimeout(() => {
            stateUpdater('')
        }, 4000)
    }

    // on input form change
    const handleOnChangeText = (value, fieldName) => {
        setUserInfoCon({...userInfoCon, [fieldName]: value })
    }

    // the error state
    const [error, setError] = useState('')

    // for logging in with context
    const { signIn,takeEmail } = useContext(AuthContext)

    const loginHandle = (email, password) => {
        signIn(email, password)
        takeEmail(email)
    }

    // login directly using the firebase login function
    const logIn = () => {
        console.log('email: ' + email + ' password: ' + password)
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
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
                        navigation.navigate('HomeScreen', { user })
                    })
                    .catch(e => {
                        //alert(e)
                        alert('addresse email ou mot de passe invalide a')
                    })
                    
            })
            .catch(e => {
                //updateError(e, setError)
                alert('addresse email ou mot de passe invalide b')
                //alert(e)
            })
    }


    return(
        <View
            style={styles.container}
        >
            {/* header with background image */}
            <ImageBackground source={image} resizeMode="cover" style={styles.bg_image} >
                <Text style={styles.bg_txt}>
                    "une goutte pour une vie sauvé"
                </Text>
            </ImageBackground>
            {/** arc container */}
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.arc_logo}
                />
                <Text style={styles.text}>
                    Globul
                </Text>
            </View>
            {/* error outpu */}
            { error ? /*<ErrorMessage*/ alert('adresse email ou mot de passe incorrect') /*visible={true}/>*/ : null }
            {/* bottom container with input and buttons */}
            <View style={styles.containerLogIntput}>
                <FormInput
                    placeholder='Email'
                    value={email}
                    onChangeText={value => handleOnChangeText(value, 'email')}
                    iconName='mail'
                    keyboardType='email-address'
                />
                <FormInput
                    placeholder='Mot de passe'
                    value={password}
                    onChangeText={value => handleOnChangeText(value, 'password')}
                    secureTextEntry={passwordVisible}
                    iconName={passwordVisible ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                />
                <CustButton 
                    label='Connexion'
                    onPress={() => {
                        isValidForm()
                        ?
                        //logIn()
                        loginHandle(email, password)
                        :
                        console.log('something went wrong & error')
                    }}
                />
                <View>
                    <Text style={styles.text}>
                        Pas de Compte ? 
                        <CustButton 
                            onPress={() => navigation.navigate(
                                'register', 
                                { screen: 'RegisterStepOne' }
                            )}
                            label="Creer le"
                        />
                    </Text>
                </View>
            </View>
        </View>
    )
}