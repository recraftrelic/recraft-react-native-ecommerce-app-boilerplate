import React,{useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from '../../styles/signinstyle/CommonStyle';
import login from '../../constants/signin/login.json';
import { images } from '../../utilities/Common';
import HeaderContainer from '../../utilities/HeaderContainer';


const ForgoteComponent = () => {
  
  return (
    <HeaderContainer
      screenName={'Forgot password'}
    />

  );
};

export default ForgoteComponent;