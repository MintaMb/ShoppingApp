import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import HomeScreen from '../containers/HomeScreen';
import MyProfileScreen from '../containers/MyProfileScreen';

import CustomDrawer from '../library/components/CustomDrawer';
import ScreenConstants from '../library/constants/ScreenConstants';
import DimensionsValue from '../library/utils/DimensionsValue';
import BottomTab from './BottomTabs';

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: 'transparent',
          borderTopRightRadius: DimensionsValue.VALUE_20,
          borderBottomRightRadius: DimensionsValue.VALUE_20,
          width: DimensionsValue.VALUE_285,
        },
      }}
      drawerContent={Props => <CustomDrawer {...Props} />}>
      <Drawer.Screen
        name={ScreenConstants.BOTTOM_STACk}
        component={BottomTab}
      />
      <Drawer.Screen
        name={ScreenConstants.MY_PROFILE_SCREEN}
        component={MyProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
