import react from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from 'react-native-gesture-handler'
import styles from '../../styles'

export default function RegisterScreen() 
{
    return (
        <View style={styles.container}>
            {/* header with background image */}
            <View
                style={styles.registerContainer}
            >
                <Image 
                    //resizeMode="cover"
                    source={require('../../assets/logo.png')}
                    style={styles.reg_logo}
                > 
                </Image>
                <Text style={styles.reg_txt}>
                    Devenez donneur
                </Text>
            </View>
            
            {/* bottom container with input and buttons */}
            <View>
                <View style={{ marginTop: 5}}>
                   <TextInput
                        placeholder='nom'
                        placeholderTextColor={'#E42217'} 
                        style={styles.txtInput}
                        keyboardType="text"
                    />
                    <MaterialCommunityIcons name="verified-user" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='prenom'
                        placeholderTextColor={'#E42217'}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='email'
                        placeholderTextColor={'#E42217'}
                        keyboardType='email-address'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='age'
                        placeholderTextColor={'#E42217'}
                        keyboardType='numeric'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='sexe (M ou F)'
                        placeholderTextColor={'#E42217'}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='contact'
                        placeholderTextColor={'#E42217'}
                        keyboardType='number-pad'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='Groupe sanguin'
                        placeholderTextColor={'#E42217'}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='ville'
                        placeholderTextColor={'#E42217'}
                        keyboardType='default'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='mot de passe'
                        placeholderTextColor={'#E42217'}
                        //secureTextEntry={true}
                        keyboardType='visible-password'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='confirmer le mot de passe'
                        placeholderTextColor={'#E42217'}
                        secureTextEntry={true}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <Text 
                    style={styles.txtBtn}
                >
                    Créer
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