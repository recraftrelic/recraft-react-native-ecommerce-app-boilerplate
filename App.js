import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './constants/routes/routes';
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
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        {/* <Stack.Screen
        name={Routes.mainPage}
        component={IntroScreenOne}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.SignUp}
        component={SignupScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.SignIn}
        component={SigningScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.ForgotComponent}
        component={ForgoteComponent}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.EmailComponent}
        component={EmailComponent}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.PhoneScreen}
        component={PhoneScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.PasswordScreen}
        component={PasswordScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.MainPage}
        component={MainPage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.ProfilePage}
        component={ProfilePage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={Routes.SearchPage}
        component={SearchPage}
        options={{headerShown: false}}
        /> */}
        <Stack.Screen
        name={Routes.ShoppingCart}
        component={ShoppingCart}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;