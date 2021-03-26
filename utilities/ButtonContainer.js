import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from '../styles/signinstyle/CommonStyle';
import login from '../constants/signin/login.json';
import { images } from '../utilities/Common';


const ButtonContainer = ({
  text,
  bgColor,
  textColor,
  image,
  onPressSignIn
}) => {


  return (
    <View>
      {
        image != "" ?

          <TouchableOpacity
            onPress={onPressSignIn}
            style={[styles.button,
            {
              backgroundColor: bgColor,
              flex: 1,
              flexDirection: 'row'
            }]}
          >
            <View style={{
              flex: 0.2,
            }}>
              <Image source={image} style={styles.images} />

            </View>

            <View style={{
              flex: 0.6,
            }}>
              <Text style={[styles.textBtn, { color: textColor }]}>
                {text}
              </Text>
            </View>

          </TouchableOpacity> :

          <TouchableOpacity
            onPress={onPressSignIn}
            style={[styles.button, { backgroundColor: bgColor }]}
          >
            <Text style={[styles.textBtn, { color: textColor }]}>
              {text}
            </Text>

          </TouchableOpacity>
      }
    </View>

  );
};

export default ButtonContainer;