import React, { Component } from 'react';
import DrawerLayout from 'react-native-drawer-layout';
import {
  ListView,
  TouchableHighlight,  
  View,
  Image,
  Text,
  Alert,
  FlatList
} from 'react-native';

import CommonStyles from '../../common/CommonStyle';

const { Styles } = CommonStyles;

export default class DetailQuoteScreen extends Component {  
  
  render() {     
      return (
        <View style={{flex:1}}>
            <View style={Styles.viewNavbar}>
              <Text style={Styles.textTitle}>Detail Quote</Text>
              <TouchableHighlight style={Styles.btnNavBar} onPress={() => this.props.navigator.pop()}>
                  <Image style={Styles.imgBack} source={require('../../common/images/ic_back.png')}/>  
              </TouchableHighlight>
            </View>
            <Text style={[Styles.textDetailQuote,{marginTop:20}]}>Raymond J.Little</Text>
            <Text style={[Styles.textDetailQuote,{marginTop:10}]}>2937 Junkins Avenue Omega,GA</Text>
            <Image style={[Styles.imgBookingMap,{marginLeft:10}]} source={require('../../common/images/img_map_wide.png')}/>
            <View style={Styles.viewDetailQuoteButtonbar}>
                <View style={Styles.viewDetailQuoteButton}>
                  <Image style={Styles.imgDetailQuoteIcon} source={require('../../common/images/ic_return.png')}/>
                  <Text style={Styles.txtDetailQuoteButton}>Convert</Text>
                </View>
                <View style={Styles.viewDetailQuoteButton}>
                  <Image style={Styles.imgDetailQuoteIcon} source={require('../../common/images/ic_message.png')}/>
                  <Text style={Styles.txtDetailQuoteButton}>Message</Text>
                </View>
            </View>
            <View style={Styles.viewDetailQuoteButtonbar}>
                <View style={Styles.viewDetailQuoteButton}>
                  <Image style={Styles.imgDetailQuoteIcon} source={require('../../common/images/ic_follow.png')}/>
                  <Text style={Styles.txtDetailQuoteButton}>Follow Up</Text>
                </View>
                <View style={Styles.viewDetailQuoteButton}>
                  <Image style={Styles.imgDetailQuoteIcon} source={require('../../common/images/ic_phone.png')}/>
                  <Text style={Styles.txtDetailQuoteButton}>Phone</Text>
                </View>
            </View>
            <View style={{flex:1}}>

            </View>
            <TouchableHighlight style={{margin:10,alignItems:'center'}} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'} 
                  onPress={()=>this.props.navigator.push({
                          screen: 'MainScreen',
                          navigatorStyle: {
                            navBarHidden: true
                          }
                  })}>
            <Text style={Styles.primaryButton}>Edit Quote</Text>
          </TouchableHighlight>
        </View>      
      );
    }
}
