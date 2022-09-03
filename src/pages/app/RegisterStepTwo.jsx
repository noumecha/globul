import react, { useState } from 'react'
import { View, TextInput, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
import CustButton from '../../components/CustButton';
import SelectList from 'react-native-dropdown-select-list'


export default function RegisterStepTwo() 
{

    const [selected, setSelected] = useState("");
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
                    secureTextEntry={passwordVisible}
                    //keyboardType='visible-password'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons 
                    //name="eye-off" 
                    style={styles.inputIcon} 
                    color='#E42217' 
                    size={26} 
                    name={passwordVisible ? "eye-off" : "eye"} 
                    onPress={() => setPasswordVisible(!passwordVisible)}
                />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='Confirmer le mot de passe'
                    placeholderTextColor={'#E42217'}
                    secureTextEntry={passwordVisibleConfirm}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons 
                    style={styles.inputIcon} 
                    color='#E42217' 
                    size={26} 
                    name={passwordVisibleConfirm ? "eye-off" : "eye"} 
                    onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
                />
            </View>
            <CustButton
                style={styles.txtBtn}
                label="creer"
            />
        </View>
    )
}