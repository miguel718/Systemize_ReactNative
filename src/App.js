import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import configStore from './store/configStore';
import COMMON_STYLE from './common/CommonStyle';

registerScreens(configStore(), Provider);

const { THEME_COLOR, navigatorStyle } = COMMON_STYLE;

export default class App {
  static startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'EditBookScreen',
        title: 'Sign In',
        navigatorStyle: {
          navBarHidden: true
        }        
      },
      animationType: 'fade'
    });
  }
}
