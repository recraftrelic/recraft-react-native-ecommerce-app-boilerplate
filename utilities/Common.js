import { Platform } from "react-native";
import Facebook from '../assets/images/signin/google.png';
import google from '../assets/images/signin/google.png';
import eye from '../assets/images/signin/eye.png';
import ic_ad_view from '../assets/images/signin/ic_ad_view.png';
import image1 from '../assets/images/introscreens/Image1.png';
import Searchbar from '../assets/images/mainpage/Searchicon.png';
import cart from '../assets/images/mainpage/Carticon.png';
import purse from '../assets/images/mainpage/Purse.png';
import slide from '../assets/images/mainpage/slide.png';
import Top from '../assets/images/mainpage/Top.png';
import Pay from '../assets/images/mainpage/Pay.png';
import more from '../assets/images/mainpage/more.png'


import {Dimensions,PixelRatio} from 'react-native'

const {width,height} = Dimensions.get('window')
const widthToDp = number =>{
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width*givenNumber)/100);
}

const heightToDp = number =>{
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height*givenNumber)/100);
}

const numberToDp = number =>{
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel(givenNumber);
}
const images = {
    Facebook,
    google,
    eye,
    ic_ad_view,
    image1,
    Searchbar,
    cart,
    slide,
    purse,
    Pay,
    Top,
    more,
}

const fonts = Platform.select({
    ios: {
        regular: 'WorkSans-Regular',
        semiBold: 'WorkSans-SemiBold',
        bold: 'WorkSans-Bold',
        extraBold: 'WorkSans-ExtraBold',
        VariableFont:'AbrilFatface-Regular',
        Rubik: 'Rubik-VariableFont',
        Bold: 'ZillaSlab-Bold',
      Italic: 'ZillaSlab-BoldItalic',
      light: 'ZillaSlab-Light',
      medium: 'ZillaSlab-Medium',
      nunito:'nunito.regular',
    },
    android: {
        regular: 'WorkSans-Regular',
        semiBold: 'WorkSans-SemiBold',
        bold: 'WorkSans-Bold',
        extraBold: 'WorkSans-ExtraBold',
        Bold: 'ZillaSlab-Bold',
      Italic: 'ZillaSlab-BoldItalic',
      nunito:'nunito.regular',
      medium: 'ZillaSlab-Medium',
    }
});

export {
    fonts,
    images,
    widthToDp,
    heightToDp,
    numberToDp,
};