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

export default class MainScreen extends Component {  

  state = {
    users: [{name:'Datsun',email:'White',type:'Quote'},{name:'Datsun',email:'White',type:'Quote'},{name:'Datsun',email:'White',type:'Booking'},{name:'Datsun',email:'White',type:'Quote'},{name:'Datsun',email:'White',type:'Quote'}]
  }
  _renderSeparator=({item}) => {
    return (
      <View style={Styles.separator}/>
    );
  };
  _renderItem = ({item}) => {
      if (item.type == 'Booking') {        
        return (
          <View style={Styles.viewBookingItem}>
          <View style={Styles.viewBookingItemTop}>
            <Text style={Styles.textBookingTitle}>Joanna Cannon</Text>
            <Text style={Styles.textBookingDuration}>In 20 mins</Text>
          </View>
          <Image style={Styles.imgBookingMap} source={require('../../common/images/img_map_wide.png')}/>
          <Text style={Styles.textBookingDescription}>
            (AT) Please call to confirm a time that you will be there. Samantha will be the one to meet you - 02123123. Short runs of iron;SS in front; almost 3 levels at the back due to steep drop.
            Please check over roof and quote for any  necessary remedical work required prior to getting the roof painted. Please quote for a repaint separately
          </Text>
          <View style={Styles.viewBookingFooter}>
            <Image style={{width:20,height:20,resizeMode:'stretch'}} source={require('../../common/images/ic_clock.png')}/>
            <Text style={Styles.textBookingDate}>14th March 2018 7:45am</Text>
            <Image style={{width:50,height:20,resizeMode:'center'}} source={require('../../common/images/ic_more.png')}/>
          </View>
        </View>
        );
      } else if (item.type == 'Quote') {
        return(
        <View style={Styles.viewQuoteItem}>
          <Image style={Styles.imgQuoteItem} source={require('../../common/images/img_placeholder.png')}/>
          <View style={Styles.viewQuoteContent}>
            <Text style={Styles.txtQuoteTitle}>Quote #122</Text>
            <Text style={Styles.txtQuoteAddress} numberOfLines={2}>Raymond J. Little 2937 Junkins Avenue Omega GA</Text>
            <Text style={Styles.txtQuoteAddress}>$5,000 excl $5,721 incl</Text>
          </View>
        </View>
        );
      }
  };
  render() {
      const navigationView = (
        <View style={{flex:1}}>
          <TouchableHighlight style={Styles.drawLayoutClose} onPress={() => this.drawer.closeDrawer()}>
              <Image style={Styles.imgDrawerClose} source={require('../../common/images/ic_close.png')}/>  
          </TouchableHighlight>
          <TouchableHighlight style={Styles.menuDrawerlayout} onPress={() => this.drawer.closeDrawer()}>
              <Image style={Styles.imgDrawerClose} source={require('../../common/images/ic_fav.png')}/>  
          </TouchableHighlight>
          <TouchableHighlight style={Styles.menuDrawerlayout} onPress={() => this.drawer.closeDrawer()}>
              <Image style={Styles.imgDrawerClose} source={require('../../common/images/ic_ring.png')}/>  
          </TouchableHighlight>
          <TouchableHighlight style={Styles.menuDrawerlayout} onPress={() => this.drawer.closeDrawer()}>
              <Image style={Styles.imgDrawerClose} source={require('../../common/images/ic_user.png')}/>  
          </TouchableHighlight>
          <View style={{flex:1}}></View>
          <TouchableHighlight style={Styles.menuDrawerlayout} onPress={() => this.drawer.closeDrawer()}>
              <Image style={Styles.imgDrawerClose} source={require('../../common/images/ic_power_off.png')}/>  
          </TouchableHighlight>
        </View>
      );
      return (
        <DrawerLayout                
          drawerBackgroundColor="white"
          drawerWidth={60}        
          ref={drawer => {
            return (this.drawer = drawer);
          }}
          renderNavigationView={() => navigationView}>
          <View style={{flex:1}}>
            <View style={Styles.viewNavbar}>
              <Text style={Styles.textTitle}>Activity</Text>
              <TouchableHighlight style={Styles.btnNavBar} onPress={() => this.drawer.openDrawer()}>
                  <Image style={Styles.imgNavBar} source={require('../../common/images/ic_menu.png')}/>  
              </TouchableHighlight>
              <TouchableHighlight style={[Styles.btnNavBar,{marginLeft: 'auto'}]} onPress={() => this.drawer.closeDrawer()}>
                  <Image style={Styles.imgNavBar} source={require('../../common/images/ic_search.png')}/>  
              </TouchableHighlight>  
            </View>
            <FlatList              
              data={this.state.users}
              showsVerticalScrollIndicator={false}
              renderItem={this._renderItem}
              keyExtractor={item => item.email}
              ItemSeparatorComponent={this._renderSeparator}
            />
          </View>
        </DrawerLayout>      
      );
    }
}
