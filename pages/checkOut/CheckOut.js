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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";
import { colors } from "../../constants/colors/colors";
import checkOut from "../../constants/checkOut/checkOut.json";
import ButtonContainer from "../../utilities/ButtonContainer";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/checkOut/checkOutStyle";
import ModalSlide from "../../utilities/ModalSlide";

const CheckOut = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [buyBtn, setBuyBtn] = useState();
  const [isModalSuccess, setIsModalSuccess] = useState(false);

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
    setIsModalSuccess(!isModalSuccess)
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image style={styles.backButton} source={images.backButton}></Image>
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
            <TouchableOpacity onPress={payButton}>
              <View style={styles.wallet}>
                <Image
                  style={styles.purseIcon}
                  source={images.purseIcon}
                ></Image>
                <Text style={styles.pay}>{checkOut.pay}</Text>

                <Image source={images.next}></Image>
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
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                style={styles.content}
                contentContainerStyle={{
                  flexGrow: 1,
                }}
              >
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
                                borderBottomColor:
                                  index === internalVal.length
                                    ? colors.orange
                                    : colors.bluegreen,
                              },
                            ]}
                          >
                            <TextInput
                              style={styles.cellText}
                              onPress={() => textInput.focus()}
                              secureTextEntry={true}
                              keyboardType="numeric"
                            >
                              {internalVal[index]}
                            </TextInput>
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
              </KeyboardAwareScrollView>
            </View>
          </Modal>
        </View>
      </ScrollView>
      {/* <View style={styles.modalOpen}> */}
      
      <ModalSlide
      isModalVisible={isModalSuccess}
      imageSource={ images.slideUp }
      imageStyle={styles.slideUp}
      imageSuccess={images.success}
      successText={checkOut.success}
      successContent={checkOut.content}
      />
      
                 
      {/* </View> */}
    </SafeAreaView>
  );
};

export default CheckOut;
