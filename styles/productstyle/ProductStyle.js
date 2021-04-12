import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../../constants/colors/colors";
import { widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    padding:10,
    justifyContent:'center'
  },
  searchbar: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: widthToDp(70),
    padding: 6.5,
    height: moderateScale(40),
    left: moderateScale(20),

  },
  textstyl: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  product: {
    position: 'absolute',
    tintColor: 'red',
    bottom: 10,
    right: 25
  },
  txtstyl: {
    flex: 0.6
  },
  
  searchIcon: {
    position: "absolute",
    flex: 0.1,
    marginLeft: moderateScale(245),
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: moderateScale(-2),
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: 30,
  },
  cart: {
    left: moderateScale(42),
    padding: 20,
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: 30,
  },
  search: {
    bottom: 70,
    marginLeft: 35,
  },
  textStyle: {
    color: colors.darkGrey,
  },
  filters: {
    bottom: 85,
    marginLeft: moderateScale(290),
  },
  products: {
    margin: 5,
    borderRadius:10
  },
  photo: {
    marginLeft: 150,
    bottom: 30,
  },
  txt: {
    margin: 5,
    color: colors.grey,
  },
  img: {
    margin: 8,
    color: colors.grey,
    marginBottom: 19,
  },
  rate: {
    color: colors.grey,
  },
  price: {
    fontSize: 20,
    color: colors.blue,
  },
});
