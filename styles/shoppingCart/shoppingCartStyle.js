import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors/colors";
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS == "ios" ? 50 : 0,
    flex: 1,
    backgroundColor: colors.lightPink,
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: heightToDp("2%"),
    paddingLeft: widthToDp("5%"),
    paddingRight: widthToDp("8%"),
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.Quick,
    color: colors.grey,
  },
  containerOne: {
    top: heightToDp("2%"),
  },
  marginRyt: {
    marginLeft: widthToDp(`-5`),
    marginTop: heightToDp("2%"),
  },
  description: {
    flexDirection: "row",
    marginBottom: heightToDp("2%"),
    width: widthToDp("100%"),
    backgroundColor: colors.white,
  },
  box: {
    borderRadius: 10,
    backgroundColor: colors.silverGrey,
    width: widthToDp("30%"),
    height: heightToDp("15%"),
    marginTop: heightToDp("2%"),
    left: widthToDp("4%"),
    marginBottom: heightToDp("2%"),
  },
  checkbox: {
    justifyContent: "center",
    left: widthToDp("2%"),
  },
  content: {
    left: widthToDp("8%"),
    width: widthToDp("60%"),
    marginTop: heightToDp("2%"),
  },
  name: {
    marginRight: widthToDp("21%"),
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.darkBlue,
    marginBottom: heightToDp("1%"),
  },
  color: {
    marginBottom: heightToDp("1%"),
    fontFamily: fonts.nBold,
    color: colors.grey,
  },
  size: {
    marginBottom: heightToDp("1%"),
    color: colors.grey,
    fontFamily: fonts.nBold,
  },
  amount: {
    fontSize: 18,
    color: colors.blue,
    marginBottom: heightToDp("1%"),
  },
  boxOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 5,
    width: widthToDp("20%"),
  },
  less: {
    borderRightWidth: 1,
    borderColor: colors.darkBlue,
    height: heightToDp("2.5%"),
    justifyContent: "center",
    paddingRight: widthToDp("1%"),
    paddingLeft: widthToDp("1%"),
  },
  add: {
    borderLeftWidth: 1,
    borderColor: colors.darkBlue,
    height: heightToDp("2.5%"),
    justifyContent: "center",
    paddingRight: widthToDp("1%"),
    paddingLeft: widthToDp("1%"),
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.darkGrey,
    width: widthToDp("90%"),
    marginLeft: widthToDp("5%"),
    marginRight: widthToDp("5%"),
    bottom: heightToDp("1%"),
  },
  containerTwo: {
    backgroundColor: colors.white,
    marginBottom: heightToDp("2%"),
    flex: 1,
  },
  negativeOne: {
    backgroundColor: colors.white,
    marginBottom: heightToDp("2%"),
    flex: 1,
  },
  total: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: widthToDp("6%"),
    bottom: heightToDp("1%"),
  },
  sub: {
    marginRight: widthToDp("2%"),
    color: colors.darkBlue,
  },
  totalOne: {
    color: colors.pink,
    fontFamily: fonts.nBold,
    fontSize: 16,
  },
  upperLine: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: heightToDp("16%"),
    backgroundColor: colors.white,
    marginBottom: heightToDp("12%"),
  },
  subOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: heightToDp("2%"),
  },
  amountOne: {
    color: colors.pink,
    fontSize: 20,
  },
  btn: {
    marginBottom: 100,
  },
});
