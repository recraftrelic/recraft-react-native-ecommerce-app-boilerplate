import { Platform } from "react-native";
import facebook from "../assets/images/signin/Facebook.png";
import google from "../assets/images/signin/google.png";
import eye from "../assets/images/signin/eye.png";
import ic_ad_view from "../assets/images/signin/ic_ad_view.png";
import image1 from "../assets/images/introscreens/Image1.png";
import searchbar from "../assets/images/mainpage/Searchicon.png";
import cart from "../assets/images/mainpage/Carticon.png";
import purse from "../assets/images/mainpage/Purse.png";
import slide from "../assets/images/mainpage/slide.png";
import Top from "../assets/images/mainpage/Top.png";
import Pay from "../assets/images/mainpage/Pay.png";
import more from "../assets/images/mainpage/more.png";
import home from "../assets/images/mainpage/HomeButton.png";
import notification from "../assets/images/mainpage/NotificationButton.png";
import profile from "../assets/images/mainpage/Profile.png";
import charge from "../assets/images/mainpage/Chargebutton.png";
import credit from "../assets/images/mainpage/Credit.png";
import paylate from "../assets/images/mainpage/Paylater.png";
import transfer from "../assets/images/mainpage/Transferbutton.png";
import settings from "../assets/images/mainpage/Settings.png";
import pro from "../assets/images/profilepage/pro.png";
import filters from "../assets/images/products/Filters.png";
import circle from "../assets/images/mainpage/Circle.png";
import backButton from "../assets/images/shoppingCart/backButton.png";
import otherButton from "../assets/images/shoppingCart/otherButton.png";
import deleteBox from '../assets/images/shoppingCart/delete.png';
import location from '../assets/images/checkOut/LocationIcon.png';
import purseIcon from '../assets/images/checkOut/purseIcon.png';
import next from '../assets/images/checkOut/nextButton.png';
import not from '../assets/images/checkOut/notActive.png';
import slideUp from '../assets/images/checkOut/slideUp.png';
import success from '../assets/images/checkOut/Success.png';
import coin from '../assets/images/debit/coin.png';
import coin2 from '../assets/images/debit/coin2.png';
import coin3 from '../assets/images/debit/coin3.png';
import coin4 from '../assets/images/debit/coin4.png';
import card from '../assets/images/debit/card.png';
import nextbtn from '../assets/images/debit/nextbtn.png';
import bank from '../assets/images/payment/bank.png';
import avaliable from '../assets/images/payment/not.png';
import addImage from '../assets/images/payment/addImage.png';
import scan from '../assets/images/payment/scan.png';
import phone from '../assets/images/payment/phone.png';
import accountbank from '../assets/images/payment/accountbank.png';
import code from '../assets/images/payment/code.png';
import love from '../assets/images/products/Love.png';
import backbtn from '../assets/images/products/backbtn.png';
import shopping from '../assets/images/products/shopping.png';
import slideup from '../assets/images/products/slideup.png';
import qr from '../assets/images/debit/qrCode.png';

import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const widthToDp = (number) => {
  let givenNumber = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenNumber) / 100);
};

const heightToDp = (number) => {
  let givenNumber = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenNumber) / 100);
};

const numberToDp = (number) => {
  let givenNumber = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel(givenNumber);
};
const images = {
  facebook,
  google,
  eye,
  ic_ad_view,
  image1,
  searchbar,
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
  pro,
  filters,
  circle,
  backButton,
  otherButton,
  deleteBox,
  location,
  purseIcon,
  next,
  not,
  slideUp,
  success,
  coin,
  coin2,
  coin3,
  coin4,
  card,
  nextbtn,
  bank,
  avaliable,
  addImage,
  scan,
  phone,
  accountbank,
  code,
  love,
  backbtn,
  shopping,
  slideup,
  qr

};

const fonts = Platform.select({
  ios: {
    regular: "WorkSans-Regular",
    semiBold: "WorkSans-SemiBold",
    bold: "WorkSans-Bold",
    extraBold: "WorkSans-ExtraBold",
    VariableFont: "AbrilFatface-Regular",
    Rubik: "Rubik-VariableFont",
    Bold: "ZillaSlab-Bold",
    Italic: "ZillaSlab-BoldItalic",
    light: "ZillaSlab-Light",
    medium: "ZillaSlab-Medium",
    nunito: "Nunito-Regular",
    nBold: "Nunito-Bold",
    Quick: "Quicksand-Bold",
    quickBold: "Quicksand-Bold",
  },
  android: {
    regular: "WorkSans-Regular",
    semiBold: "WorkSans-SemiBold",
    bold: "WorkSans-Bold",
    extraBold: "WorkSans-ExtraBold",
    VariableFont: "AbrilFatface-Regular",
    Rubik: "Rubik-VariableFont",
    Bold: "ZillaSlab-Bold",
    Italic: "ZillaSlab-BoldItalic",
    light: "ZillaSlab-Light",
    medium: "ZillaSlab-Medium",
    nBold: "Nunito-Bold",
    Quick: "Quicksand-Bold",
    nunito: "Nunito-Regular",
    quickBold: "Quicksand-Bold",
    extra: "Nunito-ExtraBold"
  },
});

export { fonts, images, widthToDp, heightToDp, numberToDp };
