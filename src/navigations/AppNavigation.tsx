import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SellerScreen from '../screens/SellerScreen/SellerScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SellerScreen" component={SellerScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
