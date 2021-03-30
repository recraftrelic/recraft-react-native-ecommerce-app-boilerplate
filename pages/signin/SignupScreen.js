import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from '../../styles/signinstyle/CommonStyle';
import login from '../../constants/signin/login.json';
import { images } from '../../utilities/Common';
import HeaderContainer from '../../utilities/HeaderContainer';
import TextInputContainer from '../../utilities/TextInputContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import { moderateScale } from 'react-native-size-matters';

const SignupScreen = (props) => {
  const container = props.container
  const [state, setState] = useState({
    email,
    password,
    name,
    ConfirmPassword
    
  });

  const {
    email,
    password,
    name,
    ConfirmPassword

  } = state;

  const [check, setCheckStatus] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(true);
  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);

  const onPressSignIn = () => {
    alert(email + password)
  }

  const onChangeText = (key) => (val) => {
    setState({ ...state, [key]: val });
    console.log(key, 'value')

  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>

        <View style={styles.upperHeader}>

          <HeaderContainer
            mainText={'SIGN In'}
            screenName={'Sign up'}
          />
        </View>

        <KeyboardAwareScrollView
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          style={styles.centent}
          contentContainerStyle={{
            flexGrow: 1
          }}

        >
          <View style={styles.inputView}>

            <TextInputContainer
              value={name}
              placeholder={"Your name"}
              onChangeText={onChangeText('name')}
            />
            <TextInputContainer
              value={email}
              placeholder={"Your email"}
              onChangeText={onChangeText('email')}
            />
            <TextInputContainer
              value={password}
              placeholder={"Enter password"}
              secureTextEntry={showHidePassword}
              onChangeText={onChangeText('password')}
            />
            <TextInputContainer
            value={ConfirmPassword}
            placeholder={"Confirm password"}
            secureTextEntry={showHidePassword}
            onChangeText={onChangeText('confirmpassword')}
          />
          </View>

          <View style={styles.btnView}>

            <ButtonContainer
              text={'SIGN IN'}
              bgColor={'#126881'}
              textColor={'#FFFFFF'}
              image={""}
              onPressSignIn={onPressSignIn}
            />

          </View>

          <Text style={styles.media}>
            {login.media}
          </Text>

          <View
            style={styles.btnContainer}
          >

            <ButtonContainer
              text={'CONTINUE WITH GOOGLE'}
              bgColor={'#F6F6F7'}
              textColor={'#57636F'}
              image={images.google}

            />

            <ButtonContainer
              text={'CONTINUE WITH FACEBOOK'}
              bgColor={'#1877F2'}
              textColor={'#FFFFFF'}
              image={images.facebook}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>


  );
};

export default SignupScreen;