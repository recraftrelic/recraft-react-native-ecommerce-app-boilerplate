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
        top: moderateScale(20)

    },
    image: {
        bottom: moderateScale(7),
        left: moderateScale(12)
    },
    content: {
        flex:1
    },

    debit: {
        color: colors.grey,
        marginBottom: moderateScale(30),
        left: moderateScale(35),
        fontSize: moderateScale(20),
        textAlign: 'left',
    },

    outter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',  
    },
    expire: {
        height: moderateScale(50),
        width: moderateScale(160),
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
        width: moderateScale(160),
        alignSelf: 'center',
        borderRadius: moderateScale(30),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(38),
        backgroundColor: colors.lightGrey,
        bottom: moderateScale(2),
        justifyContent:'center'
    },
    inputView: {
        flex: 0.3,
        paddingTop: moderateScale(30),
    },
    button: {
        marginTop: moderateScale(130)
    }
})