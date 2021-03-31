import React, { useState,useRef, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from 'react-native-size-matters';

import login from '../../constants/signin/login.json';
import { colors } from '../../constants/colors/colors';
import HeaderContainer from '../../utilities/HeaderContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import VerifyCount from '../../utilities/VerifyCount';
import { styles } from '../../styles/signinstyle/CommonStyle';

const ForgoteComponent = (props) => {
  const container = props.container
  const [state, setState] = useState({
    email,
    password
  });
  const lengthInput = 4;
  let textInput = useRef(null)

  const [internalVal, setInternalVal] = useState('');

  const {
    email,
    password
  } = state;

  const onPressSignIn = () => {
    alert(email + password)
  }
  const onChangeText = (val) => {
    setInternalVal(val)
  }

  useEffect(() => {
    textInput.focus()
  }, [])

  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.mainView}>
        <View style={styles.upperHeader}>
          <HeaderContainer
            screenName={login.forgotepassword}
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
          <View style={styles.forgoteView}>
          <View>
            <TextInput
              ref={(input) => textInput = input}
              value={internalVal}
              onChangeText={onChangeText}
              secureTextEntry={true}
              style={styles.passwordInput}
              maxLength={lengthInput}
              returnKeyType='done'
              keyboardType='numeric'
            />
          </View>

          <View style={styles.containerInput}>
            {
              Array(lengthInput).fill().map((data, index) => {
                return <View
                  key={index}
                  style={[styles.cellView,
                  {
                    borderBottomColor: index === internalVal.length ? colors.orange : colors.bluegreen
                   }]}>
                  <Text style={styles.cellText}
                    onPress={() => textInput.focus()}
                  >
                    {internalVal[index]}
                  </Text>
                </View>
              })

            }
          </View>
          </View>
          <View
          style={{
            flex: 0.2,
            alignItems: 'center',
            marginLeft: moderateScale(30),
            padding: moderateScale(12)
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

export default ForgoteComponent;