import React from 'react';
import { Text } from 'react-native';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>
            <MaterialCommunityIcons 
                name="alert-circle" 
                style={styles.errorIcon} 
                color='#E42217'
                size={14}
            />
            <Text>
                &nbsp;
            </Text>
            {error}
        </Text>;
};


export default ErrorMessage;