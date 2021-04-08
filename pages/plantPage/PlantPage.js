import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import SearchProduct from "../../constants/searchProduct/searchProduct";
import FurniturePage from "../../constants/furniturePage/furniturePage.json";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/plantPage/plantPageStyle";

const PlantPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.headerField}>
          <Image source={images.backButton}></Image>
          <Text style={styles.heading}>{FurniturePage.headingOne}</Text>
          <Image source={images.cart}></Image>
        </View>
      </View>
      <SearchProduct />
    </SafeAreaView>
  );
};

export default PlantPage;
