import React from "react";
import { StyleSheet } from "react-native";
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS == "ios" ? 50 : 0,
    flex: 1,
  },
  container: {
    padding: 29,
    height:1500
  },
  Searchbar: {
    backgroundColor: "white",
    borderRadius: 50,
    width: widthToDp(75),
    padding: 6.5,
  },
  searchIcon: {
    left: widthToDp(62.5),
    bottom: heightToDp(5.3),
    padding: 20,
    borderRadius: 50,
  },
  cart: {
    left: widthToDp(77),
    bottom: heightToDp(10.4),
    padding: 20,
  },
  category: {
    bottom: heightToDp(5),
    fontFamily: fonts.medium,
    fontSize: 20,
    color: "#7A8D9C",
  },
  src: {
        width: widthToDp(100),
      height: heightToDp(20),
  },
  src1: {
    width: widthToDp(100),
  height: 1000,
  marginBottom:10
},
  slide: {
    bottom: heightToDp(3),
    left: widthToDp(35)
  },
  box: {
      backgroundColor: '#FFA771',
      flexDirection: 'row',
      height: heightToDp(10),
      borderRadius: 10
  },
  purse: {
      top: heightToDp(3.5),
      left: widthToDp(5)
  },
  amount: {
      color: 'white',
      left: widthToDp(7),
      top: heightToDp(3.5),
  },
  rate: {
      flexDirection:'row',
      left: widthToDp(20),
      top: heightToDp(2),
  },
  rightStyle: {
      marginRight: 30
  },
  content: {
      color: 'white',
      top: heightToDp(1),
      fontSize: 15
  },
  sale: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: "#7A8D9C",
    top: heightToDp(5),
  },
  discount: {
    backgroundColor: '#F6F6F7',
    marginRight:10,
    width: widthToDp(40),
    borderRadius: 15,
  },
  bg: {
    height: heightToDp("30%"),
    width:"100%" ,
    top: heightToDp(8)
  },
  price: {
    flexDirection: 'row-reverse',
    top: heightToDp("23.5%"),
    left: widthToDp("4%")
  },
  price1: {
    top: heightToDp("21%"),
    left: widthToDp(13),
    textDecorationLine: 'line-through'
  },
  content1: {
    top: heightToDp("23%"),
    left: widthToDp(4)
  },
  popular: {
  top: 80,
  fontFamily: fonts.medium,
  fontSize: 20,
  color: "#7A8D9C",
  },
  popularList: {
    top: 180,
    fontFamily: fonts.medium,
    fontSize: 20,
    color: "#7A8D9C",
    },
    popularList: {

    },
});
