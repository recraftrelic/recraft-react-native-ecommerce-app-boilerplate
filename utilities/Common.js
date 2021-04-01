import { Platform } from "react-native";
import facebook from '../assets/images/signin/Facebook.png';
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
import more from '../assets/images/mainpage/more.png';
import home from '../assets/images/mainpage/HomeButton.png';
import notification from '../assets/images/mainpage/NotificationButton.png';
import profile from '../assets/images/mainpage/Profile.png';
import charge from '../assets/images/mainpage/Chargebutton.png';
import credit from '../assets/images/mainpage/Credit.png';
import paylate from '../assets/images/mainpage/Paylater.png';
import transfer from '../assets/images/mainpage/Transferbutton.png';
import settings from '../assets/images/mainpage/Settings.png';
import Profil from '../assets/images/profilepage/Profil.png'

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
    facebook,
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
    home,
    notification,
    profile,
    charge,
    credit,
    paylate,
    transfer,
    settings,
    Profil,
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
      nBold: 'Nunito-Bold',
      Quick: 'Quicksand-Bold',
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
      nBold: 'Nunito-Bold',
      Quick: 'Quicksand-Bold',
    }
});

export {
    fonts,
    images,
    widthToDp,
    heightToDp,
    numberToDp,
};