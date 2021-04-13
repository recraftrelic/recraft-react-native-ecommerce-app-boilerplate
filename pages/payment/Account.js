import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import payment from '../../constants/payment/payment.json'
import Routes from '../../constants/routes/routes';
import { images } from '../../utilities/Common';
import { styles } from '../../styles/paymentStyle/PaymentStyle';

const length = 4
const Account = ({ navigation }) => {
  const [state, setState] = useState({
    account,
    bank,
    accountNum,
    expire,
    security
  });

  const {
    account,
    bank,
    accountNum,
    expire,
    security
  } = state;

  const onPressSignIn = () => {
    navigation.navigate(Routes.DebitCard)
  }
  const Goback = () => {
    navigation.navigate(Routes.PayScreen)
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>

        <View style={styles.header}>


          <View style={styles.inputview}>
            <Text style={styles.topup}>
              {payment.topUp}

            </Text>
            <TouchableOpacity
            onPress={Goback}
            style={styles.image}
          >
          <Image source={images.backButton}
              />

          </TouchableOpacity>


            
            <TextInput
              placeholder={payment.account}
              style={styles.txtinput}
            >


            </TextInput>
            <Image source={images.searchbar}
              style={styles.srchicon}
            />
            <View
              style={styles.view}
            >

              <Image source={images.bank}
                style={styles.bank}
              />
              <Text
                style={styles.account}
              >
                {payment.placeholder}

              </Text>
              <Text
                style={styles.banktext}
              >
                {payment.bank}


              </Text>
              <TouchableOpacity
                onPress={onPressSignIn}

                style={styles.nextbutton}
              >

                <Image source={images.nextbtn} />
              </TouchableOpacity>
            </View>
          </View>
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
          <View
            style={styles.subview}
          >
            <Text
              style={styles.list}
            >
              {payment.list}

            </Text>
            <Image source={images.avaliable}
              style={styles.notimage}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>


  );
};

export default Account;