import React, { Component } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
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
              <Text style={Styles.textTitle}>Job Calendar</Text>
              <TouchableHighlight style={Styles.btnNavBar} onPress={() => this.props.navigator.pop()}>
                  <Image style={Styles.imgBack} source={require('../../common/images/ic_back.png')}/>  
              </TouchableHighlight>
            </View>
            <Calendar
              // Initially visible month. Default = Date()
              current={'2012-03-01'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2012-05-10'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2012-05-30'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {console.log('selected day', day)}}
              // Handler which gets executed on day long press. Default = undefined
              onDayLongPress={(day) => {console.log('selected day', day)}}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month) => {console.log('month changed', month)}}
              // Hide month navigation arrows. Default = false
              hideArrows={true}
              // Replace default arrows with custom ones (direction can be 'left' or 'right')
              renderArrow={(direction) => (<Arrow />)}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
              // Hide day names. Default = false
              hideDayNames={true}
              // Show week numbers to the left. Default = false
              showWeekNumbers={true}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={substractMonth => substractMonth()}
              // Handler which gets executed when press arrow icon left. It receive a callback can go next month
              onPressArrowRight={addMonth => addMonth()}
            />
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
