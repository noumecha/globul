import { StyleSheet,StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'ghostwhite',
      ...Platform.select({
          ios: { paddingTop: 20 },
          android: { paddingTop: StatusBar.currentHeight },
      }),
    },
    box: {
      height: 100,
      alignSelf: "stretch",
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    boxRound: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    boxText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
});