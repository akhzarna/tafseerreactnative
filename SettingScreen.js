
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NetInfo,
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
  Picker
} from 'react-native';

var options=[];
// var Header=require('./Header');

var Constants=require('./Constants');
// import StringsOfLanguage from './StringsOfLanguage';
var {DEVICE_HEIGHT, DEVICE_WIDTH} = Dimensions.get('window');
var AdCount=0;

var backArrow=require('./Icons/back.png');

class SettingScreen extends Component{
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
    var languageColor;
    var languageColor1;
    var languageColor2;

  if(Constants.Color=='#000000'){
    languageColor="0";
    }else if (Constants.Color=='#972828') {
      languageColor="1";
      }else if (Constants.Color=='#634631') {
        languageColor="2";
        }else if (Constants.Color=='#2c076a') {
          languageColor="3";
          }else if (Constants.Color=='#064c44') {
            languageColor="4";
            }else if (Constants.Color=='#303f9f') {
              languageColor="5";
              }else if (Constants.Color=='#00796b') {
                languageColor="6";
                }else if (Constants.Color=='#441f03') {
                  languageColor="7";
                              }else if (Constants.Color=='#42011f') {
                  languageColor="8";
    }

    if(Constants.Color1=='#ffffff'){
    languageColor1="0";
    }else if (Constants.Color1=='#972828') {
      languageColor1="1";
      }else if (Constants.Color1=='#634631') {
        languageColor1="2";
        }else if (Constants.Color1=='#2c076a') {
          languageColor1="3";
          }else if (Constants.Color1=='#064c44') {
            languageColor1="4";
            }else if (Constants.Color1=='#303f9f') {
              languageColor1="5";
              }else if (Constants.Color1=='#00796b') {
                languageColor1="6";
                }else if (Constants.Color1=='#441f03') {
                  languageColor1="7";
                     }else if (Constants.Color1=='#42011f') {
                        languageColor1="8";

    }


    if(Constants.Color2=='#000000'){
    languageColor2="0";
    }else if (Constants.Color2=='#972828') {
      languageColor2="1";
      }else if (Constants.Color2=='#634631') {
        languageColor2="2";
        }else if (Constants.Color2=='#2c076a') {
          languageColor2="3";
          }else if (Constants.Color2=='#064c44') {
            languageColor2="4";
            }else if (Constants.Color2=='#303f9f') {
              languageColor2="5";
              }else if (Constants.Color2=='#00796b') {
                languageColor2="6";
                }else if (Constants.Color2=='#441f03') {
                  languageColor2="7";
                     }else if (Constants.Color2=='#42011f') {
                        languageColor2="8";

    }




var themeColr;
    if(Constants.ThemeColor=='#287303'){
    themeColr="0";
    }else if (Constants.ThemeColor=='#282828') {
      themeColr="1";
      }else if (Constants.ThemeColor=='#000000') {
        themeColr="2";
        }else if (Constants.ThemeColor=='#000000') {
          themeColr="3";
          }else if (Constants.ThemeColor=='#d87903') {
            themeColr="4";
            }else if (Constants.ThemeColor=='#161639') {
              themeColr="5";
              }else if (Constants.ThemeColor=='#00796b') {
                themeColr="6";
                }else if (Constants.ThemeColor=='#441f03') {
                  themeColr="7";
                     }else if (Constants.ThemeColor=='#42011f') {
                        themeColr="8";

    }


    var familyoftext;
 if(Constants.Family=='UrduTypesetting'){
    familyoftext="0";
    }else  {
      familyoftext="1";
      //Alert.alert("hmm");
     }

      var familyoftextarabic;
 if(Constants.ArabicFamily=='_PDMS_Saleem_QuranFont'){
    familyoftextarabic="0";
    }else  {
      familyoftextarabic="1";
      //Alert.alert("hmm");
     }

       var familyoftextenglish;
 if(Constants.EnglishFamily=='UrduTypesetting'){
    familyoftextenglish="0";
    //Alert.alert("a");
    }else  {
      familyoftextenglish="1";
      //Alert.alert("hmm");
      //Alert.alert("b");
     }




 var showhideenglish;
 if(Constants.EnglishShowHide==true){
    showhideenglish="0";
    //Alert.alert("a");
    }else  {
      showhideenglish="1";
      //Alert.alert("hmm");
      //Alert.alert("b");
     }


      var showhideurdu;
 if(Constants.UrduShowHide==true){
    showhideurdu="0";
    //Alert.alert("a");
    }else  {
      showhideurdu="1";
      //Alert.alert("hmm");
      //Alert.alert("b");
     }


      var showhidearbi;
 if(Constants.ArabicShowHide){
    showhidearbi="0";

   // console.log("a",Constants.ArabicShowHide);

    }else  {
      showhidearbi="1";
      //Alert.alert("hmm");
      //Alert.alert("b");
     }

      var lyoutt;
 if(Constants.layout==true){
    lyoutt="0";
    //Alert.alert("a");
    }else  {
      lyoutt="1";
      //Alert.alert("hmm");
      //Alert.alert("b");
     }



   var ArrayOfTextSize=[];
   for(var i=12;i<=50;i++){

     ArrayOfTextSize.push(i);

    options=ArrayOfTextSize;
   // console.log(options);
   }
   var a;

  //   if(StringsOfLanguage.getLanguage('')=='en'){
  //     a="0";
  //     Constants.EnglishCheck=false;
  //     // this.setState({Languagepicker:a});
  //   }
  //   else if(StringsOfLanguage.getLanguage('')=='fr'){
  //     a="1";
  //     Constants.EnglishCheck=false;
  //     // this.setState({Languagepicker:a});
  // }
  // else if(StringsOfLanguage.getLanguage('')=='ar'){
  //   a="2";
  //   Constants.EnglishCheck=true;
  // // this.setState({Languagepicker:a});
  // }
  // else if(StringsOfLanguage.getLanguage('')=='ur'){
  //   a="3";
  //   Constants.EnglishCheck=true;
  // // this.setState({Languagepicker:a});
  // }

    this.state={
      Languagepicker:a,
      ArrayOfTextSizeOrignal:ArrayOfTextSize,
      language:languageColor,
      SliderValue :0,
      language1:languageColor1,
      language2:languageColor2,
      SliderValue1 :0,
      SliderValue2:0,

      familyValue:familyoftext,
      familyValue1:familyoftextarabic,
      familyValue2:familyoftextenglish,
      themeColor:themeColr,
      ListSlide:lyoutt,
      showhide:showhidearbi,
      showhide1:showhideurdu,
      showhide2:showhideenglish,
    }
  }

componentDidMount() {

//console.log('before value1',Constants.TxtSize);

AsyncStorage.getItem("shaktiman").then((TextFONTval) => {

      if(JSON.parse(TextFONTval) == null){
         var ValueOff1=Constants.TxtSize;
        // console.log('before value2',ValueOff1);
         this.setState({SliderValue:ValueOff1});
        // console.log('before value3',SliderValue);
      }else{
        Constants.TxtSize=JSON.parse(TextFONTval);
        var ValueOff2=Constants.TxtSize;
        this.setState({SliderValue:ValueOff2});
        // console.log('before value4',Constants.TxtSize);
      }
  }).done();


AsyncStorage.getItem("shaktiman1").then((TextFONTval1) => {

      if(JSON.parse(TextFONTval1) == null){
         var ValueOff1=Constants.TxtSize1;
        // console.log('before value2',ValueOff1);
         this.setState({SliderValue1:ValueOff1});
        // console.log('before value3',SliderValue);
      }else{
        Constants.TxtSize1=JSON.parse(TextFONTval1);
        var ValueOff2=Constants.TxtSize1;
        this.setState({SliderValue1:ValueOff2});
   // console.log('before value4',Constants.TxtSize);
    }
  }).done();

AsyncStorage.getItem("shaktiman2").then((TextFONTval2) => {

      if(JSON.parse(TextFONTval2) == null){

         var ValueOff1=Constants.TxtSize2;
         //console.log('before value2',ValueOff1);
         this.setState({SliderValue2:ValueOff1});
        // console.log('before value3',SliderValue);
  }
  else{
    Constants.TxtSize1=JSON.parse(TextFONTval2);
         var ValueOff2=Constants.TxtSize2;
        this.setState({SliderValue2:ValueOff2});
   // console.log('before value4',Constants.TxtSize);
  }


  }).done();


/*AsyncStorage.getItem("areman").then((colorFONTval) => {

      if(JSON.parse(colorFONTval) == null){


         var valueSo='1',
        // console.log('before value2',ValueOff1);
         this.setState({language:valueSo});

  }
  else{
    Constants.TxtSize=JSON.parse(colorFONTval);
         var valueSo='2';
        this.setState({language:valueSo});
   // console.log('before value4',Constants.TxtSize);
  }


  }).done();*/

  }

TextFontFuntion(ChangedValue){




             var TextFONTval=ChangedValue;
                var TextFONTval=JSON.stringify(TextFONTval);
                AsyncStorage.setItem('shaktiman', TextFONTval);
              // console.log("code2",langg);
              Constants.TxtSize=ChangedValue;
           this.setState({ SliderValue: ChangedValue })
}

TextFontFuntion1(ChangedValue){




             var TextFONTval=ChangedValue;
                var TextFONTval1=JSON.stringify(TextFONTval);
                AsyncStorage.setItem('shaktiman1', TextFONTval1);
              // console.log("code2",langg);
              Constants.TxtSize1=ChangedValue;
           this.setState({ SliderValue1: ChangedValue })
}



TextFontFuntion2(ChangedValue){
            var TextFONTval=ChangedValue;
            var TextFONTval2=JSON.stringify(TextFONTval);
            AsyncStorage.setItem('shaktiman2', TextFONTval2);
            // console.log("code2",langg);
            Constants.TxtSize2=ChangedValue;
            this.setState({ SliderValue2: ChangedValue })
}

Adeel(colorFONTval){
   var colorFONTvaltrue=colorFONTval;
   var colorFONTval=JSON.stringify(colorFONTval);
   AsyncStorage.setItem('areman', colorFONTval);
   // console.log("code2",langg);
   Constants.Color=colorFONTvaltrue;

}

Adeel1(colorFONTval){
   var colorFONTvaltrue=colorFONTval;

                var colorFONTval1=JSON.stringify(colorFONTval);
                AsyncStorage.setItem('areman1', colorFONTval1);
              // console.log("code2",langg);
              Constants.Color1=colorFONTvaltrue;

}

Adeel2(colorFONTval){
   var colorFONTvaltrue=colorFONTval;

                var colorFONTval2=JSON.stringify(colorFONTval);
                AsyncStorage.setItem('areman2', colorFONTval2);
              // console.log("code2",langg);
              Constants.Color2=colorFONTvaltrue;

}

themeclr(colorFONTval){
var colorFONTvaltrue=colorFONTval;

                var colorFONTval=JSON.stringify(colorFONTval);
                AsyncStorage.setItem('theme', colorFONTval);
              // console.log("code2",langg);
              Constants.ThemeColor=colorFONTvaltrue;




}

statusclr(colorstatus){
var colorFONTvaltrue=colorstatus;
              // console.log("Status bar before Color",Constants.statusbarclr);
                var colorFONTval=JSON.stringify(colorstatus);
                AsyncStorage.setItem('ststsclr', colorFONTval);
              // console.log("code2",langg);
              Constants.statusbarclr=colorFONTvaltrue;
             // console.log("Status bar Color",Constants.statusbarclr);


}


ColorFontFuntion(ChangedValue){

 this.setState({language: ChangedValue})
     if (ChangedValue==0) {

             var colorFONTval='#000000';
             this.Adeel(colorFONTval);
            }

            else if (ChangedValue==1) {

             var colorFONTval='#972828';
             this.Adeel(colorFONTval);
            }else if (ChangedValue==2) {

             var colorFONTval='#634631';
              this.Adeel(colorFONTval);
              }else if (ChangedValue==3) {

            var colorFONTval='#2c076a';
               this.Adeel(colorFONTval);
               }else if (ChangedValue==4) {

             var colorFONTval='#064c44';
             this.Adeel(colorFONTval);
               }else if (ChangedValue==5) {

             var colorFONTval='#303f9f';
               this.Adeel(colorFONTval);
               }else if (ChangedValue==6) {

             var colorFONTval='#00796b';
              this.Adeel(colorFONTval);
               }else if (ChangedValue==7) {

             var colorFONTval='#441f03';
             this.Adeel(colorFONTval);

         }else if (ChangedValue==8) {

             var colorFONTval='#42011f';
             this.Adeel(colorFONTval);
            }
           /* else {
              this.toggleDrawer();

            }*/

        }

/*if(ChangedValue==1){

             var colorFONTvaltrue='green';
                var colorFONTval=JSON.stringify(colorFONTval);
                AsyncStorage.setItem('areman', colorFONTval);
              // console.log("code2",langg);
              Constants.Color=colorFONTvaltrue;
           this.setState({language: ChangedValue})

         }
         else{
             var colorFONTvaltrue='red';
             var colorFONTval='red';
                var colorFONTval=JSON.stringify(colorFONTval);
                AsyncStorage.setItem('areman', colorFONTval);
              // console.log("code2",langg);
              Constants.Color=colorFONTvaltrue;
           this.setState({language: ChangedValue})
         }*/

ColorFontFuntion1(ChangedValue){

 this.setState({language1: ChangedValue})
     if (ChangedValue==0) {

             var colorFONTval='#000000';
             this.Adeel1(colorFONTval);
            }

            else if (ChangedValue==1) {

             var colorFONTval='#972828';
             this.Adeel1(colorFONTval);
            }else if (ChangedValue==2) {

             var colorFONTval='#634631';
              this.Adeel1(colorFONTval);
              }else if (ChangedValue==3) {

             var colorFONTval='#2c076a';
               this.Adeel1(colorFONTval);
               }else if (ChangedValue==4) {

             var colorFONTval='#064c44';
             this.Adeel1(colorFONTval);
               }else if (ChangedValue==5) {

             var colorFONTval='#303f9f';
               this.Adeel1(colorFONTval);
               }else if (ChangedValue==6) {

             var colorFONTval='#00796b';
              this.Adeel1(colorFONTval);
               }else if (ChangedValue==7) {

             var colorFONTval='#441f03';
             this.Adeel1(colorFONTval);


             }else if (ChangedValue==8) {

             var colorFONTval='#42011f';
             this.Adeel1(colorFONTval);
            }
           /* else {
              this.toggleDrawer();

            }*/

        }


        ColorFontFuntion2(ChangedValue){

 this.setState({language2: ChangedValue})
     if (ChangedValue==0) {

             var colorFONTval='#000000';
             this.Adeel2(colorFONTval);
            }

            else if (ChangedValue==1) {

             var colorFONTval='#972828';
             this.Adeel2(colorFONTval);
            }else if (ChangedValue==2) {

             var colorFONTval='#634631';
              this.Adeel2(colorFONTval);
              }else if (ChangedValue==3) {

             var colorFONTval='#2c076a';
               this.Adeel2(colorFONTval);
               }else if (ChangedValue==4) {

             var colorFONTval='#064c44';
             this.Adeel2(colorFONTval);
               }else if (ChangedValue==5) {

             var colorFONTval='#303f9f';
               this.Adeel2(colorFONTval);
               }else if (ChangedValue==6) {

             var colorFONTval='#00796b';
              this.Adeel2(colorFONTval);
               }else if (ChangedValue==7) {

             var colorFONTval='#441f03';
             this.Adeel2(colorFONTval);


             }else if (ChangedValue==8) {

             var colorFONTval='#42011f';
             this.Adeel2(colorFONTval);
            }
           /* else {
              this.toggleDrawer();

            }*/

        }

        changeTheme(ChangedValue){
          this.setState({themeColor:ChangedValue})
          if (ChangedValue==0) {
             // var default=true;
             var themevalue=1;
             themevalue=JSON.stringify(themevalue);
              AsyncStorage.setItem('default',themevalue);
              Constants.default=true;
            var colorFONTval='#287303';
             this.themeclr(colorFONTval);
             var colorstatus='#1d4f04';
             this.statusclr(colorstatus);
            }

            else if (ChangedValue==1) {

             // var default=false;
             var themevalue=2;
             themevalue=JSON.stringify(themevalue);
              AsyncStorage.setItem('default',themevalue);
              Constants.default=false;
             var colorFONTval='#282828';
             this.themeclr(colorFONTval);
             var colorstatus='#181818';
             this.statusclr(colorstatus);
            }else if (ChangedValue==2) {

             // var default=false;
             var themevalue=2;
             themevalue=JSON.stringify(themevalue);
              AsyncStorage.setItem('default',themevalue);
              Constants.default=false;
              var colorFONTval='#000000';
              this.themeclr(colorFONTval);

              var colorstatus='#000000';
             this.statusclr(colorstatus);
              }else if (ChangedValue==3) {

             var colorFONTval='#000000';
               this.themeclr(colorFONTval);
               var colorstatus='#232323';
             this.statusclr(colorstatus);
               }else if (ChangedValue==4) {
             var colorFONTval='#d87903';
             this.themeclr(colorFONTval);
             var colorstatus='#c27804';
             this.statusclr(colorstatus);
               }else if (ChangedValue==5) {

             var colorFONTval='#161639';
               this.themeclr(colorFONTval);
               var colorstatus='#12123D';
             this.statusclr(colorstatus);
               }else if (ChangedValue==6) {

             var colorFONTval='#00796b';
              this.themeclr(colorFONTval);
              var colorstatus='#009688';
             this.statusclr(colorstatus);
               }else if (ChangedValue==7) {

             var colorFONTval='#441f03';
             this.themeclr(colorFONTval);
            var colorstatus='#3a1a02';
             this.statusclr(colorstatus);

             }else if (ChangedValue==8) {

             var colorFONTval='#42011f';
             this.themeclr(colorFONTval);
             var colorstatus='#5e0231';
             this.statusclr(colorstatus);
            }

        }

        themeColorfun(ChangedValue){






                  Alert.alert(
    'Alert!',
    'Are you sure to want the change theme?',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () =>    this.changeTheme(ChangedValue)


    },
    ],
    { cancelable: false }
     )


        }

saveFamilyinAsynstore(saveName){
            var saveFamilyName=saveName;

                var familyname=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('family', familyname);
              // console.log("code2",langg);
              Constants.Family=saveFamilyName;
}

saveFamilyinAsynstore1(saveName){
            var saveFamilyName=saveName;

                var familyname1=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('family1', familyname1);
              // console.log("code2",langg);
              Constants.ArabicFamily=saveFamilyName;
}

saveFamilyinAsynstore2(saveName){
            var saveFamilyName=saveName;

                var familyname2=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('family2', familyname2);
              // console.log("code2",langg);
              Constants.EnglishFamily=saveFamilyName;
}

saveshowhide(saveName){
            var saveFamilyName=saveName;

                var show=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('showhide', show);
              // console.log("code2",langg);
              Constants.ArabicShowHide=saveFamilyName;
}

saveshowhide1(saveName){
            var saveFamilyName=saveName;

                var show1=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('showhide1', show1);
              // console.log("code2",langg);
              Constants.UrduShowHide=saveFamilyName;
}

saveshowhide2(saveName){
            var saveFamilyName=saveName;

                var show2=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('showhide2', show2);
              // console.log("code2",langg);
              Constants.EnglishShowHide=saveFamilyName;
}

slidelist(saveName){
            var saveFamilyName=saveName;

                var show=JSON.stringify(saveFamilyName);
                AsyncStorage.setItem('slide', show);
              // console.log("code2",langg);
              Constants.layout=saveFamilyName;
}



        setfamily(itemValue){
     this.setState({familyValue:itemValue});
        if(itemValue==0){
         var saveName="UrduTypesetting";
         this.saveFamilyinAsynstore(saveName);
        }
        else{
          var saveName="Roboto-Regular";
          this.saveFamilyinAsynstore(saveName);
        }
      }

    setfamily1(itemValue){
     this.setState({familyValue1:itemValue});
        if(itemValue==0){
         var saveName="_PDMS_Saleem_QuranFont";
         this.saveFamilyinAsynstore1(saveName);
        }else{
          var saveName="AlQalamQuranMajeedWeb";
          this.saveFamilyinAsynstore1(saveName);
        }
    }

    setfamily2(itemValue){
     this.setState({familyValue2:itemValue});
        if(itemValue==0){
         var saveName="UrduTypesetting";
         this.saveFamilyinAsynstore2(saveName);
        }
        else{
          var saveName="AlQalamQuranMajeedWeb";
          this.saveFamilyinAsynstore2(saveName);
        }

    }

    showhide(itemValue){
      this.setState({showhide:itemValue});
        if(itemValue==0){
         var saveName=true;
         this.saveshowhide(saveName);
        }
        else{
          var saveName=false;
          this.saveshowhide(saveName);
        }
    }



    showhide1(itemValue){
        this.setState({showhide1:itemValue});
        if(itemValue==0){
         var saveName=true;
         this.saveshowhide1(saveName);
        }
        else{
          var saveName=false;
          this.saveshowhide1(saveName);
        }
    }


    showhide2(itemValue){
        this.setState({showhide2:itemValue});
        if(itemValue==0){
         var saveName=true;
         this.saveshowhide2(saveName);
        }
        else{
          var saveName=false;
          this.saveshowhide2(saveName);
        }
    }


    ListSlide(itemValue){

        this.setState({ListSlide:itemValue});
        if(itemValue==0){
         var saveName=true;
         this.slidelist(saveName);
        }
        else{
          var saveName=false;
          this.slidelist(saveName);
        }
    }

    langage(itemValue){
      this.setState({Languagepicker:itemValue});
      if(itemValue==0){
        // StringsOfLanguage.setLanguage('en');
        // Constants.EnglishCheck=false;
        // var yabnto = StringsOfLanguage.getLanguage();
        // var langg=JSON.stringify(yabnto);
        // AsyncStorage.setItem('keyOfLanguage', langg);
      }
      else if(itemValue==1){
        // StringsOfLanguage.setLanguage('fr');
        // Constants.EnglishCheck=false;
        // var yabnto = StringsOfLanguage.getLanguage();
        // var langg=JSON.stringify(yabnto);
        // AsyncStorage.setItem('keyOfLanguage', langg);
      }
      else if(itemValue==2){
        // StringsOfLanguage.setLanguage('ar');
        // Constants.EnglishCheck=true;
        // var yabnto = StringsOfLanguage.getLanguage();
        // var langg=JSON.stringify(yabnto);
        // AsyncStorage.setItem('keyOfLanguage', langg);
      }
      else if(itemValue==3){
        // StringsOfLanguage.setLanguage('ur');
        // Constants.EnglishCheck=true;
        // var yabnto = StringsOfLanguage.getLanguage();
        // var langg=JSON.stringify(yabnto);
        // AsyncStorage.setItem('keyOfLanguage', langg);
      }
    }

  backScreen = () => {
     this.props.navigation.pop();
  }

  render(){

// <Header navigator={this.props.navigator} showMenu={false} showBackbutton={true} showSetting={false} title='Settings'/>

  return(
    <View style={ Constants.default? {flex:1,backgroundColor:'#F7FAFB',} : {flex:1,backgroundColor:Constants.ThemeColor,}}>

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
            <Text style={styles.titleStyle}> سیٹنگز </Text>
         </View>

         <View style={styles.iconView}>
              {
                /*
                <TouchableOpacity onPress={this.settingScreen}>
                 <Image style={{height:25,width:25}} source={settings}/>
                </TouchableOpacity>
                */
              }

         </View>

      </View>


    <ScrollView style={{flex:1,borderTopWidth:0.5,borderTopColor:'grey',}}>
    {!Constants.EnglishCheck?
    <View style={styles.topView}>

   {

  Constants.MultiLanguages?
     <View style={styles.setView}>
       <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       Change Language:
       </Text>
       </View>

 <View style={styles.PickerView}>
  <Picker
  selectedValue={this.state.Languagepicker}
  style={Constants.default? {height: 50,width: '100%' ,color:'white',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.langage(itemValue)}>
  <Picker.Item label="English" value="0" />
  <Picker.Item label="French" value="1" />
  <Picker.Item label="Arabic" value="2" />
  <Picker.Item label="Urdu" value="3" />

  </Picker>
 </View>
</View>

:
null

}


{

Constants.MultiLanguages?
<View style={{marginTop:15}}>
      <View style={styles.lineView}/>
      </View>
  :null

}


{Constants.ThemeHide?
    <View style={styles.setView}>


       <View style={styles.textView} >
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
         Theme Color:
       </Text>
       </View>


<View style={styles.PickerView}>
         <Picker

  selectedValue={this.state.themeColor}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.themeColorfun(itemValue)}>

  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Dark" value="1" />
  <Picker.Item label="Night" value="2" />

 {/* <Picker.Item label="Black" value="3" />
  <Picker.Item label="Golden" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
   */}

</Picker>
       </View>


        </View>
     :null}

{Constants.ThemeHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>

:null}


{Constants.layoutHide?

 <View style={styles.setView}>







       <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
         Layout:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.ListSlide}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.ListSlide(itemValue)}>
  <Picker.Item label="List" value="0" />
  <Picker.Item label="Slide" value="1" />


</Picker>
       </View>


        </View>
     :null}

{Constants.layoutHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>

:null}


{Constants.ArabicHide?
      <View style={styles.setView}>

      <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
         Translation Show/Hide:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.showhide}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.showhide(itemValue)}>
  <Picker.Item label="Show" value="0" />
  <Picker.Item label="Hide" value="1" />


</Picker>
       </View>


        </View>
     :null}

{Constants.ArabicHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
:null}


{Constants.UrduHide?
       <View style={styles.setView}>







       <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
         Urdu Show/Hide:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.showhide1}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.showhide1(itemValue)}>
  <Picker.Item label="Show" value="0" />
  <Picker.Item label="Hide" value="1" />


</Picker>
       </View>


        </View>
     :null}

{Constants.UrduHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
:null}

{Constants.EnglishHide?
       <View style={styles.setView}>







       <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       WordbyWord Show/Hide:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.showhide2}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.showhide2(itemValue)}>
  <Picker.Item label="Show" value="0" />
  <Picker.Item label="Hide" value="1" />


</Picker>
       </View>


        </View>
     :null}

{Constants.EnglishHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
      :null}
     {Constants.Urdu?
       <View style={styles.setView}>







       <View style={styles.textView}>
      <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       Urdu Font:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.familyValue}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setfamily(itemValue)}>
  <Picker.Item label="TypeSetting" value="0" />
  <Picker.Item label="Roboto-Regular" value="1" />


</Picker>
       </View>


        </View>

:null}



{Constants.Urdu?
         <View style={styles.setView}>







       <View style={styles.textView}>
      <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       Font Size:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.SliderValue}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.TextFontFuntion(itemValue)}>
  <Picker.Item label="12" value={12} />
  <Picker.Item label="13" value={13} />
  <Picker.Item label="14" value={14} />
  <Picker.Item label="15" value={15} />
  <Picker.Item label="16" value={16} />
  <Picker.Item label="17" value={17} />
  <Picker.Item label="18" value={18} />
  <Picker.Item label="19" value={19} />
  <Picker.Item label="20" value={20} />
  <Picker.Item label="21" value={21} />
  <Picker.Item label="22" value={22} />
  <Picker.Item label="23" value={23} />
  <Picker.Item label="24" value={24} />
  <Picker.Item label="25" value={25} />
  <Picker.Item label="26" value={26} />
  <Picker.Item label="27" value={27} />
  <Picker.Item label="28" value={28} />
  <Picker.Item label="29" value={29} />
  <Picker.Item label="30" value={30} />
  <Picker.Item label="31" value={31} />
  <Picker.Item label="32" value={32} />
  <Picker.Item label="33" value={33} />
  <Picker.Item label="34" value={34} />
  <Picker.Item label="35" value={35} />
  <Picker.Item label="36" value={36} />
  <Picker.Item label="37" value={37} />
  <Picker.Item label="38" value={38} />
  <Picker.Item label="39" value={39} />
  <Picker.Item label="40" value={40} />
  <Picker.Item label="41" value={41} />
  <Picker.Item label="42" value={42} />
  <Picker.Item label="43" value={43} />
  <Picker.Item label="44" value={44} />
  <Picker.Item label="45" value={45} />
  <Picker.Item label="46" value={46} />
  <Picker.Item label="47" value={47} />
  <Picker.Item label="48" value={48} />
  <Picker.Item label="49" value={49} />
  <Picker.Item label="50" value={50} />

</Picker>
       </View>


        </View>
:null}




{Constants.Urdu?

 <View style={styles.setView}>







       <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       Text Color:
       </Text>
       </View>


 <View style={styles.PickerView}>
           <Picker
           mode="dropdown"
  selectedValue={this.state.language}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  onValueChange={(itemValue, itemIndex) => this.ColorFontFuntion(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Red" value="1" />
  <Picker.Item label="Golden" value="2" />
  <Picker.Item label="Navy" value="3" />
  <Picker.Item label="Green" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
</Picker>
       </View>


        </View>

:null}



{Constants.Urdu?
      <View style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {borderColor:'white',flex:0.2,backgroundColor:Constants.ThemeColor,padding:10,}}>

            <Text style = { Constants.default? {fontSize:this.state.SliderValue,color:Constants.Color,textAlign:'center',fontFamily:Constants.Family} : {fontSize:this.state.SliderValue,color:'white',textAlign:'center',fontFamily:Constants.Family} }>
      شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے
       </Text>
       </View>
       :null}

{Constants.Urdu?
    <View style={styles.lastlineView}>
<View style={styles.lineView}/>
</View>

    :null}






{Constants.Arabic?

<View style={styles.setView}>







       <View style={styles.textView}>
       <Text style={ Constants.default? {color:'#000000',flex:0.2,backgroundColor:'transparent',padding:10,fontWeight:'bold'} : {fontWeight:'bold',flex:0.2,color:'white',padding:10,}}>
       Arabic Font:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.familyValue1}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setfamily1(itemValue)}>
  <Picker.Item label="PDMS_Saleem" value="0" />
  <Picker.Item label="AlQalamQuranMajeedWeb" value="1" />


</Picker>
       </View>


        </View>

:null}



{Constants.Arabic?
         <View style={styles.setView}>







       <View style={styles.textView}>
       <Text style={ Constants.default? {color:'#000000',flex:0.2,backgroundColor:'transparent',fontWeight:'bold',padding:10,} : {flex:0.2,fontWeight:'bold',color:'white',padding:10,}}>
       Font Size:
       </Text>
       </View>


<View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.SliderValue1}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.TextFontFuntion1(itemValue)}>
  <Picker.Item label="12" value={12} />
  <Picker.Item label="13" value={13} />
  <Picker.Item label="14" value={14} />
  <Picker.Item label="15" value={15} />
  <Picker.Item label="16" value={16} />
  <Picker.Item label="17" value={17} />
  <Picker.Item label="18" value={18} />
  <Picker.Item label="19" value={19} />
  <Picker.Item label="20" value={20} />
  <Picker.Item label="21" value={21} />
  <Picker.Item label="22" value={22} />
  <Picker.Item label="23" value={23} />
  <Picker.Item label="24" value={24} />
  <Picker.Item label="25" value={25} />
  <Picker.Item label="26" value={26} />
  <Picker.Item label="27" value={27} />
  <Picker.Item label="28" value={28} />
  <Picker.Item label="29" value={29} />
  <Picker.Item label="30" value={30} />
  <Picker.Item label="31" value={31} />
  <Picker.Item label="32" value={32} />
  <Picker.Item label="33" value={33} />
  <Picker.Item label="34" value={34} />
  <Picker.Item label="35" value={35} />
  <Picker.Item label="36" value={36} />
  <Picker.Item label="37" value={37} />
  <Picker.Item label="38" value={38} />
  <Picker.Item label="39" value={39} />
  <Picker.Item label="40" value={40} />
  <Picker.Item label="41" value={41} />
  <Picker.Item label="42" value={42} />
  <Picker.Item label="43" value={43} />
  <Picker.Item label="44" value={44} />
  <Picker.Item label="45" value={45} />
  <Picker.Item label="46" value={46} />
  <Picker.Item label="47" value={47} />
  <Picker.Item label="48" value={48} />
  <Picker.Item label="49" value={49} />
  <Picker.Item label="50" value={50} />

</Picker>
       </View>


        </View>

:null}



{Constants.Arabic?

 <View style={styles.setView}>







      <View style={styles.textView}>
       <Text style={ Constants.default? {color:'#000000',flex:0.2,backgroundColor:'transparent',padding:10,fontWeight:'bold'} : {flex:0.2,fontWeight:'bold',color:'white',padding:10,}}>
       Text Color:
       </Text>
       </View>


 <View style={styles.PickerView}>
            <Picker
            mode="dropdown"
  selectedValue={this.state.language1}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  onValueChange={(itemValue, itemIndex) => this.ColorFontFuntion1(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Red" value="1" />
  <Picker.Item label="Golden" value="2" />
  <Picker.Item label="Navy" value="3" />
  <Picker.Item label="Green" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
</Picker>
       </View>


        </View>

:null}


{Constants.Arabic?

     <View style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,}:{borderColor:'#c2d6d6',flex:0.2,backgroundColor:Constants.ThemeColor,padding:10,}}>

       <Text style = {Constants.default? {fontSize:this.state.SliderValue1,fontFamily:Constants.ArabicFamily,color:Constants.Color1,textAlign:'center'}:{fontSize:this.state.SliderValue1,fontFamily:Constants.ArabicFamily,color:'white',textAlign:'center'}}>
        بِّسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
       </Text>
       </View>
:null}

       {Constants.Arabic?

    <View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
:null}








{Constants.English?


<View style={styles.setView}>







       <View style={styles.textView}>
       <Text style={ Constants.default? {color:'#000000',flex:0.2,fontWeight:'bold',backgroundColor:'transparent',padding:10,} : {flex:0.2,color:'white',fontWeight:'bold',padding:10,}}>
       WordbyWord Font:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.familyValue2}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setfamily2(itemValue)}>
  <Picker.Item label="Urdu Type" value="0" />
  <Picker.Item label="AlQalamQuranMajeedWeb" value="1" />


</Picker>
       </View>


        </View>


:null
}


{Constants.English?
         <View style={styles.setView}>







       <View style={styles.textView}>
       <Text  style={ Constants.default? {color:'#000000',flex:0.2,backgroundColor:'transparent',padding:10,fontWeight:'bold'} : {flex:0.2,color:'white',padding:10,fontWeight:'bold'}}>
       Font Size:
       </Text>
       </View>


 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.SliderValue2}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.TextFontFuntion2(itemValue)}>
  <Picker.Item label="12" value={12} />
  <Picker.Item label="13" value={13} />
  <Picker.Item label="14" value={14} />
  <Picker.Item label="15" value={15} />
  <Picker.Item label="16" value={16} />
  <Picker.Item label="17" value={17} />
  <Picker.Item label="18" value={18} />
  <Picker.Item label="19" value={19} />
  <Picker.Item label="20" value={20} />
  <Picker.Item label="21" value={21} />
  <Picker.Item label="22" value={22} />
  <Picker.Item label="23" value={23} />
  <Picker.Item label="24" value={24} />
  <Picker.Item label="25" value={25} />
  <Picker.Item label="26" value={26} />
  <Picker.Item label="27" value={27} />
  <Picker.Item label="28" value={28} />
  <Picker.Item label="29" value={29} />
  <Picker.Item label="30" value={30} />
  <Picker.Item label="31" value={31} />
  <Picker.Item label="32" value={32} />
  <Picker.Item label="33" value={33} />
  <Picker.Item label="34" value={34} />
  <Picker.Item label="35" value={35} />
  <Picker.Item label="36" value={36} />
  <Picker.Item label="37" value={37} />
  <Picker.Item label="38" value={38} />
  <Picker.Item label="39" value={39} />
  <Picker.Item label="40" value={40} />
  <Picker.Item label="41" value={41} />
  <Picker.Item label="42" value={42} />
  <Picker.Item label="43" value={43} />
  <Picker.Item label="44" value={44} />
  <Picker.Item label="45" value={45} />
  <Picker.Item label="46" value={46} />
  <Picker.Item label="47" value={47} />
  <Picker.Item label="48" value={48} />
  <Picker.Item label="49" value={49} />
  <Picker.Item label="50" value={50} />

</Picker>
       </View>


        </View>

:null
}


{/*
{Constants.English?

 <View style={styles.setView}>

      <View style={styles.textView}>
       <Text style={ Constants.default? {color:'#000000',,flex:0.2,backgroundColor:'transparent',padding:10,fontWeight:'bold'} : {color:'white',flex:0.2,padding:10,fontWeight:'bold'}}>
       {StringsOfLanguage.SettingEnglishColor}
       </Text>
       </View>


 <View style={styles.PickerView}>
            <Picker

            mode="dropdown"
  selectedValue={this.state.language2}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  onValueChange={(itemValue, itemIndex) => this.ColorFontFuntion2(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Red" value="1" />
  <Picker.Item label="Golden" value="2" />
  <Picker.Item label="Navy" value="3" />
  <Picker.Item label="Green" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
</Picker>
       </View>


        </View>

:
null
}
*/}

{Constants.English?

       <View style={Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'#FCFCFC',padding:10,}:{borderColor:'#c2d6d6',flex:0.2,backgroundColor:Constants.ThemeColor,padding:10,}}>

       <Text style = { Constants.default? {fontSize:this.state.SliderValue2,fontFamily:Constants.EnglishFamily,color:Constants.Color2,textAlign:'center'} : {fontSize:this.state.SliderValue2,fontFamily:Constants.EnglishFamily,color:'white',textAlign:'center'}}>
       بِ : سے    اسْمِ : نام    اللّٰهِ : اللہ    ال : جو    رَحْمٰنِ : بہت مہربان    الرَّحِيمِ : جو رحم کرنے والا
       </Text>

       </View>

           :null
}


       {Constants.English?

    <View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
      :null
}


















        </View>
        :











 <View style={styles.topView}>



   {Constants.MultiLanguages?

     <View style={styles.setView}>










 <View style={styles.PickerView}>
         <Picker

  selectedValue={this.state.Languagepicker}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.langage(itemValue)}>
  <Picker.Item label="English" value="0" />
  <Picker.Item label="French" value="1" />
  <Picker.Item label="Arabic" value="2" />
  <Picker.Item label="Urdu" value="3" />


</Picker>
       </View>

<View style={styles.textView}>
     <Text style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Change Language:
       </Text>
       </View>

        </View>

  :null}


{Constants.MultiLanguages?
<View style={{marginTop:15}}>
      <View style={styles.lineView}/>
      </View>
  :null}


{Constants.ThemeHide?
    <View style={styles.setView}>










<View style={styles.PickerView}>
         <Picker

  selectedValue={this.state.themeColor}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.themeColorfun(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Dark" value="1" />
  <Picker.Item label="Night" value="2" />
 {/* <Picker.Item label="Black" value="3" />
  <Picker.Item label="Golden" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
  */}
</Picker>
       </View>

        <View style={styles.textView}>
       <Text style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Theme Color:
       </Text>
       </View>


        </View>
     :null}

{Constants.ThemeHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>

:null}


{Constants.layoutHide?

 <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.ListSlide}
 style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.ListSlide(itemValue)}>
  <Picker.Item label="List" value="0" />
  <Picker.Item label="Slide" value="1" />


</Picker>
       </View>

       <View style={styles.textView}>
       <Text  style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Layout:
       </Text>
       </View>


        </View>
     :null}

{Constants.layoutHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>

:null}


{Constants.ArabicHide?
      <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.showhide}
  style={Constants.default? {height: 50,width: '100%' ,color:'black',}:{height: 50,width: '100%' ,color:'white',}}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.showhide(itemValue)}>
  <Picker.Item label="Show" value="0" />
  <Picker.Item label="Hide" value="1" />


</Picker>
       </View>

        <View style={styles.textView}>
       <Text  style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Translation Show/Hide:
       </Text>
       </View>


        </View>
     :null}

{Constants.ArabicHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
:null}


{Constants.UrduHide?
       <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.showhide1}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.showhide1(itemValue)}>
  <Picker.Item label="Show" value="0" />
  <Picker.Item label="Hide" value="1" />


</Picker>
       </View>

<View style={styles.textView}>
       <Text style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,white,padding:10,}}>
       Urdu Show/Hide:
       </Text>
       </View>

        </View>
     :null}

{Constants.UrduHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
:null}

{Constants.EnglishHide?
       <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.showhide2}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.showhide2(itemValue)}>
  <Picker.Item label="Show" value="0" />
  <Picker.Item label="Hide" value="1" />


</Picker>
       </View>


 <View style={styles.textView}>
       <Text style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       WordbyWord Show/Hide:
       </Text>
       </View>

        </View>
     :null}

{Constants.EnglishHide?
<View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
      :null}
     {Constants.Urdu?
       <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.familyValue}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setfamily(itemValue)}>
  <Picker.Item label="UrduTypesetting" value="0" />
  <Picker.Item label="Roboto-Regular" value="1" />


</Picker>
       </View>

        <View style={styles.textView}>
      <Text   style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {color:'white',flex:0.2,padding:10,}}>
       Urdu Font:
       </Text>
       </View>


        </View>

:null}



{Constants.Urdu?
         <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.SliderValue}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.TextFontFuntion(itemValue)}>
  <Picker.Item label="12" value={12} />
  <Picker.Item label="13" value={13} />
  <Picker.Item label="14" value={14} />
  <Picker.Item label="15" value={15} />
  <Picker.Item label="16" value={16} />
  <Picker.Item label="17" value={17} />
  <Picker.Item label="18" value={18} />
  <Picker.Item label="19" value={19} />
  <Picker.Item label="20" value={20} />
  <Picker.Item label="21" value={21} />
  <Picker.Item label="22" value={22} />
  <Picker.Item label="23" value={23} />
  <Picker.Item label="24" value={24} />
  <Picker.Item label="25" value={25} />
  <Picker.Item label="26" value={26} />
  <Picker.Item label="27" value={27} />
  <Picker.Item label="28" value={28} />
  <Picker.Item label="29" value={29} />
  <Picker.Item label="30" value={30} />
  <Picker.Item label="31" value={31} />
  <Picker.Item label="32" value={32} />
  <Picker.Item label="33" value={33} />
  <Picker.Item label="34" value={34} />
  <Picker.Item label="35" value={35} />
  <Picker.Item label="36" value={36} />
  <Picker.Item label="37" value={37} />
  <Picker.Item label="38" value={38} />
  <Picker.Item label="39" value={39} />
  <Picker.Item label="40" value={40} />
  <Picker.Item label="41" value={41} />
  <Picker.Item label="42" value={42} />
  <Picker.Item label="43" value={43} />
  <Picker.Item label="44" value={44} />
  <Picker.Item label="45" value={45} />
  <Picker.Item label="46" value={46} />
  <Picker.Item label="47" value={47} />
  <Picker.Item label="48" value={48} />
  <Picker.Item label="49" value={49} />
  <Picker.Item label="50" value={50} />

</Picker>
       </View>

<View style={styles.textView}>
      <Text  style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Font Size:
       </Text>
       </View>

        </View>
:null}




{Constants.Urdu?

 <View style={styles.setView}>










 <View style={styles.PickerView}>
           <Picker
           mode="dropdown"
  selectedValue={this.state.language}
  style={styles.PickerinternlView}
  onValueChange={(itemValue, itemIndex) => this.ColorFontFuntion(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Red" value="1" />
  <Picker.Item label="Golden" value="2" />
  <Picker.Item label="Navy" value="3" />
  <Picker.Item label="Green" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
</Picker>
       </View>

        <View style={styles.textView}>
       <Text  style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Text Color:
       </Text>
       </View>


        </View>

:null}



{Constants.Urdu?
     <View style={{borderColor:'#c2d6d6',flex:0.2,backgroundColor:'#FCFCFC',padding:10,}}>

            <Text style = {{fontSize:this.state.SliderValue,color:Constants.Color,textAlign:'center',fontFamily:Constants.Family}}>
       شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے
       </Text>
       </View>
       :null}

{Constants.Urdu?
    <View style={styles.lastlineView}>
<View style={styles.lineView}/>
</View>

    :null}






{Constants.Arabic?

<View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.familyValue1}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setfamily1(itemValue)}>
  <Picker.Item label="PDMS_Saleem" value="0" />
  <Picker.Item label="AlQalamQuranMajeedWeb" value="1" />


</Picker>
       </View>


<View style={styles.textView}>
       <Text style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {flex:0.2,color:'white',padding:10,}}>
       Arabic Font:
       </Text>
       </View>

        </View>

:null}



{Constants.Arabic?
         <View style={styles.setView}>










<View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.SliderValue1}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.TextFontFuntion1(itemValue)}>
  <Picker.Item label="12" value={12} />
  <Picker.Item label="13" value={13} />
  <Picker.Item label="14" value={14} />
  <Picker.Item label="15" value={15} />
  <Picker.Item label="16" value={16} />
  <Picker.Item label="17" value={17} />
  <Picker.Item label="18" value={18} />
  <Picker.Item label="19" value={19} />
  <Picker.Item label="20" value={20} />
  <Picker.Item label="21" value={21} />
  <Picker.Item label="22" value={22} />
  <Picker.Item label="23" value={23} />
  <Picker.Item label="24" value={24} />
  <Picker.Item label="25" value={25} />
  <Picker.Item label="26" value={26} />
  <Picker.Item label="27" value={27} />
  <Picker.Item label="28" value={28} />
  <Picker.Item label="29" value={29} />
  <Picker.Item label="30" value={30} />
  <Picker.Item label="31" value={31} />
  <Picker.Item label="32" value={32} />
  <Picker.Item label="33" value={33} />
  <Picker.Item label="34" value={34} />
  <Picker.Item label="35" value={35} />
  <Picker.Item label="36" value={36} />
  <Picker.Item label="37" value={37} />
  <Picker.Item label="38" value={38} />
  <Picker.Item label="39" value={39} />
  <Picker.Item label="40" value={40} />
  <Picker.Item label="41" value={41} />
  <Picker.Item label="42" value={42} />
  <Picker.Item label="43" value={43} />
  <Picker.Item label="44" value={44} />
  <Picker.Item label="45" value={45} />
  <Picker.Item label="46" value={46} />
  <Picker.Item label="47" value={47} />
  <Picker.Item label="48" value={48} />
  <Picker.Item label="49" value={49} />
  <Picker.Item label="50" value={50} />

</Picker>
       </View>


     <View style={styles.textView}>
       <Text style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'white',padding:10,} : {color:'white',flex:0.2,padding:10,}}>
       Font Size:
       </Text>
       </View>

        </View>

:null}



{Constants.Arabic?

 <View style={styles.setView}>










 <View style={styles.PickerView}>
            <Picker
            mode="dropdown"
  selectedValue={this.state.language1}
  style={styles.PickerinternlView}
  onValueChange={(itemValue, itemIndex) => this.ColorFontFuntion1(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Red" value="1" />
  <Picker.Item label="Golden" value="2" />
  <Picker.Item label="Navy" value="3" />
  <Picker.Item label="Green" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
</Picker>
       </View>

<View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       Text Color:
       </Text>
       </View>

        </View>

:null}


{Constants.Arabic?

     <View style={ Constants.default? {borderColor:'#c2d6d6',flex:0.2,backgroundColor:'#FCFCFC',padding:10,} : {borderColor:'#c2d6d6',flex:0.2,backgroundColor:Constants.ThemeColor,padding:10,}}>

       <Text style = { Constants.default? {fontSize:this.state.SliderValue1,fontFamily:Constants.ArabicFamily,color:Constants.Color1,textAlign:'center'} : {fontSize:this.state.SliderValue1,fontFamily:Constants.ArabicFamily,color:'white',textAlign:'center'}}>
       بِّسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
       </Text>
       </View>
:null}

       {Constants.Arabic?

    <View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
:null}








{Constants.English?


<View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.familyValue2}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setfamily2(itemValue)}>
  <Picker.Item label="UrduTypesetting" value="0" />
  <Picker.Item label="AlQalamQuranMajeedWeb" value="1" />


</Picker>
       </View>

<View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       WordbyWord Font:
       </Text>
       </View>

        </View>


:null
}


{Constants.English?
         <View style={styles.setView}>










 <View style={styles.PickerView}>
          <Picker

  selectedValue={this.state.SliderValue2}
  style={styles.PickerinternlView}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.TextFontFuntion2(itemValue)}>
  <Picker.Item label="12" value={12} />
  <Picker.Item label="13" value={13} />
  <Picker.Item label="14" value={14} />
  <Picker.Item label="15" value={15} />
  <Picker.Item label="16" value={16} />
  <Picker.Item label="17" value={17} />
  <Picker.Item label="18" value={18} />
  <Picker.Item label="19" value={19} />
  <Picker.Item label="20" value={20} />
  <Picker.Item label="21" value={21} />
  <Picker.Item label="22" value={22} />
  <Picker.Item label="23" value={23} />
  <Picker.Item label="24" value={24} />
  <Picker.Item label="25" value={25} />
  <Picker.Item label="26" value={26} />
  <Picker.Item label="27" value={27} />
  <Picker.Item label="28" value={28} />
  <Picker.Item label="29" value={29} />
  <Picker.Item label="30" value={30} />
  <Picker.Item label="31" value={31} />
  <Picker.Item label="32" value={32} />
  <Picker.Item label="33" value={33} />
  <Picker.Item label="34" value={34} />
  <Picker.Item label="35" value={35} />
  <Picker.Item label="36" value={36} />
  <Picker.Item label="37" value={37} />
  <Picker.Item label="38" value={38} />
  <Picker.Item label="39" value={39} />
  <Picker.Item label="40" value={40} />
  <Picker.Item label="41" value={41} />
  <Picker.Item label="42" value={42} />
  <Picker.Item label="43" value={43} />
  <Picker.Item label="44" value={44} />
  <Picker.Item label="45" value={45} />
  <Picker.Item label="46" value={46} />
  <Picker.Item label="47" value={47} />
  <Picker.Item label="48" value={48} />
  <Picker.Item label="49" value={49} />
  <Picker.Item label="50" value={50} />

</Picker>
       </View>

 <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'} }>
       Font Size:
       </Text>
       </View>

        </View>

:null
}



{Constants.English?

 <View style={styles.setView}>










 <View style={styles.PickerView}>
            <Picker

            mode="dropdown"
  selectedValue={this.state.language2}
  style={styles.PickerinternlView}
  onValueChange={(itemValue, itemIndex) => this.ColorFontFuntion2(itemValue)}>
  <Picker.Item label="Default" value="0" />
  <Picker.Item label="Red" value="1" />
  <Picker.Item label="Golden" value="2" />
  <Picker.Item label="Navy" value="3" />
  <Picker.Item label="Green" value="4" />
  <Picker.Item label="Blue" value="5" />
  <Picker.Item label="Teal" value="6" />
  <Picker.Item label="Dark" value="7" />
  <Picker.Item label="Maroon" value="8" />
</Picker>
       </View>


       <View style={styles.textView}>
       <Text style = { Constants.default? {fontSize:15,color:'black',fontWeight:'bold'} : {fontSize:15,color:'white',fontWeight:'bold'}}>
       Text Color:
       </Text>
       </View>


        </View>

:
null
}


{Constants.English?

      <View style={{borderColor:'#c2d6d6',flex:0.2,backgroundColor:'#FCFCFC',padding:10,}}>

       <Text style = {{fontSize:this.state.SliderValue2,fontFamily:Constants.EnglishFamily,color:Constants.Color2,textAlign:'center'}}>
       In the name of God, the Most Gracious, the Most Merciful
       </Text>

       </View>

           :null
}


       {Constants.English?

    <View style={styles.lastlineView}>
      <View style={styles.lineView}/>
      </View>
      :null
}


















        </View>





















    }

      </ScrollView>
      </View>
    );
}

}
const styles=StyleSheet.create({
outerContainer:{
  flex:1,backgroundColor:'#F7FAFB',
},
topView:{
  marginTop:10,
  marginRight:10,
  marginLeft:10,
  marginBottom:10
},

lineView:{
    height:1,backgroundColor:'#c2d6d6',
  },
  setView:{
    flex:0.1,
    marginTop:10,
    flexDirection:'row'
  },
  ShowView:{
        borderColor:'#c2d6d6',flex:0.2,backgroundColor:'#FCFCFC',padding:10,
  },
  lastlineView:{
    marginTop:15
  },
  PickerView:{
    flex:0.6,
    alignItems:'center',
     justifyContent:'center',
  },
  PickerinternlView:{
    height: 50,width: '100%' ,color:'white',
  },
  textView:{
    flex:0.4,
    paddingLeft:10,
     justifyContent:'center',
  },
  textinternlView:{
   fontSize:15,color:'black',fontWeight:'bold'
 },
 buttonDimension:{
   alignItems:'center',
   justifyContent:'center',
   marginRight:8,
   width:40,
   height:40,
 },
 textViewHeader:{
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

module.exports=SettingScreen;
