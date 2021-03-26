import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { images } from './Common'

import { styles } from '../styles/signinstyle/CommonStyle';
import login from '../constants/signin/login.json';
import { moderateScale } from 'react-native-size-matters';

const TextInputContainer = (props) => {
    const [showHidePassword, setShowHidePassword] = useState(true);

    const {
        placeholder,
        secureTextEntry,
        value,
        onChangeText,
    } = props;

    return (
      
            <View style={[styles.emailInput,{marginTop:10}]}>

                <TextInput
                    value={value}
                    onChangeText={(value) => onChangeText(value)}
                    placeholder={placeholder}
                    // style={styles.emailInput}
                    style={{ height: moderateScale(50) }}
                    secureTextEntry={showHidePassword}
                />

                {
                    secureTextEntry &&
                    <TouchableOpacity
                        onPress={() => setShowHidePassword(!showHidePassword)}
                        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                        style={{
                            height: 30,
                            width: 30,
                            position: 'absolute',
                            right: 15,
                            bottom: 20
                        }}
                    >
                        {
                            showHidePassword ?
                                <Image
                                    source={images.eye}
                                />
                                :
                                <Image
                                    source={images.ic_ad_view}
                                />
                        }


                    </TouchableOpacity>
                }



            </View>

    );
};

export default TextInputContainer;