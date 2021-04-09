import React, { useState, useRef } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../constants/colors/colors";
import checkOut from "../../constants/checkOut/checkOut.json";
import Routes from "../../constants/routes/routes";
import ButtonContainer from "../../utilities/ButtonContainer";
import { images } from "../../utilities/Common";
import ModalSlide from "../../utilities/ModalSlide";
import { styles } from "../../styles/checkOut/checkOutStyle";

const CheckOut = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [buyBtn, setBuyBtn] = useState();
  const [isSuccessVisible, setSuccessVisible] = useState(false);
  const [backward, setBackward] = useState();

  const payButton = () => {
    setModalVisible(!isModalVisible);
  };
  const [internalVal, setInternalVal] = useState("");

  const onChangeText = (val) => {
    setInternalVal(val);
  };

  const lengthInput = 4;
  let textInput = useRef(null);

  const buyButton = () => {
    setSuccessVisible(!isSuccessVisible);
    setModalVisible(false);
  };

  const continueButton = () => {
    navigation.navigate(Routes.FurniturePage)
    setSuccessVisible(false);
  }

  const wallet = () => {
    navigation.navigate(Routes.TopUp)
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => 
           navigation.goBack()
          }
        >
          <Image style={styles.backButton} source={images.backButton}></Image>
        </TouchableOpacity>
        <Text style={styles.heading}>{checkOut.heading}</Text>
      </View>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.containerOne}>
            <Image style={styles.location} source={images.location}></Image>
            <Text style={styles.shipping}>{checkOut.shipping}</Text>
            <Text style={styles.edit}>{checkOut.edit}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.detail}>
            <Text style={styles.name}>{checkOut.name}</Text>
            <Text style={styles.address}>{checkOut.address}</Text>
            <Text style={styles.address}>{checkOut.city}</Text>
            <Text style={styles.address}>{checkOut.state}</Text>
            <Text style={styles.address}>{checkOut.phone}</Text>
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View style={styles.brandAlign}>
            <View style={styles.boxOne}></View>
            <View style={styles.brandDisplay}>
              <Text style={styles.brand}>{checkOut.brand}</Text>
              <Text style={styles.color}>{checkOut.color}</Text>
              <Text style={styles.amount}>{checkOut.amount}</Text>
            </View>
            <View style={styles.multi}>
              <Text>{checkOut.multi}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerThree}>
          <View style={styles.ServiceDelivery}>
            <Text style={styles.delivery}>{checkOut.delivery}</Text>
            <Text style={styles.edit}>{checkOut.edit}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.expressDelivery}>
            <Text style={styles.express}>{checkOut.express}</Text>
            <Text style={styles.express}>{checkOut.dollar}</Text>
          </View>
        </View>
        <View style={styles.containerFour}>
          <Text style={styles.description}>{checkOut.description}</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.containerThree}>
          <View style={styles.paymentOption}>
            <Text style={styles.payment}>{checkOut.payment}</Text>
            <TouchableOpacity onPress={wallet} >
              <View style={styles.wallet}>
                <Image
                  style={styles.purseIcon}
                  source={images.purseIcon}
                ></Image>
                <Text style={styles.pay}>{checkOut.pay}</Text>
                <Image style={styles.next} source={images.next}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.lineTwo}></View>
          <View style={styles.containerFive}>
            <View style={styles.paymentOptionOne}>
              <Text style={styles.product}>{checkOut.product}</Text>
              <Text style={styles.product}>{checkOut.payOne}</Text>
            </View>
            <View style={styles.paymentOptionOne}>
              <Text style={styles.product}>{checkOut.ship}</Text>
              <Text style={styles.product}>{checkOut.payTwo}</Text>
            </View>
            <View style={styles.paymentOptionOne}>
              <Text style={styles.product}>{checkOut.total}</Text>
              <Text style={styles.product}>{checkOut.payThree}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerSix}>
          <Text style={styles.drop}>{checkOut.drop}</Text>
          <Image source={images.not}></Image>
        </View>
        <View style={styles.upperLine}>
          <View style={styles.subOne}>
            <Text>{checkOut.sub}</Text>
            <Text style={styles.amountOne}>{checkOut.price}</Text>
          </View>
          <View style={styles.btn}>
            <ButtonContainer
              text={checkOut.button}
              bgColor={colors.blue}
              textColor={colors.white}
              image={""}
              onPressSignIn={payButton}
            />
          </View>
        </View>
        <View style={styles.modal}>
          <Modal
            isVisible={isModalVisible}
            transparent={true}
            animated
            style={{
              justifyContent: "flex-end",
            }}
            swipeDirection={["down", "up"]}
            onSwipeComplete={() => setModalVisible(!isModalVisible)}
          >
            <View style={styles.modalOpen}>
              <Image style={styles.slideUp} source={images.slideUp}></Image>
              <Text style={styles.pin}>{checkOut.pin}</Text>
              <View style={styles.forgotView}>
                <View style={styles.containerInput}>
                  {Array(lengthInput)
                    .fill()
                    .map((data, index) => {
                      return (
                        <View
                          key={index}
                          style={[
                            styles.cellView,
                            {
                              borderBottomColor: index === internalVal.length,
                            },
                          ]}
                        >
                          <TextInput
                            ref={(input) => (textInput = input)}
                            style={styles.cellText}
                            secureTextEntry={true}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType="done"
                          ></TextInput>
                        </View>
                      );
                    })}
                </View>
                <View style={styles.displayPin}>
                  <Text style={styles.forgotPin}>{checkOut.forgotPin}</Text>
                </View>
                <View style={styles.btn}>
                  <ButtonContainer
                    text={checkOut.button}
                    bgColor={colors.blue}
                    textColor={colors.white}
                    image={""}
                    onPressSignIn={buyButton}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
      <View>
        <ModalSlide
          isSuccessVisible={isSuccessVisible}
          imageSource={images.slideUp}
          imageStyle={styles.slideUp}
          imageSuccess={images.success}
          successText={checkOut.success}
          successContent={checkOut.content}
          text={checkOut.buttonOne}
          textColor={colors.white}
          bgColor={colors.blue}
          buttonStyle={styles.shoppingButton}
          onSwipeComplete={() => setSuccessVisible(!isSuccessVisible)}
          onPress={continueButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckOut;
