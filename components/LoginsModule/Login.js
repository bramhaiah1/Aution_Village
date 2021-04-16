import React, { Component } from 'react';
import {
   StyleSheet, View,Image,Text,TextInput,TouchableOpacity,ScrollView

} from 'react-native';
import {width,height} from '../../styles/alignmentstyles/width_height'
import {colors} from '../../styles/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'

import { Checkbox } from 'react-native-paper';

const Login=(props)=>{
    const [checked, setChecked] = React.useState(false);
    const [hide, setHide] = React.useState(false);

    return(
     <View style={styles.MainContainer}>
         
         <Text style={styles.signin}>Sign In</Text>
         <FontAwesome name="user-o" size={20} style={styles.usericon1}/>
         <Image
                style={styles.splashlayerimg}
                source={require("../../assets/Rectangle.png")}
              /> 
             
         <TextInput style={styles.Textinput}/>
         <SimpleLineIcons name="lock-open" size={20} style={styles.usericon}/>
         <Image
                style={styles.splashlayerimg1}
                source={require("../../assets/Rectangle.png")}
              />
         <TextInput           secureTextEntry={!hide}
style={styles.Textinput1}/>

        {hide?<Feather onPress={()=>setHide(!hide)} name="eye" size={20}style={styles.eyeshow}/>
        :<Feather   onPress={()=>setHide(!hide)}  name="eye-off" size={20} style={styles.eyehide}/>}

          <View >
             
          <TouchableOpacity style={styles.Done} onPress={()=>props.navigation.navigate("SMS Verification")}>
          
         <Text style={styles.Getstartedtext}>Sign In</Text></TouchableOpacity>
        </View>
        <View style={styles.Checkbox}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      
    /> 
    <View style={{flexDirection:"row"}}>
    <Text style={styles.remember}>Remember me</Text>

    <TouchableOpacity style={styles.forgotpass} onPress={()=>props.navigation.navigate("Reset Password")}>    
            <Text style={styles.forgotpasstext}>Forgot password?</Text>
    </TouchableOpacity>
        </View>
</View>
<Text style={styles.text1}>Or Sign in With</Text>
<View  style={styles.view1} >
             
             <TouchableOpacity style={styles.facebook} >
             
            <Text style={styles.facebooktext}>Facebook</Text></TouchableOpacity>
             
            <TouchableOpacity style={styles.twitter} >
             
             <Text style={styles.twittertext}>Twitter</Text></TouchableOpacity>
           </View>
           <Text style={styles.text2}>Don't have an account?<TouchableOpacity onPress={()=>props.navigation.navigate("signup")}>
               <Text style={styles.text3}> Sign Up</Text></TouchableOpacity></Text>
    </View>
    )

}
const styles = StyleSheet.create(
    {
    MainContainer: 
    {
    flex: 1,
    },
    signin:{
        fontWeight:"bold",
        alignSelf:'center',
        top:height/8,
        fontSize:20
    },
    Textinput:{
        width:width/1.4,
        borderBottomWidth:1,
        height:height/15,
        left:width/20,

        fontSize:15,
      //  lineHeight:-25,
        paddingBottom:-175,
        top:height/8,
        alignSelf:'center',
        borderBottomColor:colors.activedotcolor,
        paddingRight:width/8,



    },
    Textinput1:{
        
        width:width/1.4,
        borderBottomWidth:1,
        height:height/15,
        fontSize:15,
        left:width/20,
      //  lineHeight:-25,
        paddingBottom:-175,
        paddingRight:width/8,
        top:height/16,
        alignSelf:'center',
        borderBottomColor:colors.activedotcolor


    },
    Getstartedtext:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center"
       },
       facebooktext:{
        color:colors.white,
        fontSize:15,
        alignItems:"center"
       },
       twittertext:{
        color:colors.white,
        fontSize:15,
        alignItems:"center"
       },
       Done: {
        width: width/1.2,
        height: height/20,
        backgroundColor: 'rgb(40,212,196)',
        borderRadius:10,
        top:height/15,
        justifyContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
      },
      facebook: {
        width: width/2.3,
        height: height/20,
        right:width/30,
        backgroundColor: colors.backgroundcolor,
        borderRadius:15,
        top:height/15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      twitter: {
        width: width/2.3,
        height: height/20,
        left:width/30,

        backgroundColor: colors.skyblue,
        borderRadius:15,
        top:height/15,
        justifyContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
      },
      splashlayerimg:{
        alignSelf:"center",
         height: height/20,
         width: width/10,
         top:height/5.2,
        right:width/2.7,
      
       },
       splashlayerimg1:{
        alignSelf:"center",
         height: height/20,
         width: width/10,
         top:height/7.7,
        right:width/2.7,
      
       },
       usericon:{
           color:colors.activedotcolor,
           transform: [{rotateY: '180deg'}],
           top:height/6,
           //alignSelf:"flex-start",
           right:width/1.2,
       },
       usericon1:{
        color:colors.activedotcolor,
        top:height/4.4,
        left:width/9,

       },
       Checkbox:{
        top:height/11.5,
        left:width/15,

       },
       remember:{
           bottom:height/27,
           left:width/10,
           fontSize:15,
       },
       forgotpasstext:{
        //bottom:height/27,
       // left:width/4,
        fontSize:15,
        fontWeight:"bold",
        color:colors.activedotcolor,

    },
    forgotpass:{
        bottom:height/27,
        left:width/4,
        fontSize:15,
        fontWeight:"bold",
        //backgroundColor:colors.activedotcolor,

    },
    eyeshow:{
        alignSelf:"flex-end",
    top:height/35,
    right:width/8
},
eyehide:{
    alignSelf:"flex-end", 
    top:height/35,
    right:width/8,
    transform: [{rotateY: '180deg'}],

},
text1:{
    alignSelf:"center",
    fontWeight:"bold",
    fontSize:20,
    top:height/15,

},
view1:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignSelf:"center",
    top:height/50
},
text2:{
    alignSelf:"center", 
    top:height/7,  
},
text3:{
    textDecorationLine:"underline",
    top:height/240,
    color:colors.activedotcolor
}
})
export default Login