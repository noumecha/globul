import React, { useContext,useState,useEffect } from 'react'
import styles from '../../styles'
import { View , Text, Image } from 'react-native'
import CustButton from '../../components/CustButton'
import FormInput from '../../components/FormInput'
import { AuthContext , EmailContext, pwdContext } from '../../components/context'
import { StatusBar } from 'expo-status-bar'
import { firebase } from '../../../config'
import ErrorMessage from '../../components/ErrorMessage';

export default function SettingsScreen()
{
    // validating the form input values
    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim()) 
    }

    // update the error message int the input form component
    const updateError = (e, stateUpdater) => {
        stateUpdater(e)
        setTimeout(() => {
            stateUpdater('')
        }, 4000)
    }

    // handleOnChangeText on input form components
    const handleOnChangeText = (value, fieldName) => {
        setNewUserInfo({...newUserInfo, [fieldName]: value })
    }

    // for validating the email address
    const isValidEmail = (value) => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return regx.test(value)
    }

    // for the userInfo
    const [newUserInfo, setNewUserInfo] = useState({
        newEmail: '',
        newVille: '',
        newPassword: '',
        newPasswordConfirm:'',
        newContact:''
    })
    // userInfo step two
    const { newContact, newVille, newPassword, newPasswordConfirm, newEmail } = newUserInfo

    // the error state
    const [error, setError] = useState('')

    // authentication context
    const { signOut } = useContext(AuthContext)

    // data context
    const { userEmail } = useContext(EmailContext)
    const { pwd } = useContext(pwdContext)

    // query for retrieving data from firebase
    const [todos, setTodos] = useState({});
    const db = firebase.firestore().collection('users')
    useEffect(() => {
        firebase
            .auth()
            .signInWithEmailAndPassword( userEmail, pwd)
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
                setTodos(userData)
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
    }, [])

    // validating the update form
    const isValidForm = () => {
        // all field have value
        if(!isValidObjField(newUserInfo)) return updateError('tout les champs sont requis', setError)
        // if email is not valid 
        if(!isValidEmail(newEmail)) return updateError('L\'email n\'est pas valide', setError)
        // if new contact is not valid
        if(!newContact.trim() || newContact.length < 9 ) return updateError('numero de telephone invalid', setError)
        // if new email is not valid 
        if(!newVille.trim()) return updateError('Le champ ville est vide ', setError)
        // new password validation 
        if(!newPassword.trim() || newPassword.length < 8) return updateError('le mot de passe doit avoir au moins 8 caractères', setError)
        // new password confirm 
        if(newPassword !== newPasswordConfirm) return updateError('les mots de passe ne sont pas identiques', setError) 

        return true
    } 
    // updating the user configuration :
    function update() {
        console.log('Updating user configuration')
    }
    //const todo = JSON.stringify(todos)
    //console.log(todos.contact)
    // handling passwords
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(true);

    return (
        <View style={styles.container}>
            <StatusBar
                style='auto'
            />
            <Text style={styles.mapHeader}>
                Configurez votre profile
            </Text>
            <View style={styles.arc_settings}>
                <Image
                    source={require('../../assets/user.png')}
                    style={styles.arc_logo}
                />
                <Text style={styles.text}>
                    utilisateur : {userEmail} 
                </Text>
                <Text style={styles.text}>
                    contact : {todos.contact}
                </Text>
            </View>
            <View style={styles.containerSetInput}>
                { error ? <ErrorMessage error={error} visible={true}/> : null }
                <FormInput
                    placeholder="Changer l'addrese mail"
                    value={newEmail}
                    onChangeText={value => handleOnChangeText(value, 'newEmail')}
                    iconName='mail'
                    keyboardType='email-address'
                />
                <FormInput
                    placeholder='changer le numero de telephone'
                    value={newContact}
                    onChangeText={value => handleOnChangeText(value, 'newContact')}
                    iconName='phone-hangup'
                    keyboardType='number-pad'
                />
                <FormInput
                    placeholder='Nouveau mot de passe'
                    value={newPassword}
                    onChangeText={value => handleOnChangeText(value, 'newPassword')}
                    secureTextEntry={passwordVisible}
                    iconName={passwordVisible ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                />
                <FormInput
                    placeholder='Confirmer le mot de passe'
                    value={newPasswordConfirm}
                    onChangeText={value => handleOnChangeText(value, 'newPasswordConfirm')}
                    secureTextEntry={passwordVisibleConfirm}
                    iconName={passwordVisibleConfirm ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
                />
                <FormInput
                    placeholder='entrez la nouvelle Ville'
                    value={newVille}
                    onChangeText={value => handleOnChangeText(value, 'newVille')}
                    iconName='map-marker'
                    keyboardType='default'
                />
            </View>
            <CustButton
                label="Mettre à jour"
                onPress={
                    () => {
                        isValidForm()
                        ?
                        update()
                        :
                        console.log('Erreur de mise à jour')
                    }
                }
            />
            <CustButton
                label="exit"
                onPress={() => {
                    signOut()
                }}
            />
        </View>
        
    )
}