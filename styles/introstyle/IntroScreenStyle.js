import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../utilities/Common';
import {fonts} from '../../utilities/Common';

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
        color:'#808080'
    },
    content: {
        top: ('50%'),
        textAlign: 'center',
        fontSize: 15,
        // fontFamily: fonts.nunito,
    },
    slide: {
        top: heightToDp('15%')
    },
    button: {
          backgroundColor: '#126881',
          borderRadius: 50,
          width: widthToDp(25),
          height: heightToDp(8),
          left: widthToDp('65%'),
          bottom: heightToDp('8%'),
    },
    text: {
        color: 'white',
        fontSize: 14,
        left: 30,
        top: heightToDp(3)
    },
    skip: {
        color: '#ACBAC3',
        bottom: heightToDp('12%'),
        left: widthToDp('15%'),
    }
})