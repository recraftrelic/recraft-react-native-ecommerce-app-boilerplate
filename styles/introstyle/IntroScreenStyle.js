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
        top: ('13%'),
        fontSize: 18,
        fontFamily: fonts.Bold,
    },
    content: {
        top: ('20%'),
        textAlign: 'center',
        fontSize: 15,
    },
    button: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom: heightToDp(5),
        // padding: widthToDp(10), 
        left: widthToDp(60)    
    },
    button1: {
        // flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom: heightToDp(5),
        // padding: widthToDp(10),    
    }
})