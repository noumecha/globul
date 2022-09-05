import react, { useState } from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import { ScrollView } from 'react-native-gesture-handler'
import FormInput from '../../components/FormInput'
import CustButton from '../../components/CustButton';
import styles from '../../styles'

const image = require('../../assets/logo2.jpg')

export default function LoginScreen({ navigation }) 
{

    const [passwordVisible, setPasswordVisible] = useState(true);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userInfo

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value })
    }

    return(
        <View
            style={styles.container}
        >
            {/* header with background image */}
            <ImageBackground source={image} resizeMode="cover" style={styles.bg_image} >
                <Text style={styles.bg_txt}>
                    "une goutte pour une vie sauve"
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
                />
                <View>
                    <Text style={styles.text}>
                        Pas de Compte ? 
                        <CustButton 
                            onPress={() => navigation.navigate(
                                'RegisterScreen'//, 
                                //{ screen: 'RegisterStepOne' }
                            )}
                            label="Creer le"
                        />
                    </Text>
                </View>
            </View>
        </View>
    )
}