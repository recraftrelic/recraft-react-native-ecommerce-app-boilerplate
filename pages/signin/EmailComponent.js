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
import VerifyCount from '../../utilities/VerifyCount';

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
            mainText={'SIGN UP'}
            screenName={'Sign in'}
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
              placeholder={"Enter email"}
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
          
          <View style={styles.btnView}>

          </View>

          <View
            style={styles.btnContainer}
          >

          <ButtonContainer
          text={'SAVE EMAIL ADDRESS'}
          bgColor={'#126881'}
          textColor={'#FFFFFF'}
          image={""}
          onPressSignIn={onPressSignIn}
        />
        <ButtonContainer
              text={'RESEND LINK'}
              bgColor={'#ACBAC3'}
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

export default EmailComponent;