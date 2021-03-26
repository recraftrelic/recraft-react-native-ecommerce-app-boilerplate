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

const SigningScreen = (props) => {
  const container = props.container
  const [state, setState] = useState({
    email,
    password
  });

  const {
    email,
    password
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
            screenName={'Set a new password'}
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
          value={password}
          placeholder={"Enter new password"}
          secureTextEntry={showHidePassword}
          onChangeText={onChangeText('password')}
        />

            <TextInputContainer
              value={password}
              placeholder={"Confirm new password"}
              secureTextEntry={showHidePassword}
              onChangeText={onChangeText('password')}
            />

          </View>

          <View style={[styles.btnView,
            {
                marginTop: moderateScale(200)
            }
            ]}>

            <ButtonContainer
              text={'SAVE PASSWORD'}
              bgColor={'#126881'}
              textColor={'#FFFFFF'}
              image={""}
              onPressSignIn={onPressSignIn}
            />

          </View>

        </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>


  );
};

export default SigningScreen;