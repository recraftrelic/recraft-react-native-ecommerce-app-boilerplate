import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import login from '../../constants/signin/login.json';
import { colors } from '../../constants/colors/colors';
import HeaderContainer from '../../utilities/HeaderContainer';
import TextInputContainer from '../../utilities/TextInputContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import VerifyCount from '../../utilities/VerifyCount';
import { styles } from '../../styles/signinstyle/CommonStyle';

const EmailComponent = (props) => {
  const container = props.container
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

  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.mainView}>
        <View style={styles.upperHeader}>
          <HeaderContainer
            screenName={login.enteremail}
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
              placeholder={login.emailaddress}
              onChangeText={onChangeText('email')}
            />
          </View>
          
          <View
          style={{
            flex: 0.2,
            alignItems: 'center',
          }}
          >
          <VerifyCount/>
          
          </View>

          <View
            style={styles.btnContainer}
          >
          <ButtonContainer
          text={login.saveaddress}
          bgColor={colors.blue}
          textColor={colors.white}
          image={""}
          onPressSignIn={onPressSignIn}
        />
        <ButtonContainer
              text={login.resend}
              bgColor={colors.darkGrey}
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

export default EmailComponent;