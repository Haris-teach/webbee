import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homeScreen from '../screens/homeScreen';
import BullDozer from '../screens/BullDozer';

const RootStack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="homeScreen"
        screenOptions={{
          gestureEnabled: true,
          headerMode: 'none',
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <RootStack.Screen name={'HomeScreen'} component={homeScreen} />
        <RootStack.Screen name={'BullDozer'} component={BullDozer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
