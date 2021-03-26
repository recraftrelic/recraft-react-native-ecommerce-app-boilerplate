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

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    upperHeader: {
        flex: 0.4,
        backgroundColor: '#7BCFE9',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    centent: {
        flex:1
    },
    TextInputContainer: {
        flex: 0.7,
    },
    subContainer: {
        flex: 0.7,
        backgroundColor: 'red'
    },
    header: {
        left: widthToDp(75),
        top: heightToDp(3),

    },
    headerText: {
        color: 'white'

    },
    subHead: {
        top: heightToDp(7),
        right: widthToDp(64),
        color: 'white',
        fontFamily: fonts.zilaMedium,
        fontSize: moderateScale(25)
    },
    heading: {
        top: heightToDp(8),
        right: widthToDp(64),
        color: 'white'
    },
    subheading: {
        top: heightToDp(9),
        right: widthToDp(64),
        color: 'white'
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
        backgroundColor: '#F6F6F7',
        bottom: heightToDp(2),
        justifyContent:'center'

    },
    passwordInput: {
        height: heightToDp(8),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(30),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        backgroundColor: '#F6F6F7',

    },
    forgote: {
        color: '#E41A4A',
        alignSelf: 'flex-end',
        marginRight: moderateScale(30),
        fontSize: 14,
    },
    button: {
        backgroundColor: '#126881',
        height: moderateScale(60),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: moderateScale(20)


    },
    btnView: {
        flex: 0.2,
    },
    textBtn: {
        color: 'white',
        fontFamily: fonts.zilaMedium,
        // marginTop: moderateScale(25)

    },
    media: {
        color: '#7A8D9C',
        alignSelf: 'center'
    },
    btnContainer: {
        flex: 0.4,
    },
    Socialbutton: {
        backgroundColor: '#126881',
        height: moderateScale(60),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        top: heightToDp(4),
    },
    images:{
        // right: widthToDp(35),
        // top: heightToDp(1.5),
        // alignSelf: 'flex-start'
    }
})