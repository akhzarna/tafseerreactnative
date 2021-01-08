
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

var Constants=require('./Constants');
var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');

// var Header=require('./Header');

// import { NavigationEvents } from 'react-navigation';

class HomeViewController extends Component {

  constructor(props){
    super(props);
  }

  rowSelected(item){
    Constants.readingheaderTitle= 'سورۃ '+item.nameArabic;
    var obj={surah:item.surahNumber, nameArabic:item.nameArabic, nameEnglish:item.nameEnglish,};
    var data=obj;
    /* ## Compare 1 mean you came from Main Screen (HomeViewController) and
          Compare 2 mean you came from BookMark Screen ## */
    var compare=1;
    this.props.navigation.navigate('TafseerController',{
       data:obj,
       compare:compare,
    });

    // Alert.alert('ComponentId',data.surah);

    // Navigation.push(this.props.componentId, {
    // component: {
    // name: 'ReadingScreen',
    // passProps:{data,compare},
    // options: {
    //  animations: {
    //    pop: {
    //      enable: false
    //    }
    //  }
    //   }
    //   },
    //
    // });

    // this.showInterstitial();
  }

  settingScreen = () => {
   this.props.navigation.navigate('SettingScreen');
   }

  bookMarkScreen = () => {
   this.props.navigation.navigate('BookmarkScreen');
   }

  render(){

  return (

      <View style={Constants.default ? {flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}:{flex:1,backgroundColor:'#1e1e1e',justifyContent:'center',}}>

        <View style={{ height: 50,backgroundColor:Constants.ThemeColor,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',marginBottom:0}}>

            <View style={{flex:0.1}}>
             <TouchableOpacity style={styles.buttonDimension}
                onPress={this.bookMarkScreen}>
              <Image style={{height:20 ,width:20}} source={favIcon}/>
             </TouchableOpacity>
            </View>

             <View style={styles.textView}>
                <Text style={styles.titleStyle}> احسن البیان </Text>
             </View>

             <View style={styles.iconView}>
                  <TouchableOpacity onPress={this.settingScreen}>
                   <Image style={{height:25,width:25}} source={settings}/>
                  </TouchableOpacity>
             </View>

          </View>

        {/*
          <Header navigator={this.props.componentId} navigation={this.props.navigation} showMenu={false} showBackbutton={false} showSetting={true} title='معارف القرآن'/>
          <NavigationEvents
                      onDidFocus={()=>this.setState({})}
                      />
        */}

        <ScrollView style={{flex:0.9,borderTopWidth:0.5,borderTopColor:'grey',paddingTop:3}}>

               <FlatList
                data={Constants.SurahInfo}
                initialNumToRender={10}
                keyExtractor = { (item, index) => index.toString()}
                renderItem={({item}) =>

                <View style={{flex:0.9,paddingRight:6,paddingLeft:6,paddingBottom:3,paddingTop:3,justifyContent:'center',}}>
                <TouchableOpacity style={ Constants.default? {justifyContent:'center', elevation: 3,
                height:60,borderRadius:4,padding:4,shadowOpacity: 10,backgroundColor : 'white',shadowColor: 'black',}
                 : {justifyContent:'center', elevation: 3,
                height:60,borderRadius:4,padding:4,shadowOpacity: 10,backgroundColor : Constants.ThemeColor,shadowColor: 'black',} }
                onPress={()=>this.rowSelected(item)}>

                    <View style={{flex:1,flexDirection:'row'}}>

                      <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>

                      <Text style={ Constants.default? {color:'#000000',fontSize:17,textAlign:'center',fontFamily:'10MucZeit-Medium'}
                       : {color:'white',fontSize:17,textAlign:'center',fontFamily:'10MucZeit-Medium'}}>
                      {item.key} </Text>
                      </View>

                      <View style={{flex:0.5,justifyContent:'center'}}>
                      <View style={{flex:0.3,justifyContent:'center'}}>
                      <Text style={
                        Constants.default?
                        {color:'#000000',fontSize:20,fontFamily:'Roboto-Regular',paddingBottom:10}
                       : {color:'white',fontSize:20,fontFamily:'Roboto-Regular',paddingBottom:10}}>
                      {item.nameEnglish}

                      </Text>
                      </View>

                      <View style={{flex:0.1,flexDirection:'row',justifyContent:'center',paddingTop:5}}>

                      <View style={{flex:1,}}>
                      <Text style={ Constants.default?
                      {color:'#000000',fontSize:12,} :
                      {color:'white',fontSize:12,}}>
                      {item.type} - Verses:{item.ayahCount}

                      </Text>
                      </View>
                      </View>
                      </View>


                    <View style={{flex:0.3,justifyContent:'center'}}>
                    <Text style={ Constants.default?
                      {color:'#000000',fontSize:28,fontFamily:'AlQalamQuranMajeedWeb',textAlign:'right'}
                      :
                      {color:'white',fontSize:28,fontFamily:'AlQalamQuranMajeedWeb',textAlign:'right'}}>
                          {item.nameArabic} </Text>
                    </View>



                    </View>

                </TouchableOpacity>
                 </View>
              }

              />

            </ScrollView>

            {Constants.statusofNet?
              <View style={{flex:0.1,marginTop:1,backgroundColor:'transparent',height:52,}}>
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

export default HomeViewController;
