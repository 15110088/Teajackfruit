import React, { Component } from 'react';
import { View, Text ,Platform} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import CustomDrawer from './CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Colors from '../utils/Colors';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
// redux
import { useSelector } from 'react-redux';
import Home1 from '../screens/HomeScreen/Home1';
import Home from '../screens/HomeScreen/Home';



const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
   //   cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={Home}
      //animationEnabled: false , nằm trong option
    />
   
  </HomeStack.Navigator>
);

//Drawer
const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {

    const drawers = [
        {
          name: 'HomeTab',
          screen: Home,
          label: 'Trang Chủ',
          icon: 'home-outline',
        },
        {
          name: 'Order',
          screen: Home1,
          label: 'Đơn Hàng',
          icon: 'receipt',
        },
       
      ];
  return (
    <Drawer.Navigator
   drawerContent={(props) => <CustomDrawer {...props} />}
    drawerContentOptions={{
      activeTintColor: Colors.grey,
      itemStyle: { marginVertical: 3 },
    }}
    >
        {drawers.map(({ name, icon, label, screen }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={screen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: focused ? Colors.lighter_green : Colors.grey,
                }}
              >
                {label}
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={icon}
                size={23}
                color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ))}
    </Drawer.Navigator>
  );
};



const StoneNavigator =()=> {

    return (
      <View>
        <Text> StoneNavigator </Text>
      </View>
    );
  
}

export default StoneNavigator;
