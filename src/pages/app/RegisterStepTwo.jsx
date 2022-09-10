// import react.
import react, { useState } from 'react'
// imports for components
import { View, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
import CustButton from '../../components/CustButton';
import SelectList from 'react-native-dropdown-select-list'
import FormInput from '../../components/FormInput'
import ErrorMessage from '../../components/ErrorMessage';
// for handling : 
import { addDoc, collection } from 'firebase/firestore'
import { db, firebase } from '../../../config'
import { PropTypes } from 'prop-types'

export default function RegisterStepTwo({route, navigation}) 
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
    
    // for the blood group
    const [selected, setSelected] = useState("");

    // for teh userInfo
    const [userInfo, setUserInfo] = useState({
        contact: '',
        ville: '',
        password: '',
        passwordConfirm:'',
        //bloodGroup: '',
    })

    // the error state
    const [error, setError] = useState('')    

    // catching the password verification
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(true);


    // default values for donor blood group
    const data = [
        { key: 'O-', value: 'O-' },
        { key: 'O+', value: 'O+' },
        { key: 'A+', value: 'A+' },
        { key: 'A-', value: 'A-' },
        { key: 'B-', value: 'B-' },
        { key: 'B+', value: 'B+' },
        { key: 'AB-', value: 'AB-' },
        { key: 'AB+', value: 'AB+' },
        { key: 'inconu', value: 'inconu' },
    ];

    const [bloodGroup, setBloodGroup] = useState('')
    const handleOnChangeTextBlood = (value) => {
        setBloodGroup(value)
    }
    // userInfo step two
    const { contact, ville, password, passwordConfirm } = userInfo

    // handleOnChangeText on input form components
    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value })
    }

    // for create new object in the db
    function create () {
        /*console.log(
            'nom : ' + (route.params.donorName) +
            'prenom : ' + route.params.donorSurname +
            'email : ' + route.params.donorEmail +
            'groupe_sanguin : ' + bloodGroup + 
            'password : ' + userInfo.password + 
            'sexe : ' + route.params.donorSexe + 
            'ville : ' + userInfo.ville 
        )*/
         firebase
            .auth()
            .createUserWithEmailAndPassword(route.params.donorEmail, userInfo.password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    age : Number(route.params.donorAge),
                    contact : Number(userInfo.contact),
                    email : route.params.donorEmail,
                    groupe_sanguin : bloodGroup,
                    nom : route.params.donorName,
                    //password : userInfo.password,
                    prenom : route.params.donorSurname,
                    sexe : route.params.donorSexe,
                    ville : userInfo.ville,
                }
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        console.log('data store sucessfully')
                        navigation.navigate('Connexion', {user : data})
                    })
                    .catch((error) => {
                        console.log('error with datas: ' + error)
                    })
            })
            .catch((error) => {
                console.log('error firebase: ' + error)
            })
    }

    const isValidForm = () => {
        // all field have value
        if(!isValidObjField(userInfo)) return updateError('tout les champs sont requis', setError)
        // if contact is not valid
        if(!contact.trim() || contact.length < 9 ) return updateError('numero de telephone invalid', setError)
        // if email is not valid 
        if(!ville.trim()) return updateError('Le champ ville est vide ', setError)
        // password validation 
        if(!password.trim() || password.length < 8) return updateError('le mot de passe doit avoir au moins 8 caractères', setError)
        // password confirm 
        if(password !== passwordConfirm) return updateError('les mots de passe ne sont pas identiques', setError)
        // error on blood group
        if(!bloodGroup.trim()) return updateError('Le groupe sanguin est manquant ', setError) 

        return true
    } 

    // for testing purposes only
    /*const submitForm = () => {
        if(isValidForm()){
            // submit form 
            console.log(userInfo)
        }
        //console.log(bloodGroup)
    }*/

    return (
        <View style={styles.regForm}>
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/donor.png')}
                    style={styles.arc_logo}
                />
            </View>
            { error ? <ErrorMessage error={error} visible={true}/> : null }
            <FormInput
                placeholder='Contact'
                value={contact}
                onChangeText={value => handleOnChangeText(value, 'contact')}
                iconName='phone-hangup'
                keyboardType='number-pad'
            />
            <View style={{ marginTop: 5}}>
                <SelectList
                    //onSelect={() => alert(selected)}
                    onSelect={value => handleOnChangeTextBlood(value=selected)}
                    placeholder="Groupe Sanguin"
                    setSelected={setSelected}
                    arrowicon={<MaterialCommunityIcons name="chevron-down" size={26} color={'#fff'} />} 
                    data={data}
                    search={false}
                    dropdownStyles={{
                        backgroundColor: '#E42217',
                    }}
                    dropdownTextStyles={{
                        color: '#fff',
                    }}
                    inputStyles={{
                        color: '#fff',
                    }}
                    boxStyles={{ 
                        marginTop: 10,
                        width: 250,
                        backgroundColor: '#E42217',
                        //borderTopWidth: 0,
                        //borderLeftWidth: 0,
                        //borderRightWidth: 0,
                        borderBottomWidth: 1,
                        borderColor: '#E42217',
                    }} //override default styles
                />
            </View>
            <FormInput
                placeholder='Ville'
                value={ville}
                onChangeText={value => handleOnChangeText(value, 'ville')}
                iconName='map-marker'
                keyboardType='default'
            />
            <FormInput
                placeholder='Mot de passe'
                value={password}
                onChangeText={value => handleOnChangeText(value, 'password')}
                secureTextEntry={passwordVisible}
                iconName={passwordVisible ? "eye-off" : "eye"}
                onPress={() => setPasswordVisible(!passwordVisible)}
            />
            <FormInput
                placeholder='Confirmer le mot de passse'
                onChangeText={value => handleOnChangeText(value, 'passwordConfirm')}
                value={passwordConfirm}
                secureTextEntry={passwordVisibleConfirm}
                iconName={passwordVisibleConfirm ? "eye-off" : "eye"}
                onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
            />
            <CustButton
                style={styles.txtBtn}
                onPress={
                    //submitForm
                    () => {
                        isValidForm()
                        ?
                        create()
                        :
                        console.log('something went wrong')
                    }
                }
                label="creer"
            />
        </View>
    )
}