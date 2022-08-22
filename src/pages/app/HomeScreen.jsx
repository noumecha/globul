import React, { useState } from 'react'
import styles from '../../styles'
import { View , Text, TextInput } from 'react-native'
import { doc, setDoc, addDoc, collection } from 'firebase/firestore'
import { db } from '../../../config'
import { PropTypes } from 'prop-types'

export default function HomeScreen()
{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    function create () {
        addDoc(collection(db, 'users'), {
            username: username,
            email: email
        }).then(() => {
            // data save successfully
            console.log('data submitted successfully')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerContainer}> Home Screen Crud firebase </Text>
            <TextInput value={username} onChange={(username) => {setUsername(username)}} placeholder='Username' placeholderTextColor={'#E42217'} style={styles.txtInput}/>
            <TextInput value={email} onChange={(email) => {setEmail(email)}} placeholder='Email' placeholderTextColor={'#E42217'} style={styles.txtInput}/>
            <Text 
                style={styles.txt}
                onPress={() => {
                    create()
                }}
            >
                Send Data
            </Text>
        </View>
        
    )
}
HomeScreen.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}