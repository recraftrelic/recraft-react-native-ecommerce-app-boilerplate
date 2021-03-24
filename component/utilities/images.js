import { Platform } from "react-native";
import media from "../../images/icons/media.png";
import Facebook from "../../images/icons/Facebook.png";
import google from "../../images/icons/google.png";
import eye from "../../images/icons/eye.png";
import ic_ad_view from "../../images/icons/ic_ad_view.png";





const images = {
    media,
    Facebook,
    google,
    eye,
    ic_ad_view,

}

const fonts = Platform.select({
    ios: {
        regular: 'WorkSans-Regular',
        semiBold: 'WorkSans-SemiBold',
        bold: 'WorkSans-Bold',
        extraBold: 'WorkSans-ExtraBold',
        VariableFont:'AbrilFatface-Regular',
        Rubik: 'Rubik-VariableFont',
    },
    android: {
        regular: 'WorkSans-Regular',
        semiBold: 'WorkSans-SemiBold',
        bold: 'WorkSans-Bold',
        extraBold: 'WorkSans-ExtraBold',
    }
});

export {
    fonts,
    images
};