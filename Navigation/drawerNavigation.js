import { createDrawerNavigator } from '@react-navigation/drawer';
import Loginscreen from '../components/LoginsModule/Login'
import Signupscreen from '../components/LoginsModule/Signup'
import * as React from 'react';
import Splash from '../components/splashscreen/splashscreen'
import MyStack from './stackNavigation'


import ResetPassword from '../components/LoginsModule/ResetPassword'
import CustomSidebarMenu from './cs'
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed" 
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>

      <Drawer.Screen
        name="Feed"
        component={MyStack}
        
        options={{ drawerLabel: () => null,

        }}
      />
      {/* <Drawer.Screen
        name="Notifications"
        component={Signupscreen}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ResetPassword}
        options={{ drawerLabel: 'Profile' }}
      /> */}
    </Drawer.Navigator>
  );
}