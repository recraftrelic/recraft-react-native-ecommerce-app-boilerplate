import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from '../styles/signinstyle/CommonStyle';
import login from '../constants/signin/login.json';

const HeaderContainer = ({
  mainText,
  screenName
}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {
              mainText
            }
          </Text>
          <View>
            <Text
              style={styles.subHead}>
              {
                screenName
              }
            </Text>
          </View>

          <Text style={styles.heading}>
            {login.text}
          </Text>
          <Text style={styles.subheading}>
            {login.text1}
          </Text>

        </View>
    </View>

  );
};

export default HeaderContainer;