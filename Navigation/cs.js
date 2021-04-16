
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {colors} from "../styles/colors";
import {width,height} from '../styles/alignmentstyles/width_height'

const CustomSidebarMenu = (props) => {
 

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.backgroundcolor}}>
            <AntDesign onPress={()=>props.navigation.navigate('Login')} name='arrowleft' style={{alignSelf:"flex-end"}} color={colors.white} size={30} />

      {/*Top Large Image */}
      <Image
                source={require("../assets/NewLogo.png")}
                style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Category"
          icon={() =>
           <Image                          style={styles.icon}
           source={require('../assets/Category.png')}
           />
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Login')}/>
<View style={{borderWidth:1,borderColor:colors.bordercolor}}/>
         <DrawerItem
          label="Collection"
          icon={() =>
           <Image                          style={styles.icon}
           source={require('../assets/Collection.png')}
           />
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Login')}/>
<View style={{borderWidth:1,borderColor:colors.bordercolor}}/>

         <DrawerItem
          label="Review"
          icon={() =>
           <Image                          style={styles.icon}
           source={require('../assets/Review.png')}
           />
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Login')}/>
<View style={{borderWidth:1,borderColor:colors.bordercolor}}/>

         <DrawerItem
          label="Profile"
          icon={() =>
           <Image                          style={styles.icon}
           source={require('../assets/Profile.png')}
           />
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Login')}/>
<View style={{borderWidth:1,borderColor:colors.bordercolor}}/>

                <DrawerItem
          label="Setting"
          icon={() =>
           <Image                          style={styles.icon}
           source={require('../assets/Setting.png')}
           />
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Login')}/>
<View style={{borderWidth:1,borderColor:colors.bordercolor}}/>

                <DrawerItem
          label="Logout"
          icon={() =>
           <Image                          style={styles.icon}
           source={require('../assets/Logout.png')}
           />
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Login')}/>
       
      </DrawerContentScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
  //  resizeMode: 'center',
    width: width/2,
    height: height/4,
    //borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    color:colors.white
  },
  icon:{
   // alignSelf:"center",
   //height: height/17,
  // width: width/8,
  // bottom:height/3.8,
  //right:width/4.5,

  },
  labelStyle:{color:colors.white,right:20}
});

export default CustomSidebarMenu;
