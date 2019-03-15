import { Navigation } from 'react-native-navigation';
import LoginScreen from './screens/Login/index';
import RegisterScreen from './screens/Register/index';
import MainScreen from './screens/Main/index';
import DetailQuoteScreen from './screens/DetailQuote/index';
import EditBookScreen from './screens/EditBooking/index';



const registerScreens = (store, Provider) => {  
  Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('RegisterScreen', () => RegisterScreen, store, Provider);
  Navigation.registerComponent('MainScreen', () => MainScreen, store, Provider);
  Navigation.registerComponent('DetailQuoteScreen', () => DetailQuoteScreen, store, Provider);
  Navigation.registerComponent('EditBookScreen', () => EditBookScreen, store, Provider);
};

export default registerScreens;
