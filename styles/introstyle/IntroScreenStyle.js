import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors/colors'
import { heightToDp, widthToDp } from '../../utilities/Common';
import { fonts } from '../../utilities/Common';

export const styles = StyleSheet.create({
    main: {
        marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    },
    container: {
        alignItems: 'center',
        padding: 90,
        flex: 1,
        
    },
    heading: {
        top: ('30%'),
        fontSize: 18,
        fontFamily: fonts.Bold,
        color: colors.blackGrey,
    },
    content: {
        top: ('50%'),
        textAlign: 'center',
        fontSize: 15,
    },
    slide: {
        top: heightToDp('15%')
    },
    button: {
          backgroundColor: colors.blue,
          borderRadius: 50,
          width: widthToDp(25),
          height: heightToDp(8),
          left: widthToDp('65%'),
          bottom: heightToDp('8%'),
    },
    text: {
        color: colors.white,
        fontSize: 14,
        left: 30,
        top: heightToDp(3)
    },
    skip: {
        color: colors.darkGrey,
        bottom: heightToDp('12%'),
        left: widthToDp('15%'),
    }
})