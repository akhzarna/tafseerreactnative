
const React = require('react');

const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  Alert,
} = require('react-native');

import {Navigation} from 'react-native-navigation';

// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded
// } from 'react-native-admob';

var Constants=require('./Constants');
var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var menu=require('./Icons/menu.png');
var backArrow=require('./Icons/back.png');
var AdCount=0;
const window = Dimensions.get('window');

const Header = (props)=>{

  state={
    isDisabled:true,
    isOpen:false,
    swipeToClose: true,
    sliderValue: 0.3
  }

   actMenuClick = () => {
     this.hideSideMenu();
 }

  navigateBack = () => {
    props.navigation.pop();
  }

  hideSideMenu=() => {
  props.navigation.push('BookmarkScreen');
  }

  settingMenu = () => {
        this.props.navigation.navigate('SettingScreen',{
        });
    }

  favScreen=() => {

  }

  settingFunction= () => {
    props.navigation.push('SettingScreen');
   }

   infoClick= () => {
        Constants.goTo=true;
        console.log("check is goto==",Constants.goTo);
   }

  showInterstitial=()=> {
    AdMobInterstitial.showAd().catch(error => {console.warn(error)
    });
  }

  return (

  <View style={{ height: 50,backgroundColor:Constants.ThemeColor,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',marginBottom:0}}>
        {props.showBackbutton? (
           <View style={{flex:0.1}}>
           <TouchableOpacity style={styles.buttonDimension}
            onPress={navigateBack}>
            <Image style={styles.iconStyle} source={backArrow}/>
           </TouchableOpacity>
       </View>
       ):(
          <View style={{flex:0.1}}>
           <TouchableOpacity style={styles.buttonDimension}
            onPress={this.hideSideMenu}>
            <Image style={{height:20 ,width:20}} source={favIcon}/>
            </TouchableOpacity>
            </View>
       )
      }
       <View style={styles.textView}>
       <Text style={styles.titleStyle}> {props.title} </Text>
       </View>
      {
      props.showSetting? (
       <View style={styles.iconView}>
            <TouchableOpacity onPress={this.settingFunction}>
             <Image style={{height:25,width:25}} source={settings}/>
            </TouchableOpacity>
       </View>
           ):(
           null
             )
       }
       </View>

		);
}


const styles=StyleSheet.create({

  headerStyle:{
  justifyContent:'center',
  width:window.width,
	},
  viewStyle:{
    height: 60,
    backgroundColor:Constants.ThemeColor,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  titleStyle:{
  fontWeight:'bold',
  color:  'white',    //'#2A3990',
  fontSize:18,
  fontFamily:'UrduTypesetting',
  },
  iconView:{
    flex:0.1,
    paddingRight:5,
  },
  textView:{
    flex:0.9,
    paddingLeft:10,
    alignItems:'center',
    justifyContent:'center',
  },
  notifyStyle:{
    flex:0.1,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  iconStyle:{
    width:20,
    height:17,
  },
  buttonDimension:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:8,
    width:40,
    height:40,
  },
  iconMenuDimension:{
    width:25,
    height:20,
  },
  buttonNotificationDimention:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
    width:40,
    height:40,
  },
  iconNotifyDimension:{
     width:30,
     height:25,
     marginRight:15,
     resizeMode: 'contain',
  },
  notifyheaderStyle:{
  justifyContent:'center',
  alignItems:'center',
  height: 120,
  },
});

module.exports=Header;
