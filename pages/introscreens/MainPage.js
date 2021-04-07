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
import Routes from '../../constants/routes/routes';
import SearchBar from "../../component/common/SearchBar";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/mainpagestyle/MainPageStyle";

const MainPage = ({ navigation }) => {
  const [moreSettings, setMoreSettings] = useState(false);

  const textChange = () => {
    navigation.navigate(Routes.SearchPage)
  };

  const moreButton = () => {
    setMoreSettings(!moreSettings);
  };

  const imageButton = () => {
    navigation.navigate(Routes.ProfilePage)
  }

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
              imageSource={images.searchbar}
              imageStyle={styles.searchIcon}
              cartStyle={styles.cart}
              cartSource={images.cart}
              onChange={textChange}
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
                        style={styles.settingsOne}
                        source={images.charge}
                      ></Image>
                      <Image
                        style={styles.settingsOne}
                        source={images.credit}
                      ></Image>
                      <Image
                        style={styles.settingsOne}
                        source={images.paylate}
                      ></Image>
                      <Image
                        style={styles.settingsOne}
                        source={images.transfer}
                      ></Image>
                      <Image
                        style={styles.settingsOne}
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
                  <Text style={styles.contentOne}>{item.name}</Text>
                  <View>
                    <Text style={styles.price}>{item.discount}</Text>
                    <Text style={styles.priceOne}>{item.actual}</Text>
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
                  <View style={styles.boxOne}>
                    <Image style={styles.img}></Image>
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
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBoundary}>
        <Image style={styles.iconTwo} source={images.home}></Image>
        <Image style={styles.iconTwo} source={images.notification}></Image>
        <TouchableOpacity onPress={imageButton}>
        <Image  style={styles.iconTwo} source={images.Circle}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
