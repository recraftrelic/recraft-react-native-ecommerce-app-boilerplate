import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FurniturePage from "../../constants/furniturePage/furniturePage.json";
import { images } from "../../utilities/Common";
import SearchPage from '../../pages/productPages/SearchPage'
import { styles } from "../../styles/plantPage/plantPageStyle";

const PlantPage = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.headerField}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={images.backButton}></Image>
            </TouchableOpacity>
            <Text style={styles.heading}>{FurniturePage.headingOne}</Text>
            <Image source={images.cart}></Image>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 0,
            marginVertical: 50,
            width: '100%'
          }}
        >
          <SearchPage
            showSearch= {true}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PlantPage;
