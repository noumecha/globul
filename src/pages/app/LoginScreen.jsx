import react from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustButton from '../../components/CustButton'
//import { ScrollView } from 'react-native-gesture-handler'
import styles from '../../styles'

const image = require('../../assets/logo2.jpg')

export default function LoginScreen({ navigation }) 
{

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
                <View style={{ marginTop: 5}}>
                   <TextInput
                        placeholder='email'
                        placeholderTextColor={'#E42217'} 
                        style={styles.txtInput}
                        //underlineColorAndroid="transparent"
                        keyboardType='email-address'
                    />
                    <MaterialCommunityIcons name="mail" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='mot de passe'
                        placeholderTextColor={'#E42217'}
                        secureTextEntry={true}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <Text 
                    style={styles.txtBtn}
                >
                    Connexion
                </Text>
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