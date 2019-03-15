import React, { Component } from 'react';
import DrawerLayout from 'react-native-drawer-layout';
import {
  ListView,
  TouchableHighlight,  
  View,
  Image,
  Text,
  ScrollView,
  Alert  
} from 'react-native';

import CommonStyles from '../../common/CommonStyle';

const { Styles } = CommonStyles;

export default class EditBookScreen extends Component {  
  
  render() {     
      return (
        <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <View>
                  <Image style={[Styles.imgBookingDetail]} source={require('../../common/images/img_map_wide.png')}/>
                  <View style={Styles.viewBookingDesc}>
                    <Text style={[Styles.textBookingDesc,{marginTop:10}]}>Joana Cannon</Text>
                    <Text style={[Styles.textBookingDesc1,{marginTop:10}]}>208 Regent Place,{"\n"}Islington Blenheim{"\n"}7201 New Zealand</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10,marginBottom:10}}>
                        <Image style={{width:20,height:20}} source={require('../../common/images/ic_editbook_phone.png')}/>
                        <Text style={[Styles.textBookingDesc,{marginLeft:10}]}>(028) 5465-020</Text>
                    </View>                    
                  </View>
                  <View style={{backgroundColor:'#fff'}}>
                    <Text style={[Styles.textBookingDesc,{marginTop:20,color:'#3C4350'}]}>Booking Description</Text>
                    <Text style={[Styles.textBookingDesc1,{marginTop:10,color:'#696D6F'}]}>(AT) DS, iron, not steep. Quote for re-tighten {"\n"}of nails. Pamela Property Manager - (028){"\n"}5465-020 No tenant details given</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:10}}>
                        <Image style={{width:40,height:40}} source={require('../../common/images/ic_editbook_return.png')}/>
                        <Image style={{width:40,height:40,marginLeft:10}} source={require('../../common/images/ic_editbook_red_close.png')}/>
                        <Image style={{width:40,height:40,marginLeft:10}} source={require('../../common/images/ic_editbook_green_phone.png')}/>
                        <Image style={{width:40,height:40,marginLeft:10}} source={require('../../common/images/ic_editbook_green_fav.png')}/>
                    </View>
                  </View>
                  <View style={{backgroundColor:'#F9F9F9'}}>
                    <Text style={[Styles.textBookingDesc,{fontSize:18,textAlign:'left',marginLeft:10,marginTop:20,color:'#9DA1A7'}]}>Phone Numbers:</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,paddingLeft:10}}>
                        <Image style={{width:13,height:20,resizeMode:'stretch'}} source={require('../../common/images/ic_mobile.png')}/>
                        <Text style={[Styles.textBookingDesc,{fontSize:18,textAlign:'left',marginLeft:10,color:'#9DA1A7'}]}>Mobile:(028) 5465-020</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,paddingLeft:10}}>
                        <Image style={{width:13,height:20,resizeMode:'stretch'}} source={require('../../common/images/ic_gray_phone.png')}/>
                        <Text style={[Styles.textBookingDesc,{fontSize:18,textAlign:'left',marginLeft:10,color:'#9DA1A7'}]}>Home:(028) 5465-020</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,paddingLeft:10}}>
                        <Image style={{width:13,height:20,resizeMode:'stretch'}} source={require('../../common/images/ic_fax.png')}/>
                        <Text style={[Styles.textBookingDesc,{fontSize:18,textAlign:'left',marginLeft:10,color:'#9DA1A7'}]}>Office:(028) 5465-020</Text>
                    </View>
                  </View>

                  <TouchableHighlight style={{margin:10,alignItems:'center'}} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'} 
                          onPress={()=>this.props.navigator.push({
                                  screen: 'MainScreen',
                                  navigatorStyle: {
                                    navBarHidden: true
                                  }
                          })}>
                    <Text style={Styles.primaryButton}>Edit Booking</Text>
                  </TouchableHighlight>
                </View>                
            </ScrollView>
        </View>      
      );
    }
}
