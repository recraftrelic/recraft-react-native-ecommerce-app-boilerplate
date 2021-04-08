
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
        backgroundColor: '#F6F6F7',

    },
    mainView: {
        flex: 1,
        backgroundColor: '#464646',
    },
    topup: {
        color: colors.grey,
        fontSize: moderateScale(15),
        textAlign: 'center',
        top: moderateScale(20),

    },
    image: {
        bottom: moderateScale(7),
        left: moderateScale(30),
        marginBottom: moderateScale(20)
    },
    imagecrop: {
        bottom: moderateScale(62),
        left: moderateScale(300),

    },
    upperHeader: {
        flex: 0.1,
        backgroundColor: '#F6F6F7',

    },
    content: {
        flex:1
    },
    TextInputContainer: {
        flex: 0.7,
    },
    subContainer: {
        flex: 0.7,
    },
    pay: {
        top: moderateScale(25),
        left: moderateScale(25),
        fontSize: moderateScale(16),
        color:'#7A8D9C'
    },
    payview: {
        flex: 0.3,
        backgroundColor: '#F6F6F7',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    qrscan: {
        fontSize: 15,
        marginTop: 0,
        top: 210,
        textAlign: 'center',
        color: '#FFFFFF'   
    },
    imgflax:{
        flex: 0.9,
    },
    imgrow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        top: moderateScale(45),
    },
    header: {
        left: widthToDp(75),
        top: heightToDp(3),

    },
    headerText: {
        color: colors.white

    },
    scan: {
        left: widthToDp(23),
        top: heightToDp(16),
        backgroundColor: '#FFFFFF',
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
    },
    
    count: {
        flex: 0.1,
        marginLeft: moderateScale(150),
        // flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: moderateScale(16)
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