import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { AsyncStorage, YellowBox } from 'react-native';
import { HomeStackScreen, DrawerNavigator } from './StoneNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/HomeScreen/Home';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator  = () => {
    return (
        <NavigationContainer>
              <DrawerNavigator/>
        </NavigationContainer>
      );

}
    
    
        
       


export default AppNavigator ;
