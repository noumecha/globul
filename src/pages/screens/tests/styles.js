import { StyleSheet,StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  box: {
    height: 100,
    alignSelf: "stretch",
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
  logScreen: {
    top: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    backgroundColor: '#E42217',
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
  item: {
    margin: 5,
    padding: 5,
    color: 'slategrey',
    backgroundColor: 'ghostwhite',
    textAlign: 'center',
  }
});