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
import { heightToDp, widthToDp } from '../../utilities/Common';
import { colors } from "../../constants/colors/colors";

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: colors.white
    },
    mainView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flex: 0.1,
    },
    topup: {
        color: colors.grey,
        fontSize: moderateScale(15),
        textAlign: 'center',
        top: moderateScale(20),
    },
    image: {
        bottom: moderateScale(7),
        left: moderateScale(30)
    },
    qrImage: {
        bottom: moderateScale(37),
        left: moderateScale(320)
    },
    content: {
        flex:1
    },
    topupbtn: {
        top: moderateScale(450)
    },
    subcard: {
        top: moderateScale(20),
        left: moderateScale(60),
        fontSize: moderateScale(12),
        color: colors.darkBlue
    },
    headcard: {
        top: moderateScale(13),
        left: moderateScale(60),
        fontSize: moderateScale(15),
        color: colors.darkBlue
    },
    texthead: {
        top: moderateScale(40),
        left: moderateScale(20)
    },
    cardimg: {
        flex: 0.4,
        backgroundColor: colors.lightGrey,
        height: moderateScale(100),
        width: moderateScale(318),
        position: 'absolute',
        zIndex: 99,
        top: moderateScale(320),
        left: moderateScale(25),
        borderRadius: 12,
    },
    price: {
        fontSize: moderateScale(16),
        color: colors.blue
    },
    pricerow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        top: moderateScale(60),
    },
    imgrow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        top: moderateScale(50),
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        margin: 20,
        width: moderateScale(270),
        top: moderateScale(30),
        fontSize: moderateScale(18),
        paddingHorizontal: moderateScale(20)
    },
    inputtxt: {
        top: moderateScale(20),
        left: moderateScale(25),
        fontSize: moderateScale(16),
        color: colors.grey
    },
    inputview: {
        flex: 0.4,
        backgroundColor: colors.lightGrey,
        height: moderateScale(280),
        width: moderateScale(318),
        position: 'absolute',
        zIndex: 99,
        top: moderateScale(20),
        left: moderateScale(25),
        borderRadius: 12,
    },
    nextbutton: {
        bottom: moderateScale(10),
        left: moderateScale(285)
    },
    debit: {
        color: colors.darkBlue,
        marginBottom: moderateScale(60),
        left: moderateScale(35),
        fontSize: moderateScale(20),
        textAlign: 'left',
        top: moderateScale(30)
    },
    outter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',  
    },
    expire: {
        height: moderateScale(50),
        width: moderateScale(147),
        alignSelf: 'center',
        borderRadius: moderateScale(30),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        backgroundColor: colors.lightGrey,
        bottom: moderateScale(2),
        justifyContent:'center'
    },
    security: {
        height: moderateScale(50),
        width: moderateScale(147),
        alignSelf: 'center',
        borderRadius: moderateScale(30),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        backgroundColor: colors.lightGrey,
        bottom: moderateScale(2),
        justifyContent:'center'
    },
    code: {
        top: moderateScale(30),
        maxWidth: moderateScale(300),
        left: moderateScale(35),
        color: colors.grey,
        marginBottom: moderateScale(70)
    },
    verify: {
        flex: 0.2,
        alignItems: 'center',
        marginLeft: moderateScale(1),
        padding: moderateScale(12)
    },
    TextInputContainer: {
        flex: 0.7,
    },
    subContainer: {
        flex: 0.7,
    },
    headerText: {
        color: colors.white
    },
    subHead: {
        top: heightToDp(7),
        right: widthToDp(64),
        color: colors.white,
        fontFamily: fonts.zilaMedium,
        fontSize: moderateScale(25)
    },
    heading: {
        top: heightToDp(8),
        right: widthToDp(64),
        color: colors.white
    },
    subheading: {
        top: heightToDp(9),
        right: widthToDp(64),
        color: colors.white
    },
    inputView: {
        flex: 0.3,
        paddingTop: moderateScale(30),
    },
    emailInput: {
        height: heightToDp(8),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(30),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        backgroundColor: colors.lightGrey,
        bottom: heightToDp(2),
        justifyContent:'center'
    },
    passwordInput: {
        height: 0,
        width: 0,
    },
    forgote: {
        color: colors.red,
        alignSelf: 'flex-end',
        marginRight: moderateScale(30),
        fontSize: 14,
    },
    button: {
        backgroundColor: colors.blue,
        height: moderateScale(60),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: moderateScale(20),
        fontFamily: fonts.quickBold,
    },
    btnView: {
        flex: 0.2,
    },
    textBtn: {
        color: colors.white,
        fontFamily: fonts.zilaMedium,
    },
    media: {
        color: colors.grey,
        alignSelf: 'center',
        top: moderateScale(12)
    },
    btnContainer: {
        flex: 0.4,
        bottom: moderateScale(15)
    },
    btn : {
        flex: 0.4,
        top: moderateScale(30)
    },
    count: {
        flex: 0.1,
        marginLeft: moderateScale(142),
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: moderateScale(15)
    },
    forgoteView: {
        flex: 0.4,
        marginTop: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',

    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        height: moderateScale(60),
        width: 70,
        borderRadius: moderateScale(10),
        right: moderateScale(18),
        backgroundColor: colors.lightGrey,
        borderWidth: 0.5,
    },
    cellText: {
        textAlign: 'center',
        fontSize: 16,
    }
})