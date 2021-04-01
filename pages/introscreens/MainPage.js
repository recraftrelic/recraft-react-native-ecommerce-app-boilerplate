import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-elements";
import main from "../../constants/mainpage/MainPageImage";
import mainPage from "../../constants/mainpage/mainpage.json";
import { images } from "../../utilities/Common";
import SearchBar from "../../component/common/SearchBar";
import { styles } from "../../styles/mainpagestyle/MainPageStyle";


const MainPage = () => {
  const [moreSettings, setMoreSettings] = useState(false);

  const moreButton = () => {
    setMoreSettings(!moreSettings);
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        nestedScrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.container}>
          <View style={styles.color}>
          <View>
            <SearchBar
              style={styles.searchbar}
              placeholder={mainPage.search}
              imageSource={images.Searchbar}
              imageStyle={styles.searchIcon}
              cartStyle={styles.cart}
              cartSource={images.cart}
            />
          </View>
          <View>
            <Text style={styles.category}>{mainPage.category}</Text>
          </View>
          <View style={styles.src}>
            <FlatList
              horizontal={true}
              data={main.data}
              renderItem={({ item, index }) => (
                <View style={styles.itemCategory}>
                  <Image source={item.src}></Image>
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
              <TouchableOpacity onPress={moreButton}>
                <View style={styles.rightStyle}>
                  <Image source={images.more}></Image>
                  {moreSettings ? (
                    <View style={styles.settings}>
                      <Image
                        style={styles.settings1}
                        source={images.charge}
                      ></Image>
                      <Image
                        style={styles.settings1}
                        source={images.credit}
                      ></Image>
                      <Image
                        style={styles.settings1}
                        source={images.paylate}
                      ></Image>
                      <Image
                        style={styles.settings1}
                        source={images.transfer}
                      ></Image>
                      <Image
                        style={styles.settings1}
                        source={images.settings}
                      ></Image>
                    </View>
                  ) : null}
                  <Text style={styles.content}>{mainPage.More}</Text>
                </View>
              </TouchableOpacity>
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
                  <View>
                    <Text style={styles.discountBar}>{item.average}</Text>
                  </View>
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
                <View style={styles.menu}>
                  <View style={styles.box1}>
                    <Image style={styles.img}></Image>
                  </View>
                  <View style={styles.box2}>
                    <View style={styles.menu1}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Image style={styles.icon} source={item.src}></Image>
                    </View>
                    <Text style={styles.amount1}>{item.amount}</Text>
                    <View style={styles.menu2}>
                      <Rating
                        ratingCount={5}
                        startingValue={item.rating}
                        readonly={true}
                        imageSize={16}
                      ></Rating>
                      <Text style={styles.average}>{item.average}</Text>
                      <Image style={styles.icon1} source={item.cart}></Image>
                    </View>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBoundary}>
        <Image style={styles.icon2} source={images.home}></Image>
        <Image style={styles.icon2} source={images.notification}></Image>
        <Image style={styles.icon2} source={images.profile}></Image>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
