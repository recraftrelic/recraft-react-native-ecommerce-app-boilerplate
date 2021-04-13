import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors/colors";
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
    main: {
        marginTop: Platform.OS == "ios" ? 50 : 0,
        flex: 1,
        backgroundColor: colors.lightPink
      },
      container: {
        paddingTop: heightToDp('2%'),
        paddingLeft: widthToDp('5%'),
        paddingRight: widthToDp('8%')
    },
    headerField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 16,
        fontFamily: fonts.Quick,
        color: colors.grey
    },
    category: {
        marginTop: heightToDp('3%'),
        fontFamily: fonts.medium,
        fontSize: 20,
        color: colors.grey,
      },
      itemQuantity: {
        textAlign: 'center',
        marginTop: heightToDp('0.5%'),
        color: colors.blue,
      },
      itemName: {
        textAlign: 'center',
        marginTop: heightToDp('0.5%'),
        color: colors.blue,
        fontFamily: fonts.quickBold
      },
      src: {
      marginTop: heightToDp('2%'),
      flexDirection: 'row',
      flexWrap: 'wrap'

      },
      boxImage: {
        backgroundColor: colors.silverGrey,
        width: widthToDp("25%"),
        height: heightToDp("10%"),
        marginRight: widthToDp('3.7%'),
      },
      slideUp: {
          alignItems:'center',
          marginTop: heightToDp('1%')
      },
      popular: {
        top: heightToDp('4%'),
        fontFamily: fonts.medium,
        fontSize: 20,
        color: colors.grey,
      },
      popularList: {
        top: heightToDp("7%"),
        fontFamily: fonts.medium,
        fontSize: 20,
        color: colors.grey,
      },
      menu: {
        flex: 1,
        flexDirection: 'row'
      },
      boxOne: {
        backgroundColor: colors.silverGrey,
        flex: 1,
        borderRadius: 10,
        zIndex: 9999,
        marginVertical: 5
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
       color: colors.blue
      },
      menuTwo: {
        flexDirection: 'row',
        top: heightToDp('2%'),
        left: widthToDp('2%'),
       },
       average: {
        left: widthToDp('5%')
      },
      iconOne: {
        left: widthToDp('18%'),
        bottom: heightToDp('2%'),
       },
       text: {
         flexDirection: 'column'
       },
       imageAlign: {
         flexDirection: 'column',
         marginBottom: heightToDp('2%')
       }
       
})