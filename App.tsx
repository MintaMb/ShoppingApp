import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/containers/SplashScreen';
import DrawerStack from './src/navigation/DrawerStack';
import MyProfileScreen from './src/containers/MyProfileScreen';
import ProductDetailScreen from './src/containers/ProductDtailScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="DrawerStack" component={DrawerStack} />
          <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
          <Stack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
