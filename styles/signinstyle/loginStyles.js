import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";
import { fonts } from '../../utilities/Common';
import { RFValue } from 'react-native-responsive-fontsize';

import {
    moderateScale,
} from 'react-native-size-matters';
const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({

    signInBtn:
    {
        backgroundColor: '#126881',
        height: moderateScale(50),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,

    },
    facebokBtn: {
        backgroundColor: '#1877F2',
        height: moderateScale(50),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        top: moderateScale(80)

    },
    googlebtn: {
        backgroundColor: '#F6F6F7',
        height: moderateScale(50),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        top: moderateScale(10)

    },
    signInText: {
        color: 'white',
        fontSize: moderateScale(16),
        fontFamily: fonts.zilaMedium
    },
    container: {
        marginTop: Platform.OS == "ios" ? 50 : 0,
        flex: 0.3,
        backgroundColor: '#7BCFE9',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,

    },
    signInBtnView: {
        marginTop: moderateScale(2),
        flex: 0.1,
    },
    googleView: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'space-around',
        top: moderateScale(60),
    },

    googleInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        paddingTop: 0,
        top: moderateScale(25)
    },
    continue: {
        alignSelf: 'center',
        marginTop: moderateScale(20),
        color: '#ABB3BB'
    },
    facebookImg: {
        flexDirection: 'row',
        right: moderateScale(120),
        top: moderateScale(10)
    },
    facebookText: {
        color: 'white',
        marginLeft: moderateScale(10),
        bottom: moderateScale(12),
        fontFamily: fonts.quickBold,
    },
    googleImg: {
        flexDirection: 'row',
        right: moderateScale(120),
        top: moderateScale(10)
    },
    regularTxt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(40)
    },
    regularStyle: {
        color: '#092C4C',
        // fontFamily: fonts.regular
    },
    signUpTxt: {
        color: 'blue',
        marginLeft: moderateScale(5),
        // fontFamily: fonts.semiBold
    },
    forgote: {
        color: '#E41A4A',
        // marginBottom: moderateScale(10),
        bottom: moderateScale(12),
        left: moderateScale(23),
        fontSize: 12,
        // fontFamily: fonts.regular
    },
    remember: {
        marginLeft: moderateScale(10),
        marginTop: moderateScale(2),
        color: '#ABB3BB',
        // fontFamily: fonts.regular
    },
    checkBox: {
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: 5
    },
    checkBoxView: {
        marginTop: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    checkBoxTouch: {
        flexDirection: 'row',
    },
    checkBoxbtn: {
        position: 'absolute',
        top: moderateScale(30),
        right: moderateScale(40)
    },
    lockImage: {
        position: 'absolute',
        top: moderateScale(28),
        left: moderateScale(27)
    },
    passwordInput: {
        height: moderateScale(44),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(20),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        marginTop: moderateScale(20),
        // fontFamily: fonts.regular

    },
    emailIcon: {
        position: 'absolute',
        top: moderateScale(18),
        left: moderateScale(30)
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        marginLeft: moderateScale(30),
        // fontFamily: fonts.regular

    },
    tick: {
        bottom: moderateScale(35),
        left: moderateScale(310),
        height: moderateScale(20),
        width: moderateScale(20),

    },
    emailInput: {
        height: moderateScale(50),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(20),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        // fontFamily: fonts.regular

    },
    inputView: {
        flex: 0.2,
        marginTop: moderateScale(10)
    },
    headText: {
        marginTop: moderateScale(40),
        flex: 0.3,
        alignItems: 'center',
    },
    logo: {
        marginTop: moderateScale(40),

    },
    headName: {
        fontSize: RFValue(14),
        marginTop: moderateScale(-20),
        left: moderateScale(120),
        color: '#FFFFFF',
        // fontFamily: fonts.bold
    },
    headLogo: {
        position: 'absolute',
        top: moderateScale(240),
        left: moderateScale(110),
    },
    bottomText: {
        color: '#7A8D9C',

    },
    googleTxt: {
        color: '#57636F',
        marginLeft: moderateScale(10),
        bottom: moderateScale(12),
        fontFamily: fonts.quickBold,
    },
    headerStyle: {
        top: moderateScale(70),
        right: moderateScale(120),
        color: '#FFFFFF',
        fontSize: RFValue(20),
        fontFamily: fonts.zilaMedium
    },
    subHeaderStyle: {
        top: moderateScale(78),
        right: moderateScale(13),
        color: '#FFFFFF',
        fontSize: RFValue(12),
    },
    subHeaderStyle1: {
        top: moderateScale(80),
        right: moderateScale(38),
        color: '#FFFFFF',
        fontSize: RFValue(12),
    }
});