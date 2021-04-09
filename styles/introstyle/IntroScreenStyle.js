import React from "react";
import { Platform, StyleSheet } from "react-native";
import { colors } from "../../constants/colors/colors";
import { heightToDp, widthToDp } from "../../utilities/Common";
import { fonts } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS == "ios" ? 50 : 0,
    flex: 1,
  },
  container: {
    alignItems: "center",
    padding: 30,
    flex: 1,
  },
  heading: {
    top: "45%",
    fontSize: 18,
    fontFamily: fonts.Bold,
    color: colors.blackGrey,
  },
  content: {
    top: "60%",
    textAlign: "center",
    fontSize: 15,
  },
  slide: {
    top: heightToDp("30%"),
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    width: widthToDp(25),
    height: heightToDp(8),
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
  skip: {
    color: colors.darkGrey,
  },
  skipBtn: {
    borderRadius: 50,
    width: widthToDp(25),
    height: heightToDp(8),
    justifyContent: "center",
  },
});
