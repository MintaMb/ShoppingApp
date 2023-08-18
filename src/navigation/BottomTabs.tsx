import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
// import { useSelector } from "react-redux";
import CartScreen from '../containers/CartScreen';
import HomeScreen from '../containers/HomeScreen';
import MyProfileScreen from '../containers/MyProfileScreen';
import BottomBar from '../library/components/BottomBar';
import ScreenConstants from '../library/constants/ScreenConstants';
import FavouriteScreen from '../containers/FavouriteScreen';
import MyOrderScreen from '../containers/MyOrderScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name={ScreenConstants.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={ScreenConstants.FAVOURITE_SCREEN}
        component={FavouriteScreen}
      />
      <Tab.Screen name={ScreenConstants.CART_SCREEN} component={CartScreen} />
      <Tab.Screen
        name={ScreenConstants.MY_ORDER_SCREEN}
        component={MyOrderScreen}
      />
      <Tab.Screen
        name={ScreenConstants.MY_PROFILE_SCREEN}
        component={MyProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
