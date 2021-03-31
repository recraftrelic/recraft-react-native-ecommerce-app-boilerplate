import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import { styles } from '../styles/signinstyle/CommonStyle';
import login from '../constants/signin/login.json';
import { moderateScale } from 'react-native-size-matters';


const VerifyCount = () => {
  const defaultCountdown = 30;

  const [countDown, setCountDown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);

  let clockCall = null;
  let textInput = useRef(null);
  const lengthInput = 4;

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
        <View>
            <Text
                style={{
                    color: '#ACBAC3'
                }}
            >
                {login.code}
      </Text>
            <Text
                style={{
                    color: '#126881',
                    marginLeft: moderateScale(18)
                }}
            >
               {login.emailcode}
      </Text>
           
            <TouchableOpacity onPress={onResendOTP}>
            <View>
            
            <Text
                style={{
                    color: '#ACBAC3',
                    marginTop: moderateScale(90)
                }}
            >
                {login.expire}
      </Text>
            </View>
                <View style={styles.count}>
                    <Text style={[styles.textResend,
                    {
                        color: enableResend ? '#126881' : '#234DB7'
                    }]}>
                        {countDown} {login.seconds}
            </Text>

                </View>
            </TouchableOpacity>
        </View>

    );
};

export default VerifyCount;