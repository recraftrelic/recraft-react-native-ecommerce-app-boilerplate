import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './loginStyles3';
import login from './login3.json';
import { images } from '../utilities/images'
import { useRef } from 'react/cjs/react.development';
import { useEffect } from 'react';

const Loginscreen3 = () => {
  const defaultCountdown = 30;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [check, setCheckStatus] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [internalVal, setInternalVal] = useState('');
  const [countDown, setCountDown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);





  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  let clockCall = null
  let textInput = useRef(null)
  const lengthInput = 4;

  const onChangeText = (val) => {
    setInternalVal(val)
  }

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000)
    return () => {
      clearInterval(clockCall)
    }
  })
  const decrementClock = () => {
    if (countDown === 0) {
      setEnableResend(true)
      setCountDown(0)
      clearInterval(clockCall)
    } else {
      setCountDown(countDown - 1)
    }

  }
  //  const onChangeText = (val) => {
  //      setInternalVal(val)
  //  }


  const onEnterText = (password) => {
    setPassword(password);
    if (password.trim().length < 8) {
      setPasswordErrorStatus(true);
    } else {
      setPasswordErrorStatus(false);
    }
  }
  const onEnterText1 = (inputPassword) => {
    setInputPassword(inputPassword)
    if (inputPassword.trim().length < 8) {
      setPasswordErrorStatus(true);
    } else {
      setPasswordErrorStatus(false);
    }
  }

  const onEnterEmail = (value) => {
    console.log(value, "989898")
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (reg.test(value)) {
      setEmailErrorStatus(false);
    } else {
      if (value !== "") {
        setEmailErrorStatus(true);
      }
    }
    setEmail(value);
  }

  const onLogin = () => {

    if (password !== inputPassword) {
      alert("Passwords don't match");
    } else {
      setPasswordErrorStatus(false);
      alert(`${email} + ${password}`);

    }
  };
  useEffect(() => {
    textInput.focus()
  }, [])
  const onChangeNumber = () => {
    setInterval("")
  }

  const onResendOTP = () => {
    if (enableResend) {
      setCountDown(defaultCountdown)
      setEnableResend(false)
      clearInterval(clockCall)
      clockCall = setInterval(() => {
        decrementClock()
      }, 1000);
    }

  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headText}>
          <Text style={styles.headerStyle}>
            {login.signUp}
          </Text>
          <Text style={styles.subHeaderStyle}>
            {login.text}
          </Text>
          <Text style={styles.subHeaderStyle1}>
            {login.text1}
          </Text>

        </View>
      </View>

      <View style={styles.main}>
        <KeyboardAwareScrollView enableOnAndroid={true}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.inputView}>
            <View>
              <TextInput
                ref={(input) => textInput = input}
                value={internalVal}
                onChangeText={onChangeText}
                // secureTextEntry={showHidePassword}
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
          <View>
            <Text style={styles.emailTxt}>
              Code was send your email
              </Text>
          </View>
          <View>
            <Text style={styles.email}>
              Kylie_04@gmail.com
              </Text>
          </View>


          <View style={styles.bottomView}>
            <TouchableOpacity onPress={onChangeNumber}>
              <View style={styles.btnChangeNumber}>
                <Text style={styles.textChange}>
                  This code will expire on
            </Text>

              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onResendOTP}>
              <View style={styles.btnResned}>
                <Text style={[styles.textResend,
                {
                  color: enableResend ? '#126881' : '#234DB7'
                }]}>
                  {countDown} seconds
            </Text>

              </View>
            </TouchableOpacity>

          </View>
          <View style={styles.googleView}>
            <TouchableOpacity style={styles.googlebtn}
              onPress={onLogin}>
              <Image source={images.google} style={styles.googleImg} />
              <Text style={styles.googleTxt}>
                {login.google}
              </Text>

            </TouchableOpacity>

          </View>
          <View>
            <TouchableOpacity style={styles.facebokBtn}
              onPress={onLogin}>
              <Image source={images.Facebook} style={styles.facebookImg} />
              <Text style={styles.facebookText}>
                {login.Facebook}
              </Text>

            </TouchableOpacity>

          </View>

        </KeyboardAwareScrollView>

      </View>
    </>
  );
};

export default Loginscreen3;