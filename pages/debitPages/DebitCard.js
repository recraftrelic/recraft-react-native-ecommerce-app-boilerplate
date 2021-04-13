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
import TextInputContainer from "../../utilities/TextInputContainer";
import ButtonContainer from "../../utilities/ButtonContainer";
import { styles } from "../../styles/debitStyle/DebitStyle";

const length = 4;
const DebitCard = ({ navigation }) => {
  const [state, setState] = useState({
    account,
    bank,
    accountNum,
    expire,
    security,
  });

  const { account, bank, accountNum, expire, security } = state;

  const onPressSignIn = () => {
    navigation.navigate(Routes.ConfirmScreen);
  };

  const onChangeText = (key) => (val) => {
    setState({ ...state, [key]: val });
  };

  const Goback = () => {
    navigation.navigate(Routes.TopUp);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.topup}>Top Up</Text>
          <TouchableOpacity onPress={Goback} style={styles.image}>
            <Image source={images.backButton} />
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
          <View style={styles.inputView}>
            <Text style={styles.debit}>Add a debit card</Text>
            <TextInputContainer
              value={account}
              placeholder={debitCard.placeholder}
              onChangeText={onChangeText("account")}
            />

            <TextInputContainer
              value={bank}
              placeholder={debitCard.bank}
              onChangeText={onChangeText("bank")}
            />
            <TextInputContainer
              value={accountNum}
              placeholder={debitCard.accountNum}
              onChangeText={onChangeText("accountNum")}
              keyboardType="numeric"
            />
            <View style={styles.outter}>
              <TextInput
                placeholder="Expire"
                keyboardType="numeric"
                style={styles.expire}
              />

              <TextInput
                placeholder="Security code"
                secureTextEntry={true}
                maxLength={length}
                keyboardType="numeric"
                style={styles.security}
              />
            </View>
          </View>

          <View style={styles.btn}>
            <ButtonContainer
              text={debitCard.add}
              bgColor={colors.darkGrey}
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

export default DebitCard;
