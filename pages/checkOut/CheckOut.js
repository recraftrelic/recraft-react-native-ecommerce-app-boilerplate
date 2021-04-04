import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import checkOut from '../../constants/checkOut/checkOut.json'
import { styles } from "../../styles/checkOut/checkOutStyle";
import { images } from "../../utilities/Common";

const CheckOut = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image style={styles.backButton} source={images.backButton}></Image>
        <Text style={styles.heading}>{checkOut.heading}</Text>
      </View>
      <View style={styles.box}>
      <View style={styles.containerOne}>
          <Image style={styles.location} source={images.location}></Image>
          <Text style={styles.shipping}>{checkOut.shipping}</Text>
          <Text style={styles.edit}>{checkOut.edit}</Text>
      </View>
      <View style={styles.line}></View>
      </View>
    </SafeAreaView>
  );
};

export default CheckOut;
