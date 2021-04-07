import React from "react";
import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors/colors'
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS == "ios" ? 50 : 0,
    flex: 1,
  },
  container: {
    padding: 30,
    flex: 1,
    top: heightToDp("7%"),
  },
  name: {
    textAlign: "center",
    top: heightToDp("1%"),
    fontSize: 18,
    fontFamily: fonts.nBold,
  },
  email: {
    textAlign: "center",
    top: heightToDp("1%"),
    fontSize: 12,
    color: colors.darkBlue,
  },
  image: {
    left: widthToDp("32%"),
  },
  content: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.darkGrey,
    height: heightToDp("8%"),
    marginTop: heightToDp("2%"),
    backgroundColor: colors.white,
  },
  imageOne: {
    top: heightToDp("3%"),
    marginRight: widthToDp("5%"),
    marginLeft: widthToDp("5%"),
    color: colors.blue,
    fontFamily: fonts.Quick,
    fontSize: 14,
  },
  tabBoundary: {
    backgroundColor: colors.lightPink,
    bottom: heightToDp("0.5%"),
    height: heightToDp("7%"),
    width: widthToDp("90%"),
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: widthToDp("5%"),
    position: "absolute",
    backgroundColor: colors.white,
    left: widthToDp("4%"),
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  iconTwo: {
    marginRight: widthToDp("27%"),
  },
});
