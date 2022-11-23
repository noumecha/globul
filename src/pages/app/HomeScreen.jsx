import React, { useState } from 'react'
import styles from '../../styles'
import { View ,ScrollView, Text, Image } from 'react-native'
//import { doc, setDoc, addDoc, collection } from 'firebase/firestore'
//import { db } from '../../../config'
//import { PropTypes } from 'prop-types'
import AppIntroSlider from 'react-native-app-intro-slider'
import {renderSlide} from '../../components/renderSlide'
import CustButton from '../../components/CustButton'

export default function HomeScreen()
{ 
    const slides = [
        {
          key: 1,
          title: 'Devenez un héro en sauvant des vies !',
          text: 'Une application mobile pour trouver des donneurs et faire des demandes de dons',
          image: require('../../assets/bg_home/don_2.jpg'),
          backgroundColor: '#E42217',
        },
        {
          key: 2,
          title: 'Une goutte peut sauver une vie',
          text: 'Trouver des donneurs compatibles et prenez contact pour un rendez-vous',
          image: require('../../assets/bg_home/don_4.jpg'),
          backgroundColor: '#E42217',
        },
        {
          key: 3,
          title: 'Trouver des donneurs à proximité de votre position',
          text: 'Rechercher rapidement des donneurs dans votre région sans vous déplacer',
          image: require('../../assets/bg_home/don_5.jpg'),
          backgroundColor: '#E42217',
        },
        {
          key: 4,
          title: 'Passer un appel direct au donneurs potentiel',
          text: 'Rechercher rapidement des donneurs dans votre région sans vous déplacer',
          image: require('../../assets/bg_home/don_3.png'),
          backgroundColor: '#E42217',
        }
    ];
    const [showSlider, setShowSlider] = useState(true)

    const onDone = () => {
        setShowSlider(true)
    }
    const onSkip = () => {
        setShowSlider(true)
    }

    return (
        //<ScrollView>
            <View style={styles.HomeContainer}>
                {
                    showSlider 
                    ? 
                        <View style={styles.HomeContainer}>
                            <Text>home Content</Text>
                            <CustButton
                                label="Description du projet"
                                onPress={() => {
                                    setShowSlider(false)
                                    //console.log(slides)
                                }}
                            />
                        </View>
                    :
                        <AppIntroSlider
                            data={slides}
                            onSkip={onSkip}
                            onDone={onDone}
                            showPrevButton={true}
                            bottomButton
                            renderItem={renderSlide}
                        />
                }
            </View> 
        //</ScrollView>
    )
}