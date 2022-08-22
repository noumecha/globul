import { StyleSheet,StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#E42217',
    width: 400,
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    display: 'flex',
    padding: 20,
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
    width: 250,
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
  txtInput: {
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 250,
    color: '#E42217',
    borderWidth: 1,
    borderColor: '#E42217',
  },
  item: {
    margin: 5,
    padding: 5,
    color: 'slategrey',
    backgroundColor: 'ghostwhite',
    textAlign: 'center',
  },
  scroller: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  iconBig : {
    color: 'white',
    fontSize: 100
  },
  brandText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  brandCitation: {
    color: '#E42217',
    fontSize: 18,
    textTransform: 'lowercase',
  },
});