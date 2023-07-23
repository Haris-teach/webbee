import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import homeScreen from '../screens/homeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavi = ({params}) => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={homeScreen}
      options={{
        title: 'Home',
        drawerLabel: 'Home',
        // Set the onItemPress function for this drawer item
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavi;
