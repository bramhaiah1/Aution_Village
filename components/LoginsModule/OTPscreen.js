import React, { Component } from "react";
import {

    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    state,
    ActivityIndicator,
    ImageBackground,
    DeviceEventEmitter,
} from "react-native";
import {width,height,scale} from '../../styles/alignmentstyles/width_height'
import { Header,Right,Body,Title,Left, Label, Icon, Card, CardItem } from 'native-base';

import {colors} from '../../styles/colors'
import A from "../Headers/header";
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import OTPTextView from "react-native-otp-textinput";
import { Colors } from "react-native/Libraries/NewAppScreen";
class OtpScreen extends Component {
    OTPverification = () => {
        const { otpInput } = this.state;
        const { navigation } = this.props;
        var email1 = navigation.getParam('email', '')
        // var otp1 = navigation.getParam('otp', '')
        var phonenumber = navigation.getParam('phonenumber', '')

        var phonenumber1 = navigation.getParam('phonenumber', '')
        var data;

        if (phonenumber1 != '') {
            //  alert(phonenumber1)
            data = {
                otp: otpInput,
                phonenumber: phonenumber1,
            }

        }
        else {
            data = {
                otp: otpInput,
                email: email1,
            }
        } //alert("ok")
        //alert(data.otp, data.phonenumber)
       
    }

    clear = () => {
        this.input1.clear();
    };
    state = {};
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                }}
            >
<Header style={{backgroundColor:colors.white}}>
    <Left>
    <AntDesign onPress={()=>this.props.navigation.navigate('Login')} name='arrowleft'  color={colors.activedotcolor} size={30} />

    </Left>
    <Body>
                             
                                      
                             <Title style={{fontWeight:"bold",color:"black"}}>SMS verification</Title>
                         </Body>
</Header>             
  <Image
                style={styles.splashlayerimg1}
                source={require("../../assets/phone-icon.png")}
              />
                    <Text style={styles.text1}>Enter the code below to verify phone number</Text>
                    <Text style={styles.text2}>A 6 digit verification code has been sent to ...5629</Text>
                    <OTPTextView 
                        ref={(e) => (this.input1 = e)}
                        containerStyle={styles.textInputContainer}
                        handleTextChange={(text) => this.setState({ otpInput: text })}
                        inputCount={6}
                        keyboardType="numeric"
                        defaultValue={this.state.otpInput}
                        borderWidth={2}
                        size={10}
                        borderRadius={10}
                        width={width/10}
                       // textInputStyle={ { borderRadius: 10, }}
                        tintColor={colors.activedotcolor}
                    />
                         
                         <View >
             
             <TouchableOpacity style={styles.verifyview} >
             
            <Text style={styles.verifytext}>Verify</Text></TouchableOpacity>
           </View>  
           <View >
             
             <TouchableOpacity style={styles.cancelview} onPress={()=>this.props.navigation.navigate("Login")}>
             
            <Text style={styles.canceltext}>Cancel</Text></TouchableOpacity>
           </View>   
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textInputContainer: {
       // marginBottom: 10,
        top: height/10,
alignSelf:"center",
      //  color: "#d8341c",

    },
    roundedTextInput: {
        borderWidth: 1,
    },
    verifyview: {
        width: width/1.2,
        height: height/20,
        backgroundColor: 'rgb(40,212,196)',
        borderRadius:10,
        top:height/8,
        justifyContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
      },
      verifytext:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center"
       },
       cancelview: {
        width: width/1.2,
        height: height/20,
        backgroundColor: colors.white,
        borderRadius:10,
        top:height/7,
        justifyContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
      },
      canceltext:{
        color:colors.ash,
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center"
       },
    text1:{fontSize:25,alignSelf:"center", top:height/15,color:colors.activedotcolor,paddingLeft:width/6,paddingRight:width/9,textAlign:"center"
      
},
text2:{
    alignSelf:"center",
    color:colors.ash, 
    top:height/13,
    textAlign:"center",
     paddingLeft:width/15,paddingRight:width/10,fontSize:13,justifyContent:"space-between"},


     splashlayerimg1:{
        alignSelf:"center",
        // height: height/20,
        // width: width/10,
        top:height/20,
      // right:width/2.7,
      
       },
});

export default OtpScreen;
