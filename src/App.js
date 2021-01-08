import React, { useState } from "react";
//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { View, Text } from 'react-native';
//Icon
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import Home from "./screens/HomeScreen/Home";
import { authReducer } from "./reducers/auth/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
  });
const store = createStore(
    rootReducer,
  );
const  App =()=> {

    return (
        <>
        <Provider store={store}>
        <AppNavigator/>
        </Provider>
   
         </>
    );
  
}

export default App;
