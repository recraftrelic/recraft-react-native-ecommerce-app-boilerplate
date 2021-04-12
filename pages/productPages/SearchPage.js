import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import product from "../../constants/products/product.json";
import mainPage from "../../constants/mainpage/mainpage.json";
import products from "../../constants/products/Products";
import Routes from "../../constants/routes/routes";
import SearchBar from "../../component/common/SearchBar";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/productstyle/ProductStyle";

const { width, height } = Dimensions.get("screen");

const MainPage = ({ navigation, showSearch }) => {
  const [searchBar, setSearchBar] = useState(true);
  useEffect(() => {
    if (showSearch) {
      setSearchBar(false);
    }
  });
  return (
    <SafeAreaView style={styles.main}>
      {searchBar ? (
        <View style={styles.container}>
          <SearchBar
            style={styles.searchbar}
            placeholder={mainPage.search}
            imageSource={images.searchbar}
            imageStyle={styles.searchIcon}
            cartStyle={styles.cart}
            cartSource={images.cart}
          />
        </View>
      ) : null}
      <ScrollView>
        <View style={styles.textstyl}>
          <Text style={styles.textStyle}>{product.items}</Text>

          <Image source={images.filters} style={{}} />
        </View>
        <View style={styles.flatlistView}>
          <FlatList
            data={products.data}
            renderItem={({ item, index }) => (
              <View
                style={{
                  margin: 5,
                  width: width / 2,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Routes.ProductDisplay, { item: item })
                  }
                >
                  <Image
                    source={item.src}
                    style={[styles.products, { width: width / 2 - 25 }]}
                  ></Image>

                  <Image source={item.pic} style={styles.product} />
                </TouchableOpacity>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <View style={styles.txtstyl}>
                    <Text style={styles.txt}>{item.text}</Text>

                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Image source={item.photo} style={styles.img}></Image>
                      <Text style={styles.rate}>{item.ratting}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,
                    }}
                  >
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
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

export default MainPage;
