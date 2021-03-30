import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { styles } from '../../styles/productstyle/ProductStyle';
import { images } from '../../utilities/Common';
import mainPage from '../../constants/mainpage/mainpage.json';
import SearchBar from '../../component/common/SearchBar';
import product from '../../constants/products/product.json';
import { moderateScale } from "react-native-size-matters";
import products from '../../constants/products/Products'


const MainPage = () => {
  return (
    <SafeAreaView style={styles.main}>
    <ScrollView>

      <View style={styles.container}>
        <SearchBar
          style={styles.Searchbar}
          placeholder={mainPage.search}
          imageSource={images.Searchbar}
          imageStyle={styles.searchIcon}
          cartStyle={styles.cart}
          cartSource={images.cart}
        />
        
       
        </View>
        <View
        style={styles.search}>
        <Text
        style={styles.TextStyle}>
        {product.items}
        </Text>

        </View>
        <View>
        <Image
        source={images.Filters}
        style={styles.Filters}/>
        </View>
        <View
        style={styles.FlatlistView}>
        <FlatList
            data={products.data}
            renderItem={({ item, index }) => (
              <View>
              <TouchableOpacity>
              <Image source={item.src}
              style={styles.products}>
                </Image>
                
              </TouchableOpacity>
                
                <Image source={item.pic}
                style={styles.photo}></Image>
               
                <Text
                style={styles.txt}>{item.text}</Text>
                <Image source={item.photo}
                style={styles.img}></Image>
                <Text
                style={styles.rate}>
                {item.ratting}
                </Text>
                <Text
                style={styles.price}>{item.price}</Text>
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
