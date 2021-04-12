import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import login from '../../constants/signin/login.json';
import { colors } from '../../constants/colors/colors';
import Routes from '../../constants/routes/routes';
import { images } from '../../utilities/Common';
import HeaderContainer from '../../utilities/HeaderContainer';
import TextInputContainer from '../../utilities/TextInputContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import { styles } from '../../styles/signinstyle/CommonStyle';

const SignupScreen = ({ navigation }) => {
  
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

  const [showHidePassword, setShowHidePassword] = useState(true);
  const onPressSignIn = () => {
    navigation.navigate(Routes.SignIn)
  }

  const onChangeText = (key) => (val) => {
    setState({ ...state, [key]: val });
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.upperHeader}>

          <HeaderContainer
            mainText={login.button}
            screenName={login.signup}
          />
        </View>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          style={styles.content}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <View style={styles.inputView}>
            <TextInputContainer
              value={name}
              placeholder={login.name}
              onChangeText={onChangeText('name')}
            />
            <TextInputContainer
              value={email}
              placeholder={login.email}
              onChangeText={onChangeText('email')}
            />
            <TextInputContainer
              value={password}
              placeholder={login.password}
              secureTextEntry={showHidePassword}
              onChangeText={onChangeText('password')}
            />
            <TextInputContainer
            value={ConfirmPassword}
            placeholder={login.confirm}
            secureTextEntry={showHidePassword}
            onChangeText={onChangeText('confirmpassword')}
          />
          </View>

          <View style={styles.btnView}>
            <ButtonContainer
              text={login.button}
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

export default SignupScreen;