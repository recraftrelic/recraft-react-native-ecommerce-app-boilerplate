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
        paddingVertical: heightToDp('2%'),
        paddingHorizontal: widthToDp('4%'),
        marginBottom: heightToDp('-6%'),
        zIndex: 999999,
        backgroundColor: colors.white
    },
    headerField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontSize: 16,
        fontFamily: fonts.Quick,
        color: colors.grey,
    },
})