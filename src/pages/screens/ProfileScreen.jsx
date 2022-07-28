import React from "react";
import { Text } from "react-native"

const ProfileScreen = ({ navigation, route }) => 
{

    return (
        <Text>
            this is {route.params.name} profile
        </Text>        
    )

}
export default ProfileScreen