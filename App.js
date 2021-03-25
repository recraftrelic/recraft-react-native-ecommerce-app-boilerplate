import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreenOne from './pages/introscreens/IntroScreenOne';
import Loginscreen3 from './component/loginScreen3/Loginscreen3';
import LoginScreen1 from './component/loginScreen1/Loginscreen1';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="intro1"
        component={LoginScreen1}
        options={{headerShown: false}}
        />

        {/* <Stack.Screen
        name="intro2"
        component={IntroScreen2}
        options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;