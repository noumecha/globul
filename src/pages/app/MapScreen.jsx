import React, { useContext, useState, useEffect } from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'
import MapView , { Marker } from 'react-native-maps'
import { StatusBar } from 'expo-status-bar'
//import CustButton from '../../components/CustButton'
import SquareButton from '../../components/SquareButton'
import * as Location from 'expo-location'
import { AuthContext } from '../../components/context';

export default function MapScreen()
{
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    // asking access to the user
    /*let { status } = Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      //return;
    } else {
        let locat = Location.getCurrentPositionAsync({});
        setLocation(locat) 
    }*/


    // show the location
    /*let text = {}
    if (errorMsg) {
      text = errorMsg
    } else if (location) {
      text = location
    }*/
    //console.log(text.coords.longitude)
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
                initialRegion={{
                    latitude: 3.8666632, //text.coords.latitude,
                    longitude:11.5166646 , //,text.coords.longitude
                    latitudeDelta: 0.0922, //779498.22049593,  
                    longitudeDelta: 0.0421//,427803.1119178 
                }}
            >
                <Marker
                    coordinate={{ latitude: 3.8666632/*text.coords.latitude*/, longitude: 11.5166646/*text.coords.longitude*/ }}
                    title="Voci votre position"
                >
                </Marker>
            </MapView>
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