import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { Rating } from "react-native-ratings";
import Swiper from "react-native-swiper";
import Routes from "../../constants/routes/routes";
import data from "../../constants/products/Display.json";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/productstyle/ProductDisplayStyle";

const ProductDisplay = (props) => {
  const { route, navigation } = props;
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(0);
  const [selectColor, setSelectColor] = useState(0);
  const Data = route.params.item;

  const CartButton = () => {
    navigation.navigate(Routes.ShoppingCart);
  };
  const Calculation = (operation) => {
    if (operation === "-") {
      if (count === 1) {
        alert("Quantity can't be Zero");
      } else {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  };
  const ShowSize = (index) => {
    setSize(index);
  };

  const AnimationStopDrag = () => {};
  const goBack = () => {
    props.navigation.goBack();
  };
  const ShowColor = (index) => {
    setSelectColor(index);
  };
  const borderWidth = (index) => {
    if (index === selectColor) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <SafeAreaView style={styles.subview}>
      <View style={styles.viewhead}>
        <TouchableOpacity>
          <Image source={images.love} style={styles.love}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack}>
          <Image source={images.backbtn} style={styles.back}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.shopping} style={styles.cart}></Image>
        </TouchableOpacity>

        <Swiper
          style={styles.swiper}
          height={300}
          width={"100%"}
          showsButtons={false}
          paginationStyle={styles.dot}
        >
          <View>
            <Image source={Data.src} style={styles.imgsize} />
          </View>
          <View>
            <Image source={Data.src} style={styles.imgsize} />
          </View>
          <View>
            <Image source={Data.src} style={styles.imgsize} />
          </View>
        </Swiper>
      </View>

      <View style={styles.payview}>
        <Image source={images.slideup} style={styles.SlideUp} />
        <View style={styles.rowDirection}>
          <View>
            <View style={styles.columnDirection}>
              <Text style={styles.name}>{Data.text}</Text>
            </View>
            <View style={styles.rateview}>
              <Rating
                type="star"
                ratingCount={5}
                fractions={1}
                imageSize={20}
                startingValue={4.9}
              />
            </View>

            <Text style={styles.ratting}>{Data.ratting}</Text>
          </View>

          <View>
            <Text style={styles.price}>{Data.price}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.sizeShow}>
            <Text style={styles.label}>{data.sizeTxt}</Text>
          </View>
          <View>
            <FlatList
              data={data.Size}
              horizontal={true}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    {
                      backgroundColor: `${
                        size === index ? "#126881" : "#F6F6F7"
                      }`,
                    },
                    styles.diffSize,
                  ]}
                >
                  <TouchableOpacity onPress={() => ShowSize(index)}>
                    <Text
                      style={{ color: `${size === index ? "#ffff" : "black"}` }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.star}>
          <View>
            <Text style={styles.label}>{data.colorTxt}</Text>
          </View>
          <View>
            <FlatList
              data={data.Color}
              horizontal={true}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => ShowColor(index)}
                  style={[styles.diffColor, { backgroundColor: `#${item}` }]}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.quant}>
          <View>
            <Text style={[styles.label, styles.label]}>Select Quality</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={() => {
                Calculation("-");
              }}
            >
              <View style={styles.button}>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.NumberButton}>
                <Text style={{ textAlign: "center" }}>{count}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Calculation("+");
              }}
            >
              <View style={styles.button}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={CartButton} style={styles.CartButton}>
          <View>
            <Text style={styles.CartText}>{data.cart}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDisplay;
