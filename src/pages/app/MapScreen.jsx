import React, { useContext } from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'
import MapView from 'react-native-maps'
import { StatusBar } from 'expo-status-bar'
//import CustButton from '../../components/CustButton'
import SquareButton from '../../components/SquareButton'
import { AuthContext } from '../../components/context';

export default function MapScreen()
{
    return (
        <View style={styles.container}>
            <StatusBar
                style='auto'
            />
            <Text style={styles.mapHeader}>
                Retrouvez des donneurs
            </Text>
            <MapView 
                style={styles.mapContainer}
                showsUserLocation={true}
            />
            <View style={styles.mapFilter}>
                <SquareButton label="Tout"/>
                <SquareButton label="Demandes"/>
                <SquareButton label="A+"/>
                <SquareButton label="A-"/>
                <SquareButton label="B+"/>
                <SquareButton label="B-"/>
            </View>
            <View style={styles.mapFilter}> 
                <SquareButton label="Donneurs"/>   
                <SquareButton label="AB+"/>
                <SquareButton label="AB-"/>
                <SquareButton label="O-"/>
                <SquareButton label="O+"/>
            </View>
        </View>
    )
}