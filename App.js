import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import IntroScreenOne from './pages/introscreens/IntroScreenOne';
import MainPage from './pages/introscreens/MainPage';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
        name="intro1"
        component={IntroScreenOne}
        options={{headerShown: false}}
        /> */}
        <Stack.Screen
        name="mainPage"
        component={MainPage}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;