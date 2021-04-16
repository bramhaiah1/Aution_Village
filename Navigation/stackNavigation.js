import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Splash from '../components/splashscreen/splashscreen'
import Loginscreen from '../components/LoginsModule/Login'
import Signupscreen from '../components/LoginsModule/Signup'


import ResetPassword from '../components/LoginsModule/ResetPassword'
import OTP from '../components/LoginsModule/OTPscreen'
import Drawer from './drawerNavigation'
import {
  StyleSheet, View,Image,Text,TextInput,TouchableOpacity,ScrollView

} from 'react-native';
import {colors} from '../styles/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Stack = createStackNavigator();
export default function MyStack() {
    return (
      <Stack.Navigator >

<Stack.Screen name="Splashscreen" options={{headerShown: false}}component={Splash}  />


        <Stack.Screen name="Login" options={{headerShown: false}}component={Loginscreen}  />
       
        <Stack.Screen name="signup" options={{headerShown: false}}component={Signupscreen}  />

        <Stack.Screen name="Reset Password" headerMode="screen" options={{headerShown: false}} component={ResetPassword}  />

        <Stack.Screen name="SMS Verification"  options={{headerShown: false}} component={OTP}  />


      </Stack.Navigator>
          
    );
  }