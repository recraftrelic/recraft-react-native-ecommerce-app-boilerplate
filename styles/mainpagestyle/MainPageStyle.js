import React from "react";
import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors/colors'
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS == "ios" ? 50 : 0,
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    padding: 19,
    height: 1300,
  },
  search: {
    flexDirection: 'row',
  },
  searchbar: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: widthToDp(75),
    padding: 6.5,
  },
  searchIcon: {
    right: widthToDp('10%'),
    padding: 20,
    borderRadius: 50,
  },
  cart: {
    right: widthToDp('8%'),
    padding: 20,
  },
  category: {
    top: heightToDp('5%'),
    fontFamily: fonts.medium,
    fontSize: 20,
    color: colors.grey,
  },
  src: {
    height: heightToDp('27%'),
  },
  src1: {
    width: widthToDp(100),
    height: 1000,
    marginBottom: 10,
  },
  itemCategory: {
    top: heightToDp('6%'),
    marginRight: widthToDp('2%')
  },
  slide: {
    bottom: heightToDp(3),
    left: widthToDp(35),
  },
  box: {
    backgroundColor: colors.orange,
    flexDirection: "row",
    height: heightToDp(10),
    borderRadius: 10,
  },
  purse: {
    top: heightToDp(3.5),
    left: widthToDp(5),
  },
  amount: {
    color: colors.white,
    left: widthToDp(7),
    top: heightToDp(3.5),
  },
  rate: {
    flexDirection: "row",
    left: widthToDp(20),
    top: heightToDp(2),
  },
  rightStyle: {
    marginRight: 30,
  },
  content: {
    color: colors.white,
    top: heightToDp(1),
    fontSize: 15,
  },
  sale: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: "#7A8D9C",
    top: heightToDp(5),
  },
  discountBar: {
    backgroundColor: '#FBBA32',
    height: heightToDp('6%'),
    width: widthToDp('9%'),
    left: widthToDp('25%'),
    color: '#ffff',
    textAlign:'center',
  },
  discount: {
    backgroundColor: "#F6F6F7",
    marginRight: 10,
    width: widthToDp(40),
    borderRadius: 15,
  },
  bg: {
    height: heightToDp("30%"),
    width: "100%",
    top: heightToDp(8),
  },
  price: {
    flexDirection: "row-reverse",
    top: heightToDp("18%"),
    left: widthToDp("4%"),
    color: '#126881'

  },
  color: {
    backgroundColor: '#F6F6F7',
  },
  priceOne: {
    top: heightToDp("16%"),
    left: widthToDp(13),
    textDecorationLine: "line-through",
    color: '#000',
   fontSize: 10
  },
  contentOne: {
    top: heightToDp("18%"),
    left: widthToDp(4),
    fontFamily: fonts.medium,
    fontSize: 14
  },
  boxOne: {
    backgroundColor: "#F6F6F7",
    flex: 1,
    borderRadius: 10,
    zIndex: 9999,
    marginVertical: 5
  },
  popular: {
    top: 80,
    fontFamily: fonts.medium,
    fontSize: 20,
    color: "#7A8D9C",
  },
  popularList: {
    top: heightToDp("15%"),
    fontFamily: fonts.medium,
    fontSize: 20,
    color: "#7A8D9C",
  },
  boxTwo: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    flex: 2,
    marginVertical: 30,
    right: widthToDp('1.5%'),
    paddingBottom: 5
  },
 menu: {
   flex: 1,
   flexDirection: 'row'
 },
 menuOne: {
   flexDirection: 'row',
 },
 name: {
   left: widthToDp('2%'),
   top: heightToDp('1%'),
   fontFamily: fonts.medium,
   fontSize: 14
 },
 icon: {
   left: widthToDp('25%'),
   top: heightToDp('1%')
 },
 amountOne: {
   left: widthToDp('2%'),
   top: heightToDp('1%'),
  fontSize: 18,
  color: '#126881'
 },
 menuTwo: {
  flexDirection: 'row',
  top: heightToDp('2%'),
  left: widthToDp('2%'),
 },
 iconOne: {
  left: widthToDp('18%'),
  bottom: heightToDp('2%'),
 },
 average: {
   left: widthToDp('5%')
 },
 tabBoundary: {
  backgroundColor: '#F6F6F7',
   bottom: heightToDp('1%'),
   height: heightToDp('7%'),
   width: widthToDp('90%'),
   borderRadius: 50,
   flexDirection: 'row',
   alignItems: 'center',
   padding: widthToDp('5%'),
  position: 'absolute',
  backgroundColor: '#fff',
  left: widthToDp('4%'),
  shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
 },
 iconTwo: {
   marginRight: widthToDp('27%'),
 
 },
 settings: {
   flexDirection: 'row',
   backgroundColor: '#ffff',
   right: widthToDp('54%'),
   top: heightToDp('5%'),
  shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
 },
 settingsOne: {
   marginRight: widthToDp('5%'),
   marginTop: heightToDp('0.5%')
 }
});
