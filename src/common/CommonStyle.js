import
{
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SCREEN = {
  width,
  height
};

const THEME_COLOR = {
  color: '#F7941D', // this is theme color from Appster
  // color: '#f15a29',    // this is theme color from heard agency
  lightGrey: '#8E8E8E',
  lightRed: '#ff5959',
  grey: '#6A6464',
  greyish: '#B8B8B8',
  green: '#8ED051',
  maroon: '#d42d1f',
  boxColor: '#F9F9F9',
  boxPlaceholderColor: '#9F9F9F',
  boxGrey: '#ACACAC',
  paleYellow: '#fff8f0',
  chatBubbleColor: '#E7E7E7',
  fieldColor: '#F4F4F4',
  toasterBgColor: '#FFE57F',
  toasterNotifyColor: '#FFAB00',
  orange: '#f38118'
};

const fontFamilyItalic = Platform.select({
  ios: {
    fontFamily: 'AvenirNext-MediumItalic'
  },
  android: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic'
  }
});

const fontFamily = {
  fontFamily: 'Avenir-Medium',
};

const fonts = {
  text1: {
    ...fontFamily,
    fontSize: 18
  },
  text2: {
    ...fontFamily,
    fontSize: 14
  },
  text2Italic: {
    ...fontFamilyItalic,
    fontSize: 14
  },
  roman: {
    fontFamily: 'Avenir-Roman',
    fontSize: 16
  },
  medium20: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20
  },
  medium22: {
    fontFamily: 'Avenir-Medium',
    fontSize: 22
  },
  medium: {
    fontFamily: 'Avenir-Medium',
    fontSize: 18
  },
  medium16: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16
  },
  medium14: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14
  },
  medium12: {
    fontFamily: 'Avenir-Medium',
    fontSize: 12
  },
  roman12: {
    fontFamily: 'Avenir-Roman',
    fontSize: 12
  },
  book: {
    fontFamily: 'Avenir-Book',
    fontSize: 16
  },
  heavy: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 16
  },
  oblique: {
    fontFamily: 'Avenir-Oblique',
    fontSize: 16
  },
  italic: {
    fontFamily: 'AvenirNext-MediumItalic',
    fontSize: 14
  },
  headline: {
    ...fontFamily,
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME_COLOR.grey
  }
};

const Styles = StyleSheet.create({
  fullContainer: {
    flex: 1
  },
  container: {
    ...Platform.select({
      ios: {
        marginTop: 14
      }
    }),
    flex: 1
  },
  containerWithHeader: {
    ...Platform.select({
      // based on different navbar height
      ios: {
        marginTop: 80,
      },
      android: {
        paddingTop: 70,
      }
    }),
    flex: 1
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#f6931d',
    borderTopWidth: 1
  },
  navBar: {
    backgroundColor: '#fff',
  },
  navBarTitle: {
    color: '#fab678'
  },

  /**
   * Global tags view
   * @type {Object}
   */
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start'
  },
  tag: {
    height: 32,
    paddingHorizontal: 8,
    marginRight: 6,
    marginVertical: 4,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#ffe7cb'
  },
  tagFilter: {
    height: 32,
    paddingHorizontal: 8,
    marginRight: 6,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#ffe7cb'
  },
  tagText: {
    ...fonts.medium14,
    lineHeight: 22,
  },
  tagAddBtn: {
    flexDirection: 'row',
    height: 32
  },
  addTagBtnText: {
    lineHeight: 26,
  },
  selectedTag: {
    borderWidth: 2,
    borderColor: THEME_COLOR.color
  },
  selectedTagText: {
    color: THEME_COLOR.color
  },
  unselectedTag: {
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME_COLOR.lightGrey
  },
  unselectedTagText: {
    color: THEME_COLOR.lightGrey
  },
  body: {
    flex: 1,
    paddingHorizontal: 16
  },
  label: {
    ...fonts.text1,
    color: '#7d7777',
    flex: 1,
    fontSize: 20,
    height: 32,
    lineHeight: 32,
    marginTop: 12
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  flexDirectionColumn: {
    flexDirection: 'column'
  },
  titleText: {
      fontSize:25,
      color:'#000',
      alignSelf: 'stretch',
      height:40,
      marginTop:30,
      textAlign:'center'
  },
  descriptionText:{
      fontSize:15,
      color:'#999',
      alignSelf: 'stretch',
      height:40,      
      marginTop:10,
      marginLeft:20,
      marginRight:20,
      textAlign:'center'
  },
  inputText:{
    backgroundColor:'#F7F7F8',
    height:40,
    alignSelf: 'stretch',
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    textAlign:'center'    
  },
  primaryButton:{
    backgroundColor:'#0070CE',
    height:40,
    width:300,    
    marginTop:30,    
    textAlign:'center',
    color:'#fff',
    borderRadius:15,
    paddingTop:10    
  },
  bottomText:{
    marginBottom:20
  },
  imgLogo:{
    height:50,
    marginTop:50,    
    resizeMode:'stretch',
    width:250
  },
  imgPicker:{
    height:50,
    marginTop:50,    
    resizeMode:'stretch',
    width:50
  },
  drawLayoutClose:{
    backgroundColor:'#0070CE',
    height:60,
    width:60,
    
  },
  menuDrawerlayout:{    
    height:60,
    width:60,    
  },
  btnNavBar:{
    height:50,
    width:50,    
  },
  textTitle:{    
    position:'absolute',
    color:'#fff',
    fontSize:20,    
    flex:1,
    width:SCREEN.width,
    textAlign:'center',
  },
  imgNavBar:
  {
    marginLeft:15,
    marginTop:15,
    resizeMode:'stretch',
    height:20,
    width:20
  },
  imgDrawerClose:{
    marginLeft:20,
    marginTop:20,
    resizeMode:'stretch',
    height:20,
    width:20
  },
  viewNavbar:{
    flexDirection:'row',    
    alignItems:'center',
    backgroundColor:'#2C3239',
    height:50,
  },
  viewQuoteItem:{
    height:150,
    flex:1,
    flexDirection:'row',
    padding:15
  },
  viewQuoteContent:{
    paddingLeft:10,
    flex:1
  },
  txtQuoteTitle:{
      fontSize:18,
      color:'#3C4358',
      paddingBottom:10
  },
  txtQuoteAddress:{
    fontSize:16,
    color:'#696D6F',
    flexDirection:'row',
    flexWrap: 'wrap',
    paddingBottom:10
  },
  imgQuoteItem:{
    width:120,
    height:120,
  },
  viewBookingItem:{    
    flex:1,
    padding:15
  },
  viewBookingItemTop:{
    flexDirection:'row',            
    alignItems:'center'
  },
  textBookingTitle:{
    fontSize:18,
    color:'#3C4358',
    flex:1
  },
  textBookingDuration:{
    fontSize:16,
    color:'#888'
  },
  imgBookingMap:{
    marginTop:10,
    resizeMode:'stretch',
    width:SCREEN.width - 30,
    height:150
  },
  textBookingDescription:{
    fontSize:17,
    lineHeight:25,
    marginTop:10,
    color:'#696D6F'
  },
  viewBookingFooter:{
    marginTop:10,
    flexDirection:'row',            
    alignItems:'center'
  },
  textBookingDate:{
    color:'#9DA1A7',
    fontSize:16,
    marginLeft:10,
    flex:1
  },
  separator:{
    backgroundColor:'#ccc',
    height:1,    
    marginLeft:10,
    marginRight:10
  },
  imgBack:
  {
    marginLeft:15,
    marginTop:15,
    resizeMode:'stretch',
    height:18,
    width:10
  },
  textDetailQuote:{
    color:'#000',
    fontSize:18,
    textAlign:'center'

  },
  viewDetailQuoteButtonbar:
  {
    marginTop:10,
    flexDirection:'row',
    height:50
  },
  viewDetailQuoteButton:
  {
    flex:1,
    flexDirection:'row',    
    textAlign:'center',    
    alignItems:'center'

  },
  imgDetailQuoteIcon:
  {
    marginLeft:30,
    height:30,
    width:30
  },
  txtDetailQuoteButton:
  {
    fontSize:17,
    lineHeight:25,
    marginLeft:10,
    color:'#696D6F'
  },
  imgBookingDetail:{    
    resizeMode:'stretch',
    width:SCREEN.width,
    height:150
  },
  viewBookingDesc:{
    backgroundColor:'#2C3239',
    padding:10,
    textAlign:'center'
  },
  textBookingDesc:{   
    textAlign:'center', 
    color:'#fff',
    fontSize:20
  },
  textBookingDesc1:{
    textAlign:'center', 
    lineHeight:18,    
    color:'#69777E',
    fontSize:16
  }

});

const navigatorStyle = {
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: false, // screen would not draw under bottom tab
  drawUnderNavBar: false, // screen would not draw under top nav
  screenBackgroundColor: 'white',
  navBarTextFontFamily: 'Avenir-Medium',
  navBarTitleTextCentered: true,
  navBarTranslucent: false,
  navBarTextColor: THEME_COLOR.grey,
  navBarBackgroundColor: THEME_COLOR.boxColor,
  navBarButtonColor: THEME_COLOR.grey,
};

const defaultNavBackBtn = {
  leftButtons: [
    {
      id: 'back'
    }
  ]
};

export default {
  Styles,
  SCREEN,
  THEME_COLOR,
  fonts,
  navigatorStyle,
  defaultNavBackBtn
};
