import React, { Component } from 'react';
import {
   StyleSheet, View,Image,Text,TouchableOpacity,

} from 'react-native';
import {width,height} from '../../styles/alignmentstyles/width_height'
import{colors} from '../../styles/colors'
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign'
const slides = [
    {
      key: 1,
      title: false,
      title1:false,
      text: 'Free Shipping',
      text1:'For a local customer, we provide free shipping facility',
      image:require("../../assets/splash-circle.png"),
    },
    {

      key: 2,
      title: true,
      title1:false,
      text:'24/7 support ',
      text1:'For any inquiry, we are available',
      image: require("../../assets/splash-circle.png"),
    },
    {
      key: 3,
      title: false,
      title1:true,
      text:"Fast delivery",
      text1:"We understand your urgency and we deliver in a fast way",
      image: require("../../assets/splash-circle.png"),
    }
    
  ];
   
export default class Splashscreen extends Component {
 
    constructor(){  
        super();  
        this.state={  
        isVisible : true,
        next:false,
        showRealApp:false,
       
         }
        }
    Hide_Splash_Screen=()=>{  
        this.setState({   
          isVisible : false   
        });  
      }  
    componentDidMount(){
        var that = this;  

        setTimeout(function(){  
            that.Hide_Splash_Screen();  
          }, 5000);  
      
         
    }
    _renderItem = ({ item }) => {
        return (

          <View style={styles.slide}>
              {item.title?   <Image
                style={styles.serviceimg}
                source={require("../../assets/service.png")}
              />:item.title1?<Image
              style={styles.fastserviceimg}
              source={require("../../assets/fastdelivery.png")}
            />:
            <Image
                style={styles.vehicleimg}
                source={require("../../assets/vehicle.png")}
              /> } 
            <Image
                style={styles.circleimg}
                source={require("../../assets/circle.png")}
              />            
                 <Text style={styles.text}>{item.text}</Text>

                          <Text style={styles.text1}>{item.text1}</Text>
          </View>
        );
      }
      _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
        return (
        <View  style={styles.Done}>
          <TouchableOpacity onPress={()=>alert("sss")}>
         <Text style={styles.Getstartedtext}>Get Started!</Text></TouchableOpacity>
        </View>
      ); 
         }
      _renderNextButton = () => {
          //alert("a")
          //this.setState({Next:true})
        return (
          <View style={styles.Next}>
           <Text style={styles.Nexttext}>Next  <AntDesign size={25} style={styles.arrowright} name='arrowright'></AntDesign></Text>
          </View>
        );
      }
      _renderSkipButton = () => {
        return (
          <View style={styles.skip}>
           <Text style={styles.skiptext}>Skip</Text>
          </View>
        );
      }
  render() {
    let Splash_Screen = (   <View style = {styles.MainContainer}>
        <Image
                style={styles.splashcircle}
                source={require("../../assets/splash-circle.png")}
              />   
              <Image
                style={styles.Autionimg}
                source={require("../../assets/AuctionVillage.png")}
              /> 
              <Image
                style={styles.splashlayerimg}
                source={require("../../assets/splashLayer.png")}
              /> 
          </View>)

    return (
      
        (this.state.isVisible === true) ? Splash_Screen :this.state.showRealApp?
        <View style={styles.slide}>
          <Image
              style={styles.fastserviceimg}
              source={require("../../assets/fastdelivery.png")}
            />
           <Image
                style={styles.circleimg}
                source={require("../../assets/circle.png")}
              />            
                 <Text style={styles.text}>Fast delivery</Text>

                          <Text style={styles.text1}>We understand your urgency and we deliver in a fast way</Text>

        <View >
          <TouchableOpacity style={styles.Done} onPress={()=>this.props.navigation.navigate("Login")}>
         <Text style={styles.Getstartedtext}>Get Started!</Text></TouchableOpacity>
        </View></View>
        :<AppIntroSlider renderItem={this._renderItem} data={slides} renderDoneButton={this._onDone}         renderNextButton={this._renderNextButton}
         renderSkipButton={this._renderSkipButton}  dotStyle={{    backgroundColor: colors.dotcolor}}   activeDotStyle={{backgroundColor: colors.activedotcolor}}
        showSkipButton={true}/>
    );
  }
}

const styles = StyleSheet.create(
{

MainContainer: 
{

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: colors.backgroundcolor,

}
,
Next: {
    width: width/3,
    height: height/20,
    left:width/20,
    backgroundColor: 'rgb(40,212,196)',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    width: width/5,
    height: height/20,
    right:width/20,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Done: {
    width: width/1.1,
    height: height/20,
    backgroundColor: 'rgb(40,212,196)',
    borderRadius:10,
    top:height/20,
    justifyContent: 'center',
    alignSelf:"center",
    alignItems: 'center',
  },
slide: 
{

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: colors.white,

}
,serviceimg:{
  alignSelf:"center",
   height: height/7,
   width: width/3,
  top:height/13,

 },
 fastserviceimg:{
  alignSelf:"center",
   height: height/7,
   width: width/3,
  top:height/15,

 },
 vehicleimg:{
  alignSelf:"center",
   height: height/8,
   width: width/1.8,
  top:height/20,

 },
 circleimg:{
  alignSelf:"center",
   height: height/3,
   width: width/1.4,
 

 },
 text:{
   color:"rgb(40,212,196)",
   fontWeight:"bold",
   fontSize:20,
   bottom:height/4.5,
   textAlign:"center"
  },
 text1:{
   paddingLeft:width/4,
   paddingRight:width/5,
   justifyContent:"space-between",
   alignItems:"center",
   bottom:height/4.5,
   fontSize:15,
   alignSelf:"center",
   textAlign:"center"

  },
 Getstartedtext:{
   color:colors.white,
   fontWeight:"bold",
   fontSize:20,
   alignItems:"center"
  },
 Nexttext:{
   color:colors.white,
   fontWeight:"600",
   fontSize:20,
   alignItems:"center"
  },
 arrowright:{
   color:colors.white
  },
 skiptext:{
   color:colors.white,
   fontWeight:"600",
   fontSize:20,
   alignItems:"center"
  },
 splashcircle:{
  alignSelf:"center",
   height: height/3,
   width: width/1.5,


 },
 Autionimg:{
  alignSelf:"center",
   height: height/15,
   width: width/3,
   bottom:height/5,

 },
 splashlayerimg:{
  alignSelf:"center",
   height: height/17,
   width: width/8,
   bottom:height/3.8,
  right:width/4.5,

 },
});

