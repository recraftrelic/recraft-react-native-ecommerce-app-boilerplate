import React from 'react';
import { StyleSheet } from 'react-native';
import { fonts, heightToDp, widthToDp } from '../../utilities/Common';

export const styles = StyleSheet.create({
    main: {
        marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    },
    container: {
        padding: 30,
        flex: 1,  
        top: heightToDp('7%') 
    },
    name: {
        textAlign: 'center',
        top: heightToDp('1%'),
        fontSize: 18,
        fontFamily: fonts.nBold
    },
    email: {
        textAlign: 'center',
        top: heightToDp('1%'),
        fontSize: 12,
        color: '#57636F'
    },
    image: {
        left: widthToDp('32%'),
        
    },
    content: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#ACBAC3',
        height: heightToDp('8%'),
        marginTop: heightToDp('2%'),
        backgroundColor: '#fff'
    },
    image1: {
       top: heightToDp('3%'),
       marginRight: widthToDp('5%'),
       marginLeft: widthToDp('5%'),
       color: '#126881',
       fontFamily: fonts.Quick,
       fontSize: 14
    },
    tabBoundary: {
        backgroundColor: '#F6F6F7',
         bottom: heightToDp('1%'),
         height: heightToDp('7%'),
         width: widthToDp('90%'),
         borderRadius: 50,
         flexDirection: 'row',
         alignItems: 'center',
         padding: widthToDp('5%'),
        position: 'absolute',
        backgroundColor: '#fff',
        left: widthToDp('4%'),
        shadowColor: "grey",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1
          }
       },
       icon2: {
         marginRight: widthToDp('27%'),
       
       },
})