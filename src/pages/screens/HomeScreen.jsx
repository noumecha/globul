import React from "react";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => 
{
    return (
        <Button 
            title="Go to profile page"
            onPress={() =>
                navigation.navigate('Profile', { name:'John' })
            }
        />
    )
}

export default HomeScreen;