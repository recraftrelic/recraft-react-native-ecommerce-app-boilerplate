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
        // backgroundColor: 'red',
      marginTop: heightToDp('2%')

      },
      boxOne: {
        // borderRadius: 10,
        backgroundColor: colors.silverGrey,
        width: widthToDp("20%"),
        height: heightToDp("10%"),
        marginRight: widthToDp('1%')
      },
      slideUp: {
          textAlign: 'center'
      }
})