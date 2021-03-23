import { Platform } from 'react-native';
import image1 from '../Ecommecre/utils/Images/Image1.png';

const images = {
    image1,
}

const fonts = Platform.select({
    ios: {
      Bold: 'ZillaSlab-Bold',
      Italic: 'ZillaSlab-BoldItalic'
    },
    android: {
        Bold: 'ZillaSlab-Bold',
        Italic: 'ZillaSlab-BoldItalic'
    },
  });

export {fonts, images};