import React, { useState } from 'react'
import styles from '../../styles'
import { View , Text, TextInput, Image } from 'react-native'
//import { doc, setDoc, addDoc, collection } from 'firebase/firestore'
//import { db } from '../../../config'
//import { PropTypes } from 'prop-types'
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen()
{ 
    const slides = [
        {
          key: 1,
          title: 'Title 1',
          text: 'Description.\nSay something cool',
          image: require('../../assets/user.png'),
          backgroundColor: '#E42217',
        },
        {
          key: 2,
          title: 'Title 2',
          text: 'Other cool stuff',
          image: require('../../assets/logo2.jpg'),
          backgroundColor: '#E42217',
        },
        {
          key: 3,
          title: 'Rocket guy',
          text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
          image: require('../../assets/donor.png'),
          backgroundColor: '#E42217',
        }
    ];
    const [showSlider, setShowSlider] = useState(true)
    // get item to be render : 
    const getItem = (item) => {
        return  <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
      </View>
    }
    return (
        <View style={styles.container}>
            <StatusBar
                style='auto'
            />
            <Text style={styles.mapHeader}>
                Home Screen
            </Text>
            <View style={styles.containerSetInput}>
                {
                    showSlider 
                    ? 
                    <AppIntroSlider
                        data={slides}
                        renderItem={getItem}
                    />
                    :
                    <Text>home Content</Text>
                }
            </View>
        </View>
        
    )
}