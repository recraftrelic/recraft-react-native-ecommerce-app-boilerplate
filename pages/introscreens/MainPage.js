import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "../../styles/mainpagestyle/MainPageStyle";
import { images } from "../../utilities/Common";
import mainPage from "../../constants/mainpage/mainpage.json";
import SearchBar from "../../component/common/SearchBar";
import main from "../../constants/mainpage/MainPageImage";
import { Rating } from "react-native-elements";

const MainPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        nestedScrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
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

          <View style={styles.bg}>
            <FlatList
              horizontal={true}
              data={main.dataSale}
              renderItem={({ item, index }) => (
                <View style={styles.discount}>
                  <Text style={styles.content1}>{item.name}</Text>
                  <View>
                    <Text style={styles.price}>{item.discount}</Text>
                    <Text style={styles.price1}>{item.actual}</Text>
                  </View>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text style={styles.popular}>{mainPage.popular}</Text>
          <View style={styles.popularList}>
            <FlatList
              vertical={true}
              data={main.dataPopular}
              renderItem={({ item, index }) => (
                <View>
                  <Text>{item.name}</Text>

                  <Rating
                    ratingCount={5}
                    startingValue={item.rating}
                    readonly={true}
                    ratingColor="#3498db"
                    imageSize={20}
                  ></Rating>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
