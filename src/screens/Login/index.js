import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import {
  Button,
  TouchableHighlight,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
  Animated,
  View,
  Image,
  Text,
  Alert
} from 'react-native';

import CommonStyles from '../../common/CommonStyle';

const { Styles } = CommonStyles;

const windowWidth = Dimensions.get('window').width;

export default class LoginScreen extends Component {

render() {
    return (
      <View style={{flex:1,alignItems:'center'}}>
          <Image style={Styles.imgLogo} source={require('../../common/images/logo.png')}/>
          <Text style={Styles.titleText}>Login</Text>
          <Text style={Styles.descriptionText}>Business Management for trades made easy</Text>
          <TextInput style={Styles.inputText} placeholder="Email" />
          <TextInput style={Styles.inputText} secureTextEntry={true} placeholder="Password" />
          <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'} 
                  onPress={()=>this.props.navigator.push({
                          screen: 'MainScreen',
                          navigatorStyle: {
                            navBarHidden: true
                          }
                  })}>
            <Text style={Styles.primaryButton}>Login</Text>
          </TouchableHighlight>
          <View style={{flex:1}}/>
          <View style={Styles.bottomText}>          
            <View style={{textAlign:'center',alignSelf:'stretch',flexDirection:'row'}}>
               <Text style={{color:'#999'}}> Don't have an account? </Text>               
               <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>this.props.navigator.push({
                          screen: 'RegisterScreen',
                          navigatorStyle: {
                            navBarHidden: true
                          }
                      })}>
                  <Text style={{color:'#0070CE'}}>Sign up</Text>
               </TouchableHighlight>
            </View>
            
          </View>          
      </View>
    );
  }
}
