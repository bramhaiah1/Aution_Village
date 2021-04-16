import React, { Component } from 'react';
import {
   StyleSheet, View,Image,Text,TextInput,TouchableOpacity,ScrollView

} from 'react-native';
import {width,height} from '../../styles/alignmentstyles/width_height'
import {colors} from '../../styles/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Header,Right,Body,Title,Left, Label, Icon, Card, CardItem } from 'native-base';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

const ResetPassword=(props)=>{

    return(
        <View style={styles.MainContainer}> 
<Header style={{backgroundColor:colors.white}}>
    <Left>
    <AntDesign onPress={()=>props.navigation.navigate('Login')} name='arrowleft'  color={colors.activedotcolor} size={30} />

    </Left>
    <Body>
                             
                                      
                             <Title style={{fontWeight:"bold",color:"black"}}>Reset Password</Title>
                         </Body>
</Header>       
 <Image
                style={styles.splashlayerimg1}
                source={require("../../assets/lock-help.png")}
              />
              <Text style={styles.text1}>Forgot Password?</Text>
              <Text style={styles.text2}>Please enter the email address registered on your account</Text>
<TextInput style={styles.textinput}/>
         <View >
             
             <TouchableOpacity style={styles.Done} onPress={()=>props.navigation.navigate("Login")}>
             
            <Text style={styles.Getstartedtext}>Reset Password</Text></TouchableOpacity>
           </View>
                      </View>
    )
}
const styles = StyleSheet.create(
{
    MainContainer: 
    {
    flex: 1,
    backgroundColor:colors.white
    },
    splashlayerimg1:{
        alignSelf:"center",
        // height: height/20,
        // width: width/10,
        top:height/20,
      // right:width/2.7,
      
       },
       Getstartedtext:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center"
       },
       Done: {
        width: width/1.2,
        height: height/15,
        backgroundColor: colors.activedotcolor,
        borderRadius:10,
        top:height/8,
        justifyContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
      },
      text1:{fontSize:25,alignSelf:"center", top:height/15,color:colors.activedotcolor
      
    },
    text2:{
        alignSelf:"center",
        color:colors.ash, 
        top:height/13,
        textAlign:"center",
         paddingLeft:width/6,paddingRight:width/6,fontSize:15,justifyContent:"space-between"},
    textinput:{ width:width/1.2,
        height:height/18,
        fontSize:15,
      //  lineHeight:-25,
        paddingRight:width/12,
        paddingLeft:width/7,
borderRadius:20,
        top:height/10,
        alignSelf:'center',
        backgroundColor:colors.cement}
})
export default ResetPassword
