import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SellerScreen from '../screens/SellerScreen/SellerScreen';
import AddProduct from '../screens/Product/AddProduct';
import Product from '../screens/Product/Product';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SellerScreen" component={SellerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" component={Product} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
