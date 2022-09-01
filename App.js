// imports for components 
import 'react-native-gesture-handler'
import AppTest from './src/pages/screens/tests/AppTest'
import MainStack from "./src/navigation/MainStack";

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function App() {

  return (
    //<AppTest/>
    <MainStack/>
  )
}

