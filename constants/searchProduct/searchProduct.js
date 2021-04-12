import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import product from "../../constants/products/product.json";
import products from "../../constants/products/Products";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/productstyle/ProductStyle";

const searchProduct = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.search}>
          <Text style={styles.textStyle}>{product.items}</Text>
        </View>
        <View>
          <Image source={images.filters} style={styles.filters} />
        </View>
        <View style={styles.flatlistView}>
          <FlatList
            data={products.dataPlant}
            renderItem={({ item, index }) => (
              <View key={index}>
                <TouchableOpacity>
                  <Image source={item.src} style={styles.products}></Image>
                </TouchableOpacity>

                <Image source={item.pic} style={styles.photo}></Image>

                <Text style={styles.txt}>{item.text}</Text>
                <Image source={item.photo} style={styles.img}></Image>
                <Text style={styles.rate}>{item.ratting}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default searchProduct;
