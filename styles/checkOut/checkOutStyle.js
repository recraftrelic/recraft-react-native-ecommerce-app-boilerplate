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
    padding: widthToDp("3%"),
    width: widthToDp("100%"),
  },
  backButton: {
    alignSelf: "center",
    alignContent: "center",
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.Quick,
    color: colors.grey,
    width: widthToDp("80%"),
    textAlign: "center",
  },
  containerOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: widthToDp("3%"),
  },
  box: {
    backgroundColor: colors.white,
    top: heightToDp("1%"),
  },
  location: {
    height: heightToDp("3%"),
    width: widthToDp("4%"),
  },
  shipping: {
    right: widthToDp("20%"),
    color: colors.darkBlue,
  },
  edit: {
    color: colors.grey,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.darkGrey,
    width: widthToDp("90%"),
    margin: "5%",
  },
  detail: {
    marginLeft: widthToDp("10%"),
  },
  name: {
    fontFamily: fonts.extra,
    fontSize: 18,
    color: colors.darkBlue,
    bottom: heightToDp("0.5%"),
  },
  address: {
    color: colors.darkBlue,
    fontSize: 13,
    bottom: heightToDp("0.5%"),
  },
  containerTwo: {
    backgroundColor: colors.white,
    marginTop: heightToDp("2%"),
    padding: 25,
    width: widthToDp("100%"),
  },
  boxOne: {
    borderRadius: 10,
    backgroundColor: colors.silverGrey,
    width: widthToDp("20%"),
    height: heightToDp("10%"),
  },
  brandAlign: {
    flexDirection: "row",
  },
  brandDisplay: {
    width: widthToDp("70%"),
    left: widthToDp("5%"),
  },
  multi: {
    width: widthToDp("10%"),
    right: widthToDp("5%"),
    justifyContent: "flex-end",
    bottom: heightToDp("2%"),
  },
  brand: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.darkBlue,
    marginBottom: heightToDp("0.5%"),
  },
  color: {
    fontSize: 11,
    fontFamily: fonts.nunito,
    color: colors.grey,
    marginBottom: heightToDp("0.5%"),
  },
  amount: {
    fontFamily: fonts.nunito,
    color: colors.blue,
  },
  containerThree: {
    backgroundColor: colors.white,
    marginTop: heightToDp("2%"),
  },
  expressDelivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: widthToDp("18%"),
    right: widthToDp("12%"),
    bottom: heightToDp("2%"),
  },
  ServiceDelivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: widthToDp("18%"),
    right: widthToDp("12%"),
    top: heightToDp("1%"),
  },
  delivery: {
    color: colors.darkBlue,
  },
  edit: {
    color: colors.grey,
  },
  express: {
    color: colors.darkBlue,
    fontFamily: fonts.bold,
  },
  containerFour: {
    backgroundColor: colors.white,
    marginTop: heightToDp("0.5%"),
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: Platform.OS === "ios" ? 60 : 80,
    marginTop: heightToDp('2%'),
    width: widthToDp('85%'),
    borderColor: colors.grey,
    left: widthToDp('5%'),
    marginBottom: heightToDp('2%')

},
description: {
    fontSize: 14,
    left: widthToDp('5%'),
    top: heightToDp('1%')
},
paymentOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
      marginTop: heightToDp('2')
},
lineTwo: {
    borderBottomWidth: 1,
    borderColor: colors.darkGrey,
    width: widthToDp("90%"),
    top: heightToDp('1%'),
    marginLeft: "4%",
    marginBottom: heightToDp('2%')
},
wallet: {
    flexDirection: 'row',
},
pay: {
    right: widthToDp('5%'),
    color: colors.pink
},
purseIcon: {
    right: widthToDp('5%'),

},
payment: {
    color: colors.grey
},
paymentOptionOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: widthToDp('5%'),
    marginRight: widthToDp('5%'),
    marginBottom: heightToDp('1%')
},
containerFive: {
    flex: 1
},
product: {
    color: colors.grey
},
containerSix: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: heightToDp('1%')
},
drop: {
    color: colors.grey,
    fontSize: 14
},
btn: {
  marginTop: heightToDp('-2%'),
  marginBottom: heightToDp('5%')
},
upperLine: {
  borderTopWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  top: heightToDp('3%'),
  backgroundColor: colors.white,
},
subOne: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: heightToDp('2%')
},
amountOne: {
  color: colors.pink,
  fontSize: 20
  },
modalOpen: {
  backgroundColor: colors.white,
  width: widthToDp('100%'),
  height: heightToDp('35%'),
  top: heightToDp('3%'),
  right: widthToDp('5%'),
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  alignItems:'center',
},
slideUp: {
  marginTop: heightToDp('2%')
},
pin: {
  fontSize: 15,
  color: colors.grey,
  marginTop: heightToDp('3%'),
  fontFamily: fonts.VariableFont
},
content: {
  flex:1
},
forgotView: {
  marginBottom:heightToDp(15),
},
containerInput: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
cellView: {
  width: heightToDp('8%'),
  margin: 15,
  justifyContent: 'center',
  alignItems: 'center',
  height: heightToDp('8%'),
  borderRadius: 10,
  backgroundColor: colors.lightPink,
},
cellText: {
  textAlign: 'center',
  fontSize: 16,
},
forgotPin: {
  color: colors.red
},
displayPin: {
  alignItems: 'flex-end'
},

});
