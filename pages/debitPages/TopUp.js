import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import debitCard from "../../constants/debitcard/debitCard.json";
import { colors } from "../../constants/colors/colors";
import Routes from "../../constants/routes/routes";
import { images } from "../../utilities/Common";
import ButtonContainer from "../../utilities/ButtonContainer";
import { styles } from "../../styles/debitStyle/DebitStyle";

const length = 4;

const TopUp = ({ navigation }) => {
  const [state, setState] = useState({
    account,
    bank,
    accountNum,
    expire,
    security,
  });

  const qrCode = () => {
    navigation.navigate(Routes.PayScreen);
  };

  const { account, bank, accountNum, expire, security } = state;

  const onPressSignIn = () => {
    navigation.navigate(Routes.DebitCard);
  };

  const onChangeText = (key) => (val) => {
    setState({ ...state, [key]: val });
  };

  const forgotButton = () => {
    navigation.navigate(Routes.ForgotComponent);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.topup}>{debitCard.topUp}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.backButton} style={styles.image}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={qrCode} style={styles.qrImage}>
            <Image source={images.qr} />
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          style={styles.content}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={styles.inputview}>
            <Text style={styles.inputtxt}>{debitCard.input}</Text>

            <TextInput style={styles.input} placeholder="$0" />
            <View style={styles.imgrow}>
              <Image source={images.coin} />

              <Image source={images.coin2} />

              <Image source={images.coin3} />

              <Image source={images.coin4} />
            </View>

            <View style={styles.pricerow}>
              <Text style={styles.price}>$10</Text>
              <Text style={styles.price}>$50</Text>
              <Text style={styles.price}>$100</Text>
              <Text style={styles.price}>$200</Text>
            </View>
          </View>

          <View style={styles.cardimg}>
            <View>
              <Image source={images.card} style={styles.texthead} />
              <Text style={styles.headcard}>{debitCard.card}</Text>
              <Text style={styles.subcard}>{debitCard.payment}</Text>
              <TouchableOpacity
                onPress={onPressSignIn}
                style={styles.nextbutton}
              >
                <Image source={images.nextbtn} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.topupbtn}>
            <ButtonContainer
              text={debitCard.resendOne}
              bgColor={colors.darkGrey}
              textColor={colors.white}
              image={""}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TopUp;
