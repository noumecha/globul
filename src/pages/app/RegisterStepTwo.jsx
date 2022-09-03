import react from 'react'
import { View, TextInput, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
import CustButton from '../../components/CustButton';


export default function RegisterStepTwo() 
{
    return (
        <View style={styles.regForm}>
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/donor.png')}
                    style={styles.arc_logo}
                />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='Contact'
                    placeholderTextColor={'#E42217'}
                    keyboardType='number-pad'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="phone-hangup" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='Groupe sanguin'
                    placeholderTextColor={'#E42217'}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="blood-bag" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='Ville'
                    placeholderTextColor={'#E42217'}
                    keyboardType='default'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="map-marker" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='Mot de passe'
                    placeholderTextColor={'#E42217'}
                    secureTextEntry={true}
                    //keyboardType='visible-password'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="eye-off" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='Confirmer le mot de passe'
                    placeholderTextColor={'#E42217'}
                    secureTextEntry={true}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="eye-off" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <CustButton
                style={styles.txtBtn}
                label="creer"
            />
        </View>
    )
}