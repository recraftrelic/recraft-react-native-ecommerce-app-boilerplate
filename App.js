import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreenOne from './pages/introscreens/IntroScreenOne';

import SigningScreen from './pages/signin/SigningScreen';
import SignupScreen from './pages/signin/SignupScreen';
import ForgoteComponent from './pages/signin/ForgoteComponent';
import EmailComponent from './pages/signin/EmailComponent';
import PhoneScreen from './pages/signin/PhoneScreen';
import PasswordScreen from './pages/signin/PasswordScreen';
import Loginscreen3 from './pages/signin/Loginscreen3';


const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="intro1"
        // component={SigningScreen}
        // component={SignupScreen}
        // component={ForgoteComponent}
        // component={EmailComponent}
        // component={PhoneScreen}
        // component={PasswordScreen}
        component={Loginscreen3}

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