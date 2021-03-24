import React from 'react';
import { Platform, StyleSheet } from 'react-native';
//import { heightToDp, widthToDp } from '../utils/Responsive';
import IntroScreen1 from './IntroScreen1';
import {fonts} from '../../Ecommecre/images';

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
    Heading: {
        top: ('13%'),
        fontSize: 18,
        fontFamily: fonts.Bold,
    },
    Content1: {
        top: ('20%'),
        textAlign: 'center',
        fontSize: 15,
    },
    image1: {
        height: 100,
        width: 100,
        backgroundColor:'red'
    },
})