import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from 'react-native-size-matters';

import login from '../../constants/signin/login.json';
import { colors } from '../../constants/colors/colors';
import HeaderContainer from '../../utilities/HeaderContainer';
import TextInputContainer from '../../utilities/TextInputContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import { styles } from '../../styles/signinstyle/CommonStyle';

const PasswordScreen = ({navigation}) => {
 
  const [state, setState] = useState({
    email,
    password,
    confirmPassword
  });

  const {
    email,
    password,
    confirmPassword
  } = state;
  const [showHidePassword, setShowHidePassword] = useState(true);

  const onPressSignIn = () => {
    navigation.navigate('MainPage')
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
            screenName={login.setpassword}
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
          placeholder={login.newpassword}
          secureTextEntry={showHidePassword}
          onChangeText={onChangeText('password')}
        />

            <TextInputContainer
              value={confirmPassword}
              placeholder={login.confirmnewpass}
              secureTextEntry={showHidePassword}
              onChangeText={onChangeText('confirmpassword')}
            />
          </View>

          <View style={[styles.btnView,
            {
                marginTop: moderateScale(200)
            }
            ]}>
            <ButtonContainer
              text={login.savepassword}
              bgColor={colors.blue}
              textColor={colors.white}
              image={""}
              onPressSignIn={onPressSignIn}
            />
          </View>

        </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>


  );
};

export default PasswordScreen;