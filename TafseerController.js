/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';

import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Dimensions,
  Slider,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Picker,
  BackHandler,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Share, {ShareSheet, Button} from 'react-native-share';
import Modal from 'react-native-modalbox';

// For Database
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mrqkandhelvi.sqlite', createFromLocation : 1});
// var BannerAdView=require('./BannerAdView');

import HTMLView from 'react-native-htmlview';

var settings=require('./Icons/setting.png');
// var Header=require('./Header');
var favIcon=require('./Icons/favicon.png');
var notfavorite=require('./Icons/notfavorite.png');
var favorite=require('./Icons/favorite.png');
var ShareIcon=require('./Icons/share.png');
var backArrow=require('./Icons/back.png');

var Constants=require('./Constants');
const window = Dimensions.get('window');

var concatData='';
var tufseerData='';
var tufseerHashiacheck='Hashia';
var Width=window.width/1.3;
var Height=window.height/1.9;

// var Loader=require('./Loader')

/* ## To Refresh Component When any change occur ## */
// import { NavigationEvents } from 'react-navigation';

class TafseerController extends Component{
  constructor(props, route, navigation){
  super(props);
  this.state={
  showProgress:true,
  // showLoader:false,
  dataArray:[],
  bookmarkData:[],
  modalVisible:false,
  visible:false,
  activeProgress:0,
  saveData:[],
  modalData:'',
  isOpen: false,
  isDisabled: false,
  swipeToClose: false,
  scrollEnabled:false,
  tafseerFont:22,
  gotoIndex:Constants.goTo,
  }
}

// refreshComponent(){
//   Alert.alert('did Refresh');
//   this.setState({});
// }

settingScreen = () => {
 this.props.navigation.navigate('SettingScreen');
 }

backScreen = () => {
 this.props.navigation.pop();
 }

render() {

  const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

  return (

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

         <View style={styles.textViewHeader}>
            <Text style={styles.titleStyle}> Ahsan Ul Bayan </Text>
         </View>

         <View style={styles.iconView}>
              <TouchableOpacity onPress={this.settingScreen}>
               <Image style={{height:25,width:25}} source={settings}/>
              </TouchableOpacity>
         </View>

      </View>

    {/*

      <Header navigator={this.props.navigation.state.params.componentId} navigation={this.props.navigation} showMenu={false} showBackbutton={true}  showSetting={true} title={Constants.readingheaderTitle} />

      <NavigationEvents
                  onDidFocus={()=>this.setState({})}
      />

      */}

      <ScrollView style={{flex:0.9,marginTop:1,borderTopWidth:0.5,borderTopColor:'grey'}}>
        {
          this.state.dataArray ? (
            <FlatList
            scrollEnable={false}
            horizontal={false}
            initialNumToRender={5}
            data={this.state.dataArray}
            extraData={this.state}
            keyExtractor = { (item, index) => item.key}
            ref={(ref) => { this.flatListRef = ref; }}
            renderItem={

            ({item}) =>
            <View style={{flex:1,marginBottom:0.5,backgroundColor:'transparent',borderRadius:1,elevation: 3,shadowOpacity: 10,shadowColor:'black'}}>
            {Constants.UrduShowHide?
            <View style={
              Constants.default ?
              {flex:1,
                backgroundColor:'white',
                borderRadius:1,
                borderBottomWidth:0.5,
                borderBottomColor:'grey',}
              :
              {flex:1,
                backgroundColor:Constants.ThemeColor,
                borderRadius:1,
                borderBottomWidth:0.5,
                borderBottomColor:'grey',}}>

            <Text style={ Constants.default ?
              {color:Constants.Color1,
                textAlign:'right',
                padding:10,
                fontFamily:Constants.ArabicFamily,
                fontSize:Constants.TxtSize1}
                :
                {color:'#fffc4c',
                textAlign:'right',
                padding:10,
                fontFamily:Constants.ArabicFamily,
                fontSize:Constants.TxtSize1}
              }>
            {item.AyahTextQalam}</Text>
            </View>
            :null
            }

            {
          Constants.EnglishShowHide?
          <View style={
            Constants.default ?
            {flex:1,
            backgroundColor:'white',
            borderRadius:1,
            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            }
            :
            {flex:1,
            backgroundColor:Constants.ThemeColor,
            borderRadius:1,
            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            }
            }>

            <HTMLView style={
              {flex:1,
              flexDirection:'row-reverse',
              flexWrap:'wrap',
              }}
            value={'<p>' + item.Words.trim() + '</p>'}
            addLineBreaks={false}
            textComponentProps={{textAlign:'right'}}

      stylesheet={
        {a: {
       fontWeight: '300',
       color: '#FF3366',
        },
         p: {
           textAlign: "right",
           fontSize:20,
           color:'black',
           fontFamily:'UrduTypesetting',
           padding:7,
           marginTop: 5,
           marginBottom: 1,
        },
        com: {
           textAlign: "right",
           lineHeight:20,
           fontSize:16,
           color:'black',
           fontFamily:'UrduTypesetting',
           padding:5,
        },
        b:{
          fontSize:20,
          color:'#009900',
          fontFamily:'UrduTypesetting',
          textAlign:'center',
        },
        ar:{
          fontSize:Constants.TxtSize2,
          color: Constants.default? '#720404':'#fffc4c',
          fontFamily:Constants.EnglishFamily,
          textAlign: "right",

        },
        ur:{
          fontSize:Constants.TxtSize2,
          fontFamily:Constants.EnglishFamily,
          color: Constants.default? '#083868':'white',
          textAlign: "right",
        },
      }}

    />

       </View>
       :null
     }
       {Constants.ArabicShowHide?
       <View style=
       { Constants.default?
         {flex:1,
           backgroundColor:'white',
           elevation: 3,
           shadowOpacity: 10,
           shadowColor:'black',
           borderBottomWidth:0.5,
           borderBottomColor:'grey',
         }
         :
         {flex:1,
           backgroundColor:Constants.ThemeColor,
           elevation: 3,
           shadowOpacity: 10,
           shadowColor:'black',
           borderBottomWidth:0.5,
           borderBottomColor:'grey',
         }
         }>

      <TouchableOpacity style={{}} onPress={()=> this.rowSelected(item)}>
       <Text style={ Constants.default?
         {color:Constants.Color,
           textAlign:'right',
           padding:10,
           fontFamily:Constants.Family,
           fontSize:Constants.TxtSize,
         }
         :
         {color:'white',
         textAlign:'right',
         padding:10,
         fontFamily:Constants.Family,
         fontSize:Constants.TxtSize,
         }
        }>
        {item.Translation}</Text>
        </TouchableOpacity>
        </View>
        :null
        }
       <View style={ Constants.default ? {flex:1,flexDirection:'row',backgroundColor:'#287303',
         height:40,borderBottomWidth:0.5,borderBottomColor:'white',}
         : {flex:1,flexDirection:'row',backgroundColor:Constants.ThemeColor,borderBottomWidth:0.5,borderBottomColor:'grey',} }>
       <View style={{flex:3.33,justifyContent:'center',alignItems:'center'}}>
       <TouchableOpacity style={{background:'white',height:40,justifyContent:'center',alignItems:'center'}}
       onPress={()=>this.bookMarkSelected(item)}
       >
       {item.BookMark?
         <Image style={{height:20 ,width:20}} source={favIcon}/>
         :
         <Image style={{height:20 ,width:20}} source={notfavorite}/>
       }
      </TouchableOpacity>
      </View>

      <View style= { Constants.default?
      {alignItems:'center',
      justifyContent:'center',
      flex:3.33,
      borderLeftWidth:0.5,
      borderRightWidth:0.5,
      borderRightColor:'white',
      borderLeftColor:'white'
      }
      :
      {alignItems:'center',
      justifyContent:'center',
      flex:3.33,
      borderLeftWidth:0.5,
      borderRightWidth:0.5,
      borderRightColor:'grey',
      borderLeftColor:'grey'
      }
      }>

      <TouchableOpacity onPress={()=>this.rowSelected(item)}>
       <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
       <Text style={ Constants.default ? {color:'white',textAlign:'center',fontFamily:'10MucZeit-Medium',fontSize:15}
       : {color:'white',textAlign:'center',fontFamily:'10MucZeit-Medium',fontSize:15}}>
       Verse:{item.AyahNumber}
       </Text>
        </View>

       <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
       <Text style={{color:'white',textAlign:'center',paddingBottom:1,fontFamily:'10MucZeit-Medium',
        fontSize:15}}>
        Ruku:{item.Ruku}
        </Text>
      </View>

      </TouchableOpacity>
        </View>

       <View style={{flex:3.33,justifyContent:'center',alignItems:'center'}}>
       <TouchableOpacity style={{background:'white',height:40,justifyContent:'center',alignItems:'center'}}
       onPress={()=>this.shareFunction(item)}
       >
         <Image style={{height:20 ,width:20}} source={ShareIcon}/>
       </TouchableOpacity>

        </View>
       </View>
     </View>
  }
      />

    )
    :
    (

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large" color="#2B8888" />
      </View>

      )
    }
    </ScrollView>

         {
        Constants.statusofNet?
          <View style={{flex:0.1,marginTop:1,backgroundColor:'transparent',height:51,}}>
           </View>
         :
          <View style={{flex:0,height:0.1,backgroundColor:'transparent',}}>
          </View>
         }

          <View style={styles.wrapper}>
            <Modal  style={[
              Constants.default?
              {borderRadius:5,width:'80%',flex:0.8,backgroundColor:'white',borderWidth:1,borderColor:'black'}
              :
              {borderRadius:5,flex:0.8,width:'80%',backgroundColor:'#010416',borderWidth:1,borderColor:'grey'}
              ]
              }
              ref={"modal1"}
              swipeToClose={this.state.swipeToClose}
              onClosed={this.onClose}
              onOpened={this.onOpen}
              onClosingState={this.onClosingState}>

        <ScrollView style={{flex:0.8}}>
          <View style={{flex:1,alignSelf:'stretch'}}>

           <HTMLView
            value={this.state.modalData}
            addLineBreaks={false}
            textComponentProps={{textAlign:'right'}}

    stylesheet={{
       p: {
         textAlign: "right",
         fontSize:this.state.tafseerFont,
         color: Constants.default? 'black':'white',
         fontFamily:Constants.Family,
         padding:7,
         marginTop:1,
         marginBottom: 2,
      },
      b:{
        fontSize:22,
        color: Constants.default? '#009900':'#fffc4c',
        fontFamily:Constants.Family,
        textAlign:'center',
      },
    }
  }
      />
        </View>
        </ScrollView>

     <View style={{height:40,backgroundColor:'transparent',flexDirection:'row',alignItems:'space-between'}}>
        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.decrementFont()} style={
          {height:38,
          width:100,
          justifyContent:'center',
          backgroundColor:"transparent",
          alignItems:'center',
          justifyContent:'center',}
        }>
        <Text style={
          Constants.default?
          {color:'green',
          fontSize:40,
          padding:2}
          :
          {color:'#fffc4c',
          fontSize:40}
        }>
         -
        </Text>

        </TouchableOpacity>
        </View>
        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.incrementFont()} style={{height:38,width:100,justifyContent:'center',backgroundColor:"transparent",alignItems:'center',justifyContent:'center',}}>
        <Text style={ Constants.default? {color:'green',fontSize:34,padding:2} : {color:'#fffc4c',fontSize:34}}> + </Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
</View>
  );
}

  fetchDataFromDB(){
    var arrayDB = [];
    db.transaction(tx => {
           tx.executeSql(
             'SELECT * FROM ayah WHERE surahNumber = ?',[this.props.route.params.data.surah],
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
                  //  console.log(objforDB);
                 }
                 console.log('0 index is = ', arrayDB[0].BookMark);
                 this.setState({
                  dataArray:arrayDB,
                  showProgress:true,
                 });
               }else{
                 alert('No user found');
               }
             }
           );
         });
  }

  componentDidMount(){

    // console.log("TafseerController Compare Data is = ",this.props.navigation.state.params.compare);
    console.log("TafseerController Compare Data is = ",this.props.route.params.compare);
    console.log("TafseerController Compare Data is = ",this.props.route.params.data);

    /* ## Compare 1 mean you came from Main Screen (HomeViewController) and
          Compare 2 mean you came from BookMark Screen ## */

    if (this.props.route.params.compare==1) {
      /* ## In Case you came from Main Screen (HomeViewController)
      Data will be fetch from Database ## */
      // Data Base
      this.fetchDataFromDB();
    }else{
      /* ## Data will be handled by using this.state.dataArray ## */
      // console.log("TafseerController Compare Data is = ",this.props.navigation.state.params.compare);
      // console.log("TafseerController Data is = ",this.props.navigation.state.params.data);
        this.setState({
          dataArray:this.props.route.params.data
        });
    }
  }

  UNSAFE_componentWillMount(){
    /* ## Company asked to avoid willMount Method ## */
  }

  _handleConnectivityChange(status) {
    console.log('*********_handleConnectivityChange: Network Connectivity status *******: ' + status);
  }

  bookMarkSelected(item){
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
  this.setState({});

      db.transaction((tx)=> {
         tx.executeSql(
               'UPDATE ayah set BookMark=? WHERE SurahNumber=? AND AyahNumber=?',
               [BookMark, item.SurahNumber, item.AyahNumber],
               (tx, results) => {
                 console.log('Results',results.rowsAffected);
                 if(results.rowsAffected>0){
                  //  Alert.alert( 'Success', 'User updated successfully',
                  //    [
                  //      {text: 'Ok', onPress: () => this.props.navigation.navigate('HomeScreen')},
                  //    ],
                  //    { cancelable: false }
                  //  );
                 }else{
                   alert('Updation Failed');
                 }
               }
             );
           });

}

shareFunction(item){
if (Platform.OS === 'ios') {
//   Share.open( {
//   title: "Tufheem-ul-Quran",
//   message:'آیت: '+item.ayahText+'\n'+'\n'+'اردوترجمۂ: '+item.translationUrdu+'\n'+'\n',
//   //url: "https://play.google.com/store/apps/details?id=com.attech.hadithqudsi",
//   subject: "Share Link" //  for email
// });
}else{
 var translation=item.translationUrdu.replace('r-n','');
  Share.open( {
  title: "Ma'ariful Qur'an",
  message:'سورۃ:'+Constants.readingheaderTitle+'\n'+'آیت نمبر:'+item.ayahNumber+'\n'+'\n'+'آیت: '+item.ayahText+'\n'+'\n'+'اردوترجمۂ: '+translation+'\n'+'\n',
  //url: "https://play.google.com/store/apps/details?id=com.attech.hadithqudsi",
  subject: "Share Link" //  for email
  });
  }
}

rowSelected(item){
  if (item.Tafseer.length>10) {
    var newVar='<p>' + item.Tafseer + '</p>';
    this.setState({visible:true,modalData:newVar});
    this.refs.modal1.open();
  }else{
    ToastAndroid.showWithGravity(
      'No Tufseer Available Against this Ayah!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  }
}

setModalVisible() {
  this.setState({visible:false});
}

onClose() {
  console.log('Modal just closed');
}

onOpen() {
  console.log('Modal just opened');
}

onClosingState(state) {
  console.log('the open/close of the swipeToClose just changed');
}

closeModal(){
  this.refs.modal1.close();
}

incrementFont(){
    var font=this.state.tafseerFont;
     if (font<=40) {
       font=font+2;
      this.setState({tafseerFont:font});
     }
}

decrementFont(){
     var font=this.state.tafseerFont;
     if (font>=14) {
       font=font-2;
      this.setState({tafseerFont:font});
     }
}

scrollToIndex(key){
  this.flatListRef.scrollToIndex({animated: true,index:15});
  }
}

const htmlstyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
   p: {
     textAlign: "right",
     lineHeight:25,
     fontSize:20,
     color:'black',
     fontFamily:'UrduTypesetting',
     padding:7,
     marginTop: 5,
    //  paddingTop:-40,
     marginBottom: 1,
  },
  com: {
     textAlign: "right",
     lineHeight:20,
     fontSize:16,
     color:'black',
     fontFamily:'UrduTypesetting',
     //color:'#606060',
     padding:5,
    //  paddingTop:-40,
    // marginBottom: 3,
  },
  b:{
    fontSize:20,
    color:'#009900',
    fontFamily:'UrduTypesetting',
    textAlign:'center',
  },
  ar:{
    fontSize:Constants.TxtSize2,
    lineHeight:16,
    color:'#720404',//'#009900',
    fontFamily:Constants.EnglishFamily,
    textAlign: "right",
   // backgroundColor:'grey',
  },
  ur:{
    fontSize:Constants.TxtSize2,
    lineHeight:16,
    fontFamily:Constants.EnglishFamily,
    color:'#083868', //'#b30059',
    textAlign: "right",
    //backgroundColor:'green',
  },
});

const styles=StyleSheet.create({
  ayahDefault:{flex:1,backgroundColor:'#005757',borderRadius:1,},
  ayah:{flex:1,backgroundColor:'grey',borderRadius:1,},

  ayaharabicDefault:{color:Constants.Color1,textAlign:'right',padding:10,fontFamily:Constants.ArabicFamily,fontSize:Constants.TxtSize1},
  ayaharabic:{color:'#fffc4c',textAlign:'right',padding:10,fontFamily:Constants.ArabicFamily,fontSize:Constants.TxtSize1},

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
   wrapper: {
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    width: window.width,
   // margin: "20%",
   // marginRight:'10%',
   // marginLeft:'10%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom:0,
  },

  modal: {
    flex:0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal4: {
    height:'80%',width:'80%',backgroundColor:'grey',
  },
    outerContainer:{
      flex:1,
      // backgroundColor:'white',
      backgroundColor:'#F9FBFF',
    },
    textView:{
      flex:1,
      // backgroundColor:'green',
      paddingLeft:20,
      paddingRight:20,
      paddingTop:2,
      // marginTop:20,
    },
    textStyle6:{
      color:'blue',
      fontFamily:'Jameel Noori Nastaleeq',
      fontSize:26,
      textAlign:'center',
    },
    textStyle:{
      textAlign:'right',
      paddingTop:20,
      fontFamily:'Jameel Noori Nastaleeq',
      color:'#606060',
      fontSize:23,
       fontFamily:'Jameel Noori Nastaleeq',
    },
    innerView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    iconShare:{
      width:20,
      height:20,
      marginRight:10,
    },
    textViewHeader:{
      flex:0.9,
      paddingLeft:10,
      alignItems:'center',
      justifyContent:'center',
     },
    buttonDimension:{
      alignItems:'center',
      justifyContent:'center',
      marginRight:8,
      width:40,
      height:40,
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
});

export default TafseerController;

// const register= StyleSheet.create({
//
//   background: {
//     flex: 1,backgroundColor:'#eeeeee',
//   },
//   tax1: {
//     padding: 8,
//     marginTop: 8
//   },
//   textinputcontainer: {
//     flex: 0.1,
//   },
//   dropdowncontainer: {
//     flex: 0.1,
//   },
//   icon: {
//     flex: 0.1,
//     flexDirection: 'row',
//     backgroundColor: 'red',
//     alignItems: 'flex-end',
//   },
//  dropicon: {
//   flex:0.1,
//   flexDirection: 'row',
//  },
//   inputView: {
//     flex: 0.1,
//     backgroundColor: 'white'
//   },
//  piccontainer: {
//   flex: 0.3,
//   backgroundColor: '#007AFF',
//   justifyContent: 'center',
//   alignItems: 'center',
//  },
//  picicon: {
//   borderRadius: 50,
//   borderWidth: 2,
//   borderColor:'white',
//  },
//  switchcontainer: {
//   flex: 0.2,
//   backgroundColor: 'white',
//   justifyContent: 'center',
//   alignItems: 'center',
//  },
//  switchbutton: {
//   flex: 0.3,
//   flexDirection: 'row'
//  },
//  titleStyle:{
//   fontWeight:'bold',
//   color:  'white',    //'#2A3990',
//   fontSize:18,
//   fontFamily:'UrduTypesetting',
//  },
// iconView:{
//   flex:0.1,
//   paddingRight:5,
//  },
// textViewHeader:{
//   flex:0.9,
//   paddingLeft:10,
//   alignItems:'center',
//   justifyContent:'center',
//  },
//
//
//      buttonDimension:{
//        alignItems:'center',
//        justifyContent:'center',
//        marginRight:8,
//        width:40,
//        height:40,
//      },
//      iconMenuDimension:{
//        width:25,
//        height:20,
//      },
//      buttonNotificationDimention:{
//        alignItems:'center',
//        justifyContent:'center',
//        marginRight:10,
//        width:40,
//        height:40,
//      },
//      iconNotifyDimension:{
//         width:30,
//         height:25,
//         marginRight:15,
//         resizeMode: 'contain',
//      },
// });

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// import { openDatabase } from 'react-native-sqlite-storage';
// // var db = openDatabase({ name: 'UserDatabase.db' });
// var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
//
// export default class App extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state={
//       user_name:'akhzar',
//       user_contact:'03219434203',
//       user_address:'Alhafeez',
//       input_user_id:2,
//     };
//
//     // db.transaction(function(txn) {
//     //   txn.executeSql(
//     //     "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_user'",
//     //     [],
//     //     function(tx, res) {
//     //       console.log('item:', res.rows.length);
//     //       if (res.rows.length == 0) {
//     //         txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
//     //         txn.executeSql(
//     //           'CREATE TABLE IF NOT EXISTS tbl_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
//     //           []
//     //         );
//     //       }
//     //     }
//     //   );
//     // });
//
//   }
//
//   // constructor(props) {
//   //     super(props);
//   //     db.transaction(function(txn) {
//   //       txn.executeSql(
//   //         "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_user'",
//   //         [],
//   //         function(tx, res) {
//   //           Alert.alert('item is = ' + res.rows.length);
//   //           console.log('item:', res.rows.length);
//   //           if (res.rows.length == 0) {
//   //             txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
//   //             txn.executeSql(
//   //               'CREATE TABLE IF NOT EXISTS tbl_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
//   //               []
//   //             );
//   //           }
//   //         }
//   //       );
//   //     });
//   //   }
//
//   InsertDBAction=()=>{
//
//     console.log('insertDB Called');
//     if (this.state.user_name) {
//      if (this.state.user_contact) {
//        if (this.state.user_address) {
//
//          db.transaction((tx)=> {
//
//            // Loop would be here in case of many values
//
//            tx.executeSql(
//              'INSERT INTO tbl_user (user_id, user_name, user_contact, user_address) VALUES (?,?,?,?)',
//              [this.state.input_user_id, this.state.user_name, this.state.user_contact, this.state.user_address],
//              (tx, results) => {
//                console.log('Insert Results',results.rowsAffected);
//                if(results.rowsAffected>0){
//                  Alert.alert( 'Success', 'User updated successfully',
//                    [
//                      {text: 'Ok', onPress: () => that.props.navigation.navigate('HomeScreen')},
//                    ],
//                    { cancelable: false }
//                  );
//                }else{
//                  alert('Updation Failed');
//                }
//              }
//            );
//
//          });
//
//         //  db.transaction(function(tx) {
//         //    tx.executeSql(
//         //      'INSERT INTO tbl_user (user_id, user_name, user_contact, user_address) VALUES (?,?,?,?)',
//         //      [this.state.input_user_id, this.state.user_name, this.state.user_contact, this.state.user_address],
//         //      (tx, results) => {
//         //        console.log('Results', results.rowsAffected);
//         //        if (results.rowsAffected > 0) {
//         //          Alert.alert(
//         //            'Success',
//         //            'You are Registered Successfully',
//         //            [
//         //              {
//         //                text: 'Ok',
//         //                onPress: () =>
//         //                  that.props.navigation.navigate('HomeScreen'),
//         //              },
//         //            ],
//         //            { cancelable: false }
//         //          );
//         //        } else {
//         //          alert('Registration Failed');
//         //        }
//         //      }
//         //    );
//         //  });
//
//        } else {
//          alert('Please fill Address');
//        }
//      } else {
//        alert('Please fill Contact Number');
//      }
//    } else {
//      alert('Please fill Name');
//    }
// }
//
// SelectDBAction=()=>{
//   console.log('Select DB is Called');
//
//   db.transaction(tx => {
//        tx.executeSql(
//          'SELECT * FROM tbl_user',[],
//          (tx, results) => {
//            var len = results.rows.length;
//            console.log('select * results are = ',len);
//            if (len > 0) {
//
//              var temp = [];
//              for (let i = 0; i < results.rows.length; ++i) {
//                temp.push(results.rows.item(i));
//                console.log(results.rows.item(i).user_name);
//              }
//
//              this.setState({
//               user_name:results.rows.item(0).user_name,
//              });
//              this.setState({
//               user_contact:results.rows.item(0).user_contact,
//              });
//              this.setState({
//               user_address:results.rows.item(0).user_address,
//              });
//
//            }else{
//              alert('No user found');
//             //  this.setState({
//             //    user_name:'',
//             //    user_contact:'',
//             //    user_address:'',
//             //  });
//            }
//          }
//        );
//      });
//
// }
//
// UpdateDBAction=()=>{
//   console.log('Select DB is Called');
//
//   this.setState({
//     user_name:'NTU',
//     user_contact:'1122',
//     user_address:'Updated Address',
//     input_user_id:1,
//   })
//
//   if (this.state.user_name){
//      if (this.state.user_contact){
//        if (this.state.user_address){
//          db.transaction((tx)=> {
//            tx.executeSql(
//              'UPDATE tbl_user set user_name=?, user_contact=? , user_address=? where user_id=?',
//              [this.state.user_name, this.state.user_contact, this.state.user_address, this.state.input_user_id],
//              (tx, results) => {
//                console.log('Results',results.rowsAffected);
//                if(results.rowsAffected>0){
//                  Alert.alert( 'Success', 'User updated successfully',
//                    [
//                      {text: 'Ok', onPress: () => that.props.navigation.navigate('HomeScreen')},
//                    ],
//                    { cancelable: false }
//                  );
//                }else{
//                  alert('Updation Failed');
//                }
//              }
//            );
//          });
//        }else{
//          alert('Please fill Address');
//        }
//      }else{
//        alert('Please fill Contact Number');
//      }
//    }else{
//      alert('Please fill Name');
//    }
// }
//
// DeleteRowDBAction=()=>{
//
// db.transaction(tx => {
//     tx.executeSql(
//       'DELETE FROM  tbl_user where user_id=3',
//       [],
//       (tx, results) => {
//         console.log('Results', results.rowsAffected);
//         if (results.rowsAffected > 0) {
//           Alert.alert(
//             'Success',
//             'User deleted successfully',
//             [
//               {
//                 text: 'Ok',
//                 onPress: () => that.props.navigation.navigate('HomeScreen'),
//               },
//             ],
//             { cancelable: false }
//           );
//         } else {
//           alert('Please insert a valid User Id');
//         }
//       }
//     );
//   });
// }
//
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'white',
//           flexDirection: 'column',
//         }}>
//
//         <Text> In the name of Allah </Text>
//
//         <TouchableOpacity onPress={()=>this.InsertDBAction()} style={{marginLeft:40,marginRight:40,marginBottom:20,marginTop:40,backgroundColor:'#E8590A',height:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
//           <Text> Insert into Database </Text>
//         </TouchableOpacity>
//
//         <TouchableOpacity onPress={()=>this.SelectDBAction()} style={{marginLeft:40,marginRight:40,marginBottom:20,marginTop:40,backgroundColor:'#E8590A',height:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
//           <Text> Select DB Action </Text>
//         </TouchableOpacity>
//
//         <TouchableOpacity onPress={()=>this.UpdateDBAction()} style={{marginLeft:40,marginRight:40,marginBottom:20,marginTop:40,backgroundColor:'#E8590A',height:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
//           <Text> Update DB Action </Text>
//         </TouchableOpacity>
//
//         <TouchableOpacity onPress={()=>this.DeleteRowDBAction()} style={{marginLeft:40,marginRight:40,marginBottom:20,marginTop:40,backgroundColor:'#E8590A',height:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
//           <Text> Delete DB Action </Text>
//         </TouchableOpacity>
//
//       </View>
//     );
//   }
//
// }
