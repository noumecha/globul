import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // slider :
  slide: {
    //bottom: 0,
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 100,
  },
  // errror message : 
  errorText: {
    color: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 14,
    padding: 7,
    fontWeight: '600',
    borderRadius: 7,
    backgroundColor: 'black',
  },
  // loader conatiner 
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  // HomeScreen Container : 
  HomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#E42217'
  },
  // default container
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 70,
    backgroundColor: 'red',
  },
  // simple text color: 
  txtColor: {
    color: 'white',
    //backgroundColor: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  /*
  * this following is for container register screen
  */
  registerContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'white',
    zIndex: 1,
    backgroundColor: 'red',
  },
  reg_logo: {
    height: 100,
    width: 100,
    position: 'absolute',
  },
  reg_txt: {
    //marginTop: 20,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  reg_txtSquare: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  regForm : {
    flex: 2,
    justifyContent: 'center',
    //width: '100%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
  },
  /*
  * end styling register screen
  */
 /**
  *  styling map screen
  */
  mapContainer: {
    flex: 0.65,
    width: '100%',
  },
  mapHeader: {
    //height: '15%',
    flex: 0.08,
    top: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#E42217',
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapFilter: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  /**
   *  end styling map screen
   */
  /*
  * this following is for container login screen
  */
  // bg container image in login page
  bg_image: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bg_txt: {
    color: '#E42217',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 150,
  },
  // arc section for logo
  arc: {
    flex: 0.25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    bottom: 20,
    //zIndex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  arc_settings: {
    flex: 0.25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  arc_logo: {
    height: 50,
    borderRadius: 50,
    width: 50,
  },
  // login container style
  containerLogIntput: {
    flex: 0.5,
    width: '100%',
    marginTop: 0,
    bottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerSetInput: {
    flex: 0.5,
    width: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  // input icon style
  inputIcon: {
    padding: 0,
    marginTop: 10,
    position: 'absolute',
    right: 0,
    //backgroundColor: 'green',
  },
  // error icon style 
  errorIcon: {
    padding: 0,
    margin: 0
  },
  // input text style
  txtInput: {
    //padding: 10,
    //borderRadius: 20,
    marginTop: 10,
    width: 250,
    color: '#E42217',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#E42217',
  },
  txtInputWhite: {
    //padding: 10,
    //borderRadius: 20,
    marginTop: 10,
    width: 250,
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  // style for the end tex on login screen
  text: {
    //marginTop: 5,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
  /*
  * end of styling container login screen
  */
  // header container for ...
  headerContainer: {
    backgroundColor: '#E42217',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    display: 'flex',
    padding: 20,
  }, 
  // simple box
  box: {
    height: 100,
    alignSelf: "stretch",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  // perfect circle
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
  // style for button
  txtBtn: {
    backgroundColor: '#E42217',
    color: '#fff',
    fontSize: 16,
    width: 250,
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
  },
  txtBtnSquare: {
    backgroundColor: '#E42217',
    fontSize: 12,
    padding: 10,
    width: 'auto',
    marginLeft: 3,
  },
  // big icons style 
  iconBig : {
    color: 'white',
    fontSize: 100
  },
});