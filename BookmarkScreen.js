
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Platform,
  ActivityIndicator,
  AsyncStorage,
  Dimensions,
  Slider,
  FlatList,
  ToastAndroid,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Picker,
} from 'react-native';

// import {Navigation} from 'react-native-navigation';

// var BannerAdView=require('./BannerAdView');
//
// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
// } from 'react-native-admob';


// var RNFS = require('react-native-fs');
// import LocalizedStrings from 'react-native-localization';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import StringsOfLanguage from './StringsOfLanguage';

var {height, width} = Dimensions.get('window');
// var Header=require('./Header');
var Constants=require('./Constants');

//var CryptoJS = require("crypto-js");
//var SQLite = require('react-native-sqlite-storage');

var {DEVICE_HEIGHT, DEVICE_WIDTH} = Dimensions.get('window');
var AdCount=0;
var color1=Constants.Color1;

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mrqkandhelvi.sqlite', createFromLocation : 1});

var concatData='';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var backArrow=require('./Icons/back.png');

/* ## To Refresh Component When any change occur ## */
// import { NavigationEvents } from 'react-navigation';

class BookmarkScreen extends Component{

  static options(passProps) {
  return {
  statusBar: {
    visible: true,
    style: 'light',
    backgroundColor:Constants.statusbarclr,
      },
    };
  }

  constructor(props){
    super(props);
    this.state={
        bookArray:[],
        Colorset:'',
        dataArray:[],
        data:{},
        SliderValue:'',
        testit:color1,
        activityShow:true,
        languageCode:null,
    }
  }

  // ComponentWillReceiveProps(){
  //     Alert.alert('It is receiving props');
  // }

  // componentDidMount(){
  //  AsyncStorage.getItem("bookMark").then((value) => {
  //                newA=JSON.parse(value);
  //                if(newA!=null){
  //                         this.setState({bookArray:newA});
  //                       }else{
  //                         this.setState({activityShow:false,bookArray:newA});
  //                       }
  //                   }).done();
  // }

  fetchDataFromDB(){
    var arrayDB = [];
    db.transaction(tx => {
           tx.executeSql(
             'SELECT * FROM ayah WHERE BookMark = 1',[],
             (tx, results) => {
               var resultslength = results.rows.length;
               console.log('select * results are = ',resultslength);
               if (resultslength > 0) {
                 for (let i = 0; i < resultslength; ++i) {
                   var objforDB = {
                     key:i+1,
                     SurahNumber:results.rows.item(i).SurahNumber,
                     AyahNumber:results.rows.item(i).AyahNumber,
                     AyahTextQalam:results.rows.item(i).AyahTextQalam,
                     AyahTextMuhammadi:results.rows.item(i).AyahTextMuhammadi,
                     AyahTextPdms:results.rows.item(i).AyahTextPdms,
                     AyahTextPlain:results.rows.item(i).AyahTextPlain,
                     Translation:results.rows.item(i).Translation,
                     Tafseer:results.rows.item(i).Tafseer,
                     Words:results.rows.item(i).Words,
                     Ruku:results.rows.item(i).Ruku,
                     BookMark:results.rows.item(i).BookMark
                   };
                   arrayDB.push(objforDB);
                   console.log(objforDB.BookMark);
                 }
                 console.log('0 index is = ', arrayDB[0].BookMark);
                 this.setState({
                    activityShow:false,
                    bookArray:arrayDB
                  });
               }else{
                 alert('No user found');
               }
             }
           );
         });
  }

  componentDidMount(){
    // Data Base
    this.fetchDataFromDB();
  }

 componentWillUnmount() {
  //  NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
  //    console.log("will unmount call");
}

checkForInternectConnection(){
if (Constants.statusofNet) {
}else{
  Alert.alert('Error!','Internet not Connected');
  }
}

componentWillMount(){
  this.alternateOfComponentwillMount();
}

alternateOfComponentwillMount() {
    AsyncStorage.getItem("keyOfLanguage").then((langg) => {
                  if(JSON.parse(langg) != null){
                   this.state.languageCode= JSON.parse(langg);
                   var languageCode1=this.state.languageCode;
                     // StringsOfLanguage.setLanguage(languageCode1);
                    }
                    else{
                    this.state.languageCode= null;
                        }
                    })
                    .done();

    AsyncStorage.getItem("showhide").then((show) => {
      if(JSON.parse(show) == null){
         var ValueOffcolor=Constants.ArabicShowHide;
  }
  else{
    Constants.ArabicShowHide=JSON.parse(show);
  }
}).done();


    AsyncStorage.getItem("showhide1").then((show1) => {

      if(JSON.parse(show1) == null){

         var ValueOffcolor=Constants.UrduShowHide;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.UrduShowHide=JSON.parse(show1);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();


    AsyncStorage.getItem("showhide2").then((show2) => {

      if(JSON.parse(show2) == null){

         var ValueOffcolor=Constants.EnglishShowHide;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.EnglishShowHide=JSON.parse(show2);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();



 AsyncStorage.getItem("slide").then((show) => {

      if(JSON.parse(show) == null){

         var ValueOffcolor=Constants.layout;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.layout=JSON.parse(show);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();

AsyncStorage.getItem("family2").then((familyname2) => {

      if(JSON.parse(familyname2) == null){

         var ValueOffcolor=Constants.EnglishFamily;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.EnglishFamily=JSON.parse(familyname2);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();



AsyncStorage.getItem("family1").then((familyname1) => {

      if(JSON.parse(familyname1) == null){

         var ValueOffcolor=Constants.ArabicFamily;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.ArabicFamily=JSON.parse(familyname1);

        //Alert.alert(Constants.Family);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();


AsyncStorage.getItem("family").then((familyname) => {

      if(JSON.parse(familyname) == null){

         var ValueOffcolor=Constants.Family;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Family=JSON.parse(familyname);

       // Alert.alert(Constants.Family);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();

AsyncStorage.getItem("areman1").then((colorFONTval1) => {

      if(JSON.parse(colorFONTval1) == null){

         var ValueOffcolor=Constants.Color1;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Color1=JSON.parse(colorFONTval1);

        // Alert.alert(Constants.Color1);
        //this.setState({Colorset:ValueOffcolor1});

  }


  }).done();


AsyncStorage.getItem("areman2").then((colorFONTval2) => {

      if(JSON.parse(colorFONTval2) == null){

         var ValueOffcolor=Constants.Color2;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Color2=JSON.parse(colorFONTval2);

        // Alert.alert(Constants.Color1);
        //this.setState({Colorset:ValueOffcolor1});

  }


  }).done();



AsyncStorage.getItem("theme").then((colorFONTval) => {

      if(JSON.parse(colorFONTval) == null){

         var ValueOffcolor=Constants.ThemeColor;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.ThemeColor=JSON.parse(colorFONTval);

        // Alert.alert(Constants.Color1);
        //this.setState({Colorset:ValueOffcolor1});

  }


  }).done();




AsyncStorage.getItem("ststsclr").then((colorFONTval) => {

      if(JSON.parse(colorFONTval) == null){

         var ValueOffcolor=Constants.statusbarclr;
         console.log("if==",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.statusbarclr=JSON.parse(colorFONTval);
       //  console.log("if==",Constants.statusbarclr);
        // Alert.alert(Constants.Color1);
        //this.setState({Colorset:ValueOffcolor1});

  }


  }).done();

AsyncStorage.getItem("shaktiman").then((TextFONTval) => {

      if(JSON.parse(TextFONTval) == null){

         var ValueOff1=Constants.TxtSize;
         this.setState({SliderValue:ValueOff1});
  }
  else{
    Constants.TxtSize=JSON.parse(TextFONTval);
         var ValueOff2=Constants.TxtSize;
        this.setState({SliderValue:ValueOff2});

  }


  }).done();

AsyncStorage.getItem("shaktiman1").then((TextFONTval1) => {

      if(JSON.parse(TextFONTval1) == null){

         var ValueOff1=Constants.TxtSize1;
        // this.setState({SliderValue:ValueOff1});
  }
  else{
    Constants.TxtSize1=JSON.parse(TextFONTval1);
         var ValueOff2=Constants.TxtSize1;
       // this.setState({SliderValue:ValueOff2});

  }


  }).done();


 AsyncStorage.getItem("shaktiman2").then((TextFONTval2) => {

      if(JSON.parse(TextFONTval2) == null){

         var ValueOff1=Constants.TxtSize2;
        // this.setState({SliderValue:ValueOff1});
  }
  else{
    Constants.TxtSize2=JSON.parse(TextFONTval2);
         var ValueOff2=Constants.TxtSize2;
       // this.setState({SliderValue:ValueOff2});

  }


  }).done();




AsyncStorage.getItem("areman").then((colorFONTval) => {

      if(JSON.parse(colorFONTval) == null){

         var ValueOffcolor=Constants.TxtSize;
         this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Color=JSON.parse(colorFONTval);
         var ValueOffcolor1=Constants.Color;
        this.setState({Colorset:ValueOffcolor1});
     //Alert.alert(ValueOffcolor1);
  }


  }).done();






    AsyncStorage.getItem("keyOfLanguage").then((langg) => {
                  if(JSON.parse(langg) != null){
                   this.state.languageCode= JSON.parse(langg);
                   var languageCode1=this.state.languageCode;
                     // StringsOfLanguage.setLanguage(languageCode1);
                    }
                    else{
                    this.state.languageCode= null;
                        }
                    })
                    .done();

    AsyncStorage.getItem("showhide").then((show) => {

      if(JSON.parse(show) == null){

         var ValueOffcolor=Constants.ArabicShowHide;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.ArabicShowHide=JSON.parse(show);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();


    AsyncStorage.getItem("showhide1").then((show1) => {

      if(JSON.parse(show1) == null){

         var ValueOffcolor=Constants.UrduShowHide;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.UrduShowHide=JSON.parse(show1);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();


    AsyncStorage.getItem("showhide2").then((show2) => {

      if(JSON.parse(show2) == null){

         var ValueOffcolor=Constants.EnglishShowHide;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.EnglishShowHide=JSON.parse(show2);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();



 AsyncStorage.getItem("slide").then((show) => {

      if(JSON.parse(show) == null){

         var ValueOffcolor=Constants.layout;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.layout=JSON.parse(show);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();

AsyncStorage.getItem("family2").then((familyname2) => {

      if(JSON.parse(familyname2) == null){

         var ValueOffcolor=Constants.EnglishFamily;
       //  Alert.alert("hassan",ValueOffcolor);
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.EnglishFamily=JSON.parse(familyname2);

      //  Alert.alert("ali",Constants.EnglishFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();



AsyncStorage.getItem("family1").then((familyname1) => {

      if(JSON.parse(familyname1) == null){

         var ValueOffcolor=Constants.ArabicFamily;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.ArabicFamily=JSON.parse(familyname1);

        //Alert.alert(Constants.ArabicFamily);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();


AsyncStorage.getItem("family").then((familyname) => {

      if(JSON.parse(familyname) == null){

         var ValueOffcolor=Constants.Family;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Family=JSON.parse(familyname);

       // Alert.alert(Constants.Family);
        //this.setState({Colorset:ValueOffcolor1});

  }
}).done();

AsyncStorage.getItem("areman1").then((colorFONTval1) => {

      if(JSON.parse(colorFONTval1) == null){

         var ValueOffcolor=Constants.Color1;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Color1=JSON.parse(colorFONTval1);

        // Alert.alert(Constants.Color1);
        //this.setState({Colorset:ValueOffcolor1});

  }


  }).done();


AsyncStorage.getItem("areman2").then((colorFONTval2) => {

      if(JSON.parse(colorFONTval2) == null){

         var ValueOffcolor=Constants.Color2;
         //this.setState({Colorset:ValueOffcolor});
  }
  else{
    Constants.Color2=JSON.parse(colorFONTval2);

        // Alert.alert(Constants.Color1);
        //this.setState({Colorset:ValueOffcolor1});

  }


  }).done();



// AsyncStorage.getItem("theme").then((colorFONTval) => {

//       if(JSON.parse(colorFONTval) == null){

//          var ValueOffcolor=Constants.ThemeColor;
//          //this.setState({Colorset:ValueOffcolor});
//   }
//   else{
//     Constants.ThemeColor=JSON.parse(colorFONTval);

//         // Alert.alert(Constants.Color1);
//         //this.setState({Colorset:ValueOffcolor1});

//   }


//   }).done();
AsyncStorage.getItem("shaktiman").then((TextFONTval) => {

      if(JSON.parse(TextFONTval) == null){

         var ValueOff1=Constants.TxtSize;
         this.setState({SliderValue:ValueOff1});
  }
  else{
    Constants.TxtSize=JSON.parse(TextFONTval);
         var ValueOff2=Constants.TxtSize;
        this.setState({SliderValue:ValueOff2});

  }


  }).done();

AsyncStorage.getItem("shaktiman1").then((TextFONTval1) => {

      if(JSON.parse(TextFONTval1) == null){

         var ValueOff1=Constants.TxtSize1;
        // this.setState({SliderValue:ValueOff1});
  }
  else{
    Constants.TxtSize1=JSON.parse(TextFONTval1);
         var ValueOff2=Constants.TxtSize1;
       // this.setState({SliderValue:ValueOff2});

  }


  }).done();


 AsyncStorage.getItem("shaktiman2").then((TextFONTval2) => {

      if(JSON.parse(TextFONTval2) == null){

         var ValueOff1=Constants.TxtSize2;
        // this.setState({SliderValue:ValueOff1});
  }
  else{
    Constants.TxtSize2=JSON.parse(TextFONTval2);
         var ValueOff2=Constants.TxtSize2;
       // this.setState({SliderValue:ValueOff2});

  }


  }).done();




AsyncStorage.getItem("areman").then((colorFONTval) => {
    if(JSON.parse(colorFONTval) == null){
        var ValueOffcolor=Constants.TxtSize;
        this.setState({Colorset:ValueOffcolor});
    }else{
        Constants.Color=JSON.parse(colorFONTval);
        var ValueOffcolor1=Constants.Color;
        this.setState({Colorset:ValueOffcolor1});
     //Alert.alert(ValueOffcolor1);
    }
    }).done();
  }

handleConnectionChange = (isConnected) => {
    Constants.statusofNet=isConnected;
}

   showInterstitial() {
    AdMobInterstitial.showAd().catch(error => {console.warn(error)
    });
  }

  rowSelected(item){
    Constants.readingheaderTitle= 'سورۃنمبر '+item.SurahNumber;
     var data=[];
     data.push(item);
     // compare 2 mean from BookMark Screen
     var compare=2;
     this.props.navigation.navigate('TafseerController',{
       data:data,
       compare:compare,
    });
}

  favRemoveConfirmation(item){
    Alert.alert(
    'Alert!',
    'Are you sure to remove this bookmark?',
    [
      {text: 'Cancel', onPress:() => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress:() => this.removeBookMark(item)
    },
    ],
    { cancelable: false }
     )
     }

    removeBookMark(item){
     var BookMark = item.BookMark;
     console.log('BookMark Before Pressed', BookMark, item.BookMark);
     if (BookMark) {
         BookMark=0
     }else{
         BookMark=1
     }
     console.log('BookMark After Pressed', BookMark, item.BookMark);
     // update array and refresh
     item.BookMark = BookMark;
         db.transaction((tx)=> {
            tx.executeSql(
                  'UPDATE ayah set BookMark=? WHERE SurahNumber=? AND AyahNumber=?',
                  [BookMark, item.SurahNumber, item.AyahNumber],
                  (tx, results) => {
                    console.log('Results',results.rowsAffected);
                    if(results.rowsAffected>0){
                      var index = this.state.bookArray.indexOf(item);
                      if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
                      this.state.bookArray.splice(index, 1);
                      }
                      console.log(this.state.bookArray);
                      this.setState({});
                    }else{
                      alert('Updation Failed');
                    }
                  }
                );
              });
    }

    gotodetaildevelper(){
    this.props.navigator.push({
    screen:'ContactusScreen',
    navigatorStyle:{
    navBarHidden:true,
    statusBarColor:Constants.statusbarclr,
    },});

}

settingScreen = () => {
 this.props.navigation.navigate('SettingScreen');
 }

backScreen = () => {
 this.props.navigation.pop();
 }

  render(){
    return(
      <View style={Constants.default ? {flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}:{flex:1,backgroundColor:'#1e1e1e',justifyContent:'center',}}>

      <View style={{ height: 50,backgroundColor:Constants.ThemeColor,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',marginBottom:0}}>

          <View style={{flex:0.1}}>
           <TouchableOpacity style={styles.buttonDimension}
              onPress={this.backScreen}>
            <Image style={{height:20 ,width:20}} source={backArrow}/>
           </TouchableOpacity>
          </View>

           <View style={styles.textView}>
              <Text style={styles.titleStyle}> بک مارک </Text>
           </View>

           <View style={styles.iconView}>
                <TouchableOpacity onPress={this.settingScreen}>
                 <Image style={{height:25,width:25}} source={settings}/>
                </TouchableOpacity>
           </View>

        </View>

           {/*
             <NavigationEvents
                         onDidFocus={()=>this.setState({})}
                         />
             <Header navigator={this.props.componentId} navigation={this.props.navigation} showMenu={false} showBackbutton={true}  showSetting={true} title='بک مارکس ' />
           */}

          <ScrollView style={{flex:0.9,paddingTop:3,borderTopWidth:0.5,borderTopColor:'grey'}}>
          {this.state.bookArray ?(
           <FlatList
              data={this.state.bookArray}
              extraData={this.state}
              renderItem={({item}) =>
               <View>
              {
            item.BookMark!==-1 ?
              <View style={{flex:1,paddingLeft:6,paddingBottom:3,paddingRight:6,paddingTop:3,justifyContent:'center',}}>
              <TouchableOpacity style={ Constants.default? {justifyContent:'center', elevation: 3,
              height:60,borderRadius:0,paddingLeft:4,shadowOpacity: 10,backgroundColor : 'white',shadowColor: 'black',}
              : {justifyContent:'center', elevation: 3,
              height:60,borderRadius:0,padding:4,shadowOpacity: 10,backgroundColor :Constants.ThemeColor,shadowColor: 'black',} }
              onPress={()=>this.rowSelected(item)}>
                  <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:0.8,justifyContent:'center'}}>
                  <Text numberOfLines={1} style={ Constants.default? {color:'#000000',paddingBottom:5,fontSize:20,fontFamily:Constants.ArabicFamily}
                     : {color:'#fffc4c',paddingBottom:5,fontSize:20,fontFamily:Constants.ArabicFamily} }>
                  {item.AyahTextQalam}</Text>
                  </View>

                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center',paddingLeft:10}}>
                    <TouchableOpacity style={{justifyContent:'center',flex:1,}}
                    onPress={()=> this.favRemoveConfirmation(item)}>
                    <Image style={{height:20,width:20}}  source={require('./Icons/close.png')}/>
                   </TouchableOpacity>
                  </View>
                  </View>
              </TouchableOpacity>
               </View>
               :null
             }
               </View>
            }
            />
            ):(
              this.state.activityShow ? (
             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <ActivityIndicator size="large" color="green" />
            </View>
             ):(
             <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
              <Text style={ Constants.default? {color:'black'}:{color:'white'}}>No BookMark Available!</Text>
             </View>
          ) )
          }
          </ScrollView>

          {Constants.statusofNet?
            <View style={{flex:0.1,marginTop:1,backgroundColor:'transparent',height:51,}}>
             </View>
           :
          <View style={{flex:0,backgroundColor:'transparent',}}>
          </View>
           }
      </View>
    );
  }
}

const styles=StyleSheet.create({
outerContainer:{
  flex:1,
  backgroundColor:'#e0ebeb', //Constants.ThemeColor,
},
instructions: {
    textAlign: 'center',
    color: 'black',
    fontSize: Constants.TxtSize,
  },
  buttonDimension:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:8,
    width:40,
    height:40,
  },
  textView:{
    flex:0.9,
    paddingLeft:10,
    alignItems:'center',
    justifyContent:'center',
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
})

module.exports=BookmarkScreen;
