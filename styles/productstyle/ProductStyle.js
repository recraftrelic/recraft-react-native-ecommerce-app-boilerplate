import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    padding: 29,
    height: heightToDp(20),
  },
  Searchbar: {
    backgroundColor: "white",
    borderRadius: 50,
    width: widthToDp(75),
    padding: 6.5,
    height: moderateScale(40)
  },
  searchIcon: {
    position: 'absolute',
    flex: 0.1,
    marginLeft: moderateScale(245),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: moderateScale(-2),
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: 30,
  },
  cart: {
    flex: 0.1,
    marginLeft: moderateScale(300),
    bottom: moderateScale(38),
    padding: 20,
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: 30,

  },
  search: {
    bottom: 70,
    marginLeft: 35
  },
  TextStyle: {
    color: '#ACBAC3',

  },
  Filters: {
    bottom: 85,
    marginLeft: moderateScale(290)
  },
  FlatlistView: {
    marginBottom: 100,
    bottom: moderateScale(50),
  },
  products: {
    margin: 2,
    marginLeft: 34,
  },
  photo: {
    marginLeft: 150,
    bottom: 30
  },
  txt: {
    margin: 5,
    marginLeft: 40,
    color: '#7A8D9C'
  },
  img: {
    margin: 8,
    marginLeft: 40,
    color: '#7A8D9C',
    marginBottom: 19
  },
  rate: {
    margin: 12,
    marginLeft: 100,
    marginTop: -20,
    bottom: 12,
    color: '#7A8D9C'
  },
  price: {
    margin: 12,
    marginLeft: 150,
    marginTop: -50,
    bottom: 12,
    fontSize: 20,
    color: '#126881'
  }
  

});
