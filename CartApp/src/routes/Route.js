import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from '../scenes/Splash/SplashScreen';
import CartItemsScreen from '../scenes/Cart/CartItemsScreen';
import AddressScreen from '../scenes/Cart/AddressScreen';
import CategoryCourseListScreen from '../scenes/Cart/CategoryCourseListScreen';
import WishlistScreen from '../scenes/Cart/WishlistScreen';
import HomeScreen from '../scenes/Cart/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import {
  HOME_SCREEN_NAME,
  CARTITEMS_SCREEN_NAME,
  CATEGORY_SCREEN_NAME,
  WISHLIST_SCREEN_NAME,
  ADDRESS_SCREEN_NAME,
} from '../utility/appConstant/AppConstants';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={HOME_SCREEN_NAME}
      drawerContent={props => <DrawerNavigation {...props} />}>
      <Drawer.Screen name={HOME_SCREEN_NAME} component={HomeScreen} />
      <Stack.Screen
        name={CATEGORY_SCREEN_NAME}
        component={CategoryCourseListScreen}
      />
      <Stack.Screen name={CARTITEMS_SCREEN_NAME} component={CartItemsScreen} />
      <Stack.Screen name={WISHLIST_SCREEN_NAME} component={WishlistScreen} />
      <Stack.Screen name={ADDRESS_SCREEN_NAME} component={AddressScreen} />
    </Drawer.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name={HOME_SCREEN_NAME} component={HomeScreen} />
      <Stack.Screen name={CARTITEMS_SCREEN_NAME} component={CartItemsScreen} />
      <Stack.Screen
        name={CATEGORY_SCREEN_NAME}
        component={CategoryCourseListScreen}
      />
      <Stack.Screen name={WISHLIST_SCREEN_NAME} component={WishlistScreen} />
      <Stack.Screen name="Root" component={Root} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name={ADDRESS_SCREEN_NAME} component={AddressScreen} />
    </Stack.Navigator>
  );
};

export default Route;
