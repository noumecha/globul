import react, { useState } from 'react'
import { View, TextInput, Image, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
import CustButton from '../../components/CustButton';
import SelectList from 'react-native-dropdown-select-list'
import FormInput from '../../components/FormInput'
import ErrorMessage from '../../components/ErrorMessage';

export default function RegisterStepTwo({route}) 
{

    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim()) 
    }

    const updateError = (error, stateUpdater) => {
        stateUpdater(error)
        setTimeout(() => {
            stateUpdater('')
        }, 3000)
    }

    const [selected, setSelected] = useState("");
    const [userInfo, setUserInfo] = useState({
        contact: '',
        ville: '',
        password: '',
        passwordConfirm:'',
    })

    const [error, setError] = useState('')    

    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(true);

    const data = [
        { key: '1', value: 'O-' },
        { key: '2', value: 'O+' },
        { key: '3', value: 'A+' },
        { key: '4', value: 'A-' },
        { key: '5', value: 'B-' },
        { key: '6', value: 'B+' },
        { key: '7', value: 'AB-' },
        { key: '8', value: 'AB+' },
    ];

    const { contact, ville, password, passwordConfirm} = userInfo

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value })
    }

    const isValidForm = () => {
        // all field have value
        if(!isValidObjField(userInfo)) return updateError('tout les champs sont requis', setError)
        // if contact is not valid
        if(!contact.trim() || contact.length < 9 ) return updateError('numero de telephne invalid', setError)
        // if email is not valid 
        if(!ville.trim()) return updateError('Le champ ville est vide ', setError)
        // password validation 
        if(!password.trim() || password.length < 8) return updateError('le mot de passe doit avoir au moins 8 caractères', setError)
        // password confirm 
        if(password !== passwordConfirm) return updateError('les mots de passe ne sont pas identiques', setError)
    } 

    const submitForm = () => {
        if(isValidForm()){
            // submit form 
            console.log(userInfo)
        }
    }

    console.log(userInfo)

    return (
        <View style={styles.regForm}>
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/donor.png')}
                    style={styles.arc_logo}
                />
            </View>
            <Text
                style={styles.txtBtn}
            >
                {route.params.donor}
            </Text>
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
                onPress={submitForm}
                label="creer"
            />
        </View>
    )
}