import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreen1 from './Ecommecre/introScreens/IntroScreen1';
import LoginScreen1 from './component/loginScreen1/Loginscreen1';
import LoginScreen2 from './component/loginScreen2/Loginscreen2.js';
import Loginscreen3 from './component/loginScreen3/Loginscreen3';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="intro1"
        component={Loginscreen3}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;