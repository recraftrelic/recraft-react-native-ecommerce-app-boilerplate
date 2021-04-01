import React from 'react';
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
import MainPage from './pages/introscreens/MainPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import SearchPage from './pages/productPages/SearchPage';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
        name="mainPage"
        component={IntroScreenOne}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="signin"
        component={SigningScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="ForgoteComponent"
        component={ForgoteComponent}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="EmailComponent"
        component={EmailComponent}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="PhoneScreen"
        component={PhoneScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;