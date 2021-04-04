import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { colors } from "../../constants/colors/colors";
import { heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
    main: {
        marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    backgroundColor: colors.lightPink
    },
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: widthToDp('3%'),
        width: widthToDp('100%'),
    },
    backButton: {
    alignSelf:'center',
    alignContent:'center'
    },
    heading: {
        fontSize: 16,
        fontFamily: fonts.Quick,
        color: colors.grey,
        width:widthToDp('80%'),
        textAlign:'center'
    },
    containerOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: widthToDp('3%'),
    },
    box: {
        backgroundColor: colors.white,
        top: heightToDp('1%'),
    },
    location: {
        height: heightToDp('3%'),
        width: widthToDp('4%')
    },
    shipping: {
        right: widthToDp('20%'),
        color: colors.darkBlue
    },
    edit: {
        color: colors.grey
    },
    line: {
        borderBottomWidth: 1,
        borderColor: colors.darkGrey,
        width: widthToDp('90%'),
        margin:'5%',
    },
   
})