import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "../../styles/mainpagestyle/MainPageStyle";
import { images } from "../../utilities/Common";
import mainPage from "../../constants/mainpage/mainpage.json";
import SearchBar from "../../component/common/SearchBar";
import main from "../../constants/mainpage/MainPageImage";
import WomenFashion from "../../assets/images/mainpage/WomenFashion.png";

const MainPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <SearchBar
          style={styles.Searchbar}
          placeholder={mainPage.search}
          imageSource={images.Searchbar}
          imageStyle={styles.searchIcon}
          cartStyle={styles.cart}
          cartSource={images.cart}
        />
        <View>
          <Text style={styles.category}>{mainPage.category}</Text>
        </View>
        <View style={styles.src}>
          <FlatList
            horizontal={true}
            data={main.data}
            renderItem={({ item, index }) => (
              <View>
                <Image source={item.src}></Image>
                <Text>{item.key}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Image style={styles.slide} source={images.slide}></Image>
        <View style={styles.box}>
          <Image style={styles.purse} source={images.purse}></Image>
          <Text style={styles.amount}>{mainPage.amount}</Text>
          <View style={styles.rate}>
            <View style={styles.rightStyle}>
              <Image source={images.Pay}></Image>
              <Text style={styles.content}>{mainPage.Pay}</Text>
            </View>
            <View style={styles.rightStyle}>
              <Image source={images.Top}></Image>
              <Text style={styles.content}>{mainPage.Top}</Text>
            </View>
            <View style={styles.rightStyle}>
              <Image source={images.more}></Image>
              <Text style={styles.content}>{mainPage.More}</Text>
            </View>
          </View>
        </View>
        <View style={styles.backColor}>
          <Text style={styles.sale}>{mainPage.sale}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
