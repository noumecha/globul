import react from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from '../../styles'

const image = require('../../assets/logo2.jpg')

export default function LoginScreen() 
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
                    la goutte de plus qui sauve
                </Text>
            </View>
            {/* bottom container with input and buttons */}
            <View style={styles.containerLogIntput}>
                <TextInput
                    label="Email"
                    //left={}
                    //style={{ margin: 10 }}
                    activeUnderlineColor="green" //when this TextInput is active, change its accent color to green
                    underlineColor="purple" //when inactive, set color to purple
                />
                <View style={{ marginTop: 5}}>
                   <TextInput
                        placeholder='email'
                        placeholderTextColor={'#E42217'} 
                        style={styles.txtInput}
                        //underlineColorAndroid="transparent"
                        keyboardType='email-address'
                    /> 
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='mot de passe'
                        placeholderTextColor={'#E42217'}
                        secureTextEntry={true}
                        style={styles.txtInput}
                    /> 
                </View>
                <Text 
                    style={styles.txtBtn}
                >
                    Connexion
                </Text>
                <View>
                    <Text style={styles.text}>
                        Pas de Compte ? <Text style={styles.textLink}>Creer le!</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}