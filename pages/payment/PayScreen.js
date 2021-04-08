import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import payment from '../../constants/payment/payment.json';
import Routes from '../../constants/routes/routes';
import { images } from '../../utilities/Common';
import { styles } from '../../styles/payscreenStyle/payStyle';

const PayScreen = ({ navigation }) => {
  const [state, setState] = useState({
    email,
    password
  });

  const {
    email,
    password
  } = state;

  const onPressSignIn = () => {
    navigation.navigate(Routes.Account)
  }

  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.mainView}>

        <View style={styles.upperHeader}>
        <Text style={styles.topup}>
        {payment.pay}
        

        </Text>
        <Image source={images.backButton}
            style={styles.image}
        />
          

        <Image source={images.addImage}
            style={styles.imagecrop}
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
          <View style={styles.imgflax}>
          <Image source={images.scan}
          style={styles.scan}
      />

      <Text
      style={styles.qrscan}
      >
      {payment.camera}
      </Text>
          </View>
          

          <View style={styles.payview}>
          <Text
          style={styles.pay}
          >
          {payment.send}
          </Text>

          <View
              style={styles.imgrow}
            >

              <Image source={images.phone} />
            <TouchableOpacity
            onPress={onPressSignIn}
            >
            <Image source={images.accountbank} />
            
            </TouchableOpacity>

              <Image source={images.code} />


            </View>

        </View>

          
          
        </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>


  );
};

export default PayScreen;