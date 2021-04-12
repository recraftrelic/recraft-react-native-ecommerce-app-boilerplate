import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from 'react-native-size-matters'
import login from '../../constants/signin/login.json';
import { colors } from '../../constants/colors/colors';
import Routes from '../../constants/routes/routes';
import HeaderContainer from '../../utilities/HeaderContainer';
import TextInputContainer from '../../utilities/TextInputContainer';
import ButtonContainer from '../../utilities/ButtonContainer';
import { styles } from '../../styles/signinstyle/CommonStyle';

const PhoneScreen = ({ navigation }) => {
  
  const [state, setState] = useState({
    email,
    password
  });

  const {
    email,
    password
  } = state;

  const onPressSignIn = () => {
    navigation.navigate(Routes.PasswordScreen)
  }

  const onChangeText = (key) => (val) => {
    setState({ ...state, [key]: val });
  };

  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.mainView}>
        <View style={styles.upperHeader}>
          <HeaderContainer
            screenName={login.phone}
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
              value={email}
              placeholder={login.inputphone}
              onChangeText={onChangeText('email')}
            />
          </View>
          
          <View style={[styles.btnView,
            {
                marginTop: moderateScale(250)
            }]
            }>
            <ButtonContainer
              text={login.phonebtn}
              bgColor={colors.blue}
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

export default PhoneScreen;