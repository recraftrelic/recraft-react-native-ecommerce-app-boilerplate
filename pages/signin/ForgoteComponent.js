import React, { useState,useRef, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  TextInput
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
  const onChangeNumber = () => {
    setInterval("")
  }

  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.mainView}>

        <View style={styles.upperHeader}>

          <HeaderContainer
            screenName={'Forgot password'}
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
                    borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
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