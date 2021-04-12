import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-elements";
import furniturePage from "../../constants/furniturePage/furniturePage.json";
import main from "../../constants/furniturePage/furniturePageJs";
import Routes from "../../constants/routes/routes";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/furniturePage/furniturePageStyle";

const FurniturePage = ({ navigation }) => {
  const [furnitureProduct, setFurnitureProduct] = useState(main.data);

  const popularItem = () => {
    navigation.navigate(Routes.PlantPage)
  }
  const slideButton = () => {
    const addMoreData = [
      {
        name: "Drawer",
        quantity: "12 Items",
      },
      {
        name: "Plant",
        quantity: "20 Items",
      },
      {
        name: "Pillow",
        quantity: "15 Items",
      },
    ];
    if (furnitureProduct.length > 3) {
      const res = furnitureProduct.filter((el) => {
        return !addMoreData.find((element) => {
          return element.name === el.name;
        });
      });
      setFurnitureProduct(res);
      return;
    }
    const concatArray = furnitureProduct.concat(addMoreData);

    setFurnitureProduct(concatArray);
  };

  return (
    <SafeAreaView style={StyleSheet.main}>
      <View style={styles.container}>
        <View style={styles.headerField}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backButton}></Image>
          </TouchableOpacity>
          <Text style={styles.heading}>{furniturePage.heading}</Text>
          <Image source={images.cart}></Image>
        </View>
        <ScrollView>
          <View>
            <Text style={styles.category}>{furniturePage.category}</Text>
          </View>
          <View style={styles.src}>
            {furnitureProduct.map((item, id) => (
              <>
                <View style={styles.imageAlign}>
                  <View style={styles.boxImage}></View>

                  <View style={styles.text}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemQuantity}>{item.quantity}</Text>
                  </View>
                </View>
              </>
            ))}
          </View>
          <TouchableOpacity onPress={slideButton} style={styles.slideUp}>
            <Image source={images.slideUp}></Image>
          </TouchableOpacity>
          <Text style={styles.popular}>{furniturePage.popular}</Text>
          <View style={styles.popularList}>
            <FlatList
              vertical={true}
              data={main.dataPopular}
              
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={popularItem} key={index}>
                <View style={styles.menu}>
                  <View style={styles.boxOne}>
                    <Image></Image>
                  </View>
                  <View style={styles.boxTwo}>
                    <View style={styles.menuOne}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Image style={styles.icon} source={item.src}></Image>
                    </View>
                    <Text style={styles.amountOne}>{item.amount}</Text>
                    <View style={styles.menuTwo}>
                      <Rating
                        ratingCount={5}
                        startingValue={item.rating}
                        readonly={true}
                        imageSize={16}
                      ></Rating>
                      <Text style={styles.average}>{item.average}</Text>
                      <Image style={styles.iconOne} source={item.cart}></Image>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FurniturePage;
