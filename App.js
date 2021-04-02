import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SearchPage from './pages/productPages/SearchPage';
import ProductDetail from './pages/productPages/ProductDetail';
import SigningScreen from './pages/signin/SigningScreen';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
        name="mainPage"
        component={SearchPage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="productDetail"
        component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;