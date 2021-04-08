import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import debitCard from '../../constants/debitcard/debitCard.json'
import Routes from '../../constants/routes/routes';
import { colors } from '../../constants/colors/colors';
import ModalSlide from '../../utilities/ModalSlide';
import { images } from '../../utilities/Common';
import ButtonContainer from '../../utilities/ButtonContainer';
import VerifyCount from '../../utilities/VerifyCount';
import { styles } from '../../styles/debitStyle/DebitStyle';


const ConfirmScreen = ({ navigation }) => {

  const [state, setState] = useState({
    email,
    password
  });
  const lengthInput = 4;
  let textInput = useRef(null)

  const [internalVal, setInternalVal] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSuccessVisible, setSuccessVisible] = useState(false);

  const {
    email,
    password
  } = state;

  const onPressSignIn = () => {
    setSuccessVisible(!isSuccessVisible);
    setModalVisible(false);
  }
  const onChangeText = (val) => {
    setInternalVal(val)
  }

  const Goback = () => {
    navigation.navigate(Routes.DebitCard)
  }
  useEffect(() => {
    textInput.focus()
  }, [])

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.topup}>
            Top Up
        </Text>
          <TouchableOpacity
            onPress={Goback}
            style={styles.image}
          >
            <Image source={images.backButton}

            />
          </TouchableOpacity>
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
          <Text
            style={styles.debit}
          >
            {debitCard.confirmPhone}

          </Text>
          <View>
            <Text
              style=
              {styles.code}
            >
              {debitCard.sendCode}
            </Text>
          </View>
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
            style={styles.verify}
          >
            <VerifyCount />
          </View>

          <View
            style={styles.btnContainer}
          >
            <ButtonContainer
              text={debitCard.verify}
              bgColor={colors.blue}
              textColor={colors.white}
              image={""}
              onPressSignIn={onPressSignIn}
            />
            <ButtonContainer
              text={debitCard.resendOne}
              bgColor={colors.darkGrey}
              textColor={colors.white}
              image={""}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View>
        <ModalSlide
          isSuccessVisible={isSuccessVisible}
          imageSource={images.slideUp}
          imageSuccess={images.success}
          successText={debitCard.success}
          successContent={debitCard.thanks}
          text={debitCard.continue}
          textColor={colors.white}
          bgColor={colors.blue}
          onSwipeComplete={() => setSuccessVisible(!isSuccessVisible)}
        />
      </View>
    </SafeAreaView>


  );
};

export default ConfirmScreen;