import react, { useState } from 'react'
import { View, TextInput, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
import CustButton from '../../components/CustButton';
import SelectList from 'react-native-dropdown-select-list'
import FormInput from '../../components/FormInput'


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
            <FormInput
                placeholder='Contact'
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
                iconName='map-marker'
                keyboardType='text'
            />
            <FormInput
                placeholder='Mot de passe'
                secureTextEntry={passwordVisible}
                iconName={passwordVisible ? "eye-off" : "eye"}
                onPress={() => setPasswordVisible(!passwordVisible)}
            />
            <FormInput
                placeholder='Confirmer le mot de passse'
                secureTextEntry={passwordVisibleConfirm}
                iconName={passwordVisibleConfirm ? "eye-off" : "eye"}
                onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
            />
            <CustButton
                style={styles.txtBtn}
                label="creer"
            />
        </View>
    )
}