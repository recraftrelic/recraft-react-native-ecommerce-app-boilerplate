import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import login from '../../constants/signin/login.json';
import { colors } from '../../constants/colors/colors';
import { images } from '../../utilities/Common';
import HeaderContainer from '../../utilities/HeaderContainer';
import TextInputContainer from '../../utilities/TextInputContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import { styles } from '../../styles/signinstyle/CommonStyle';
import { NavigationContainer } from '@react-navigation/native';

const SigningScreen = ({navigation}) => {
  // const container = props.container
  const [state, setState] = useState({
    email,
    password
  });

  const {
    email,
    password
  } = state;

  const onPressSignIn = () => {
    alert(email + password)
  }

  const onChangeText = (key) => (val) => {
    setState({ ...state, [key]: val });
    console.log(key, 'value')

  };

  const forgotButton = () => {
    navigation.navigate('ForgoteComponent')
  }
  console.log(colors, 'asdasd')
  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.mainView}>

        <View style={styles.upperHeader}>
          <HeaderContainer
            mainText={login.headername}
            screenName={login.signIn}
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
              value={email}
              placeholder={login.placeholder}
              onChangeText={onChangeText('email')}
            />

            <TextInputContainer
              value={password}
              placeholder={login.password}
              secureTextEntry
              onChangeText={onChangeText('password')}
            />

          </View>
          <Text style={styles.forgote} onPress={forgotButton}>
            {login.forgotepassword}
          </Text>

          <View style={styles.btnView}>
            <ButtonContainer
              text={login.button1}
              bgColor={colors.blue}
              textColor={colors.white}
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
              text={login.google}
              bgColor={colors.lightGrey}
              textColor={colors.darkBlue}
              image={images.google}
            />

            <ButtonContainer
              text={login.facebook}
              bgColor={colors.navyBlue}
              textColor={colors.white}
              image={images.facebook}
            />
          </View>
        </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>


  );
};

export default SigningScreen;