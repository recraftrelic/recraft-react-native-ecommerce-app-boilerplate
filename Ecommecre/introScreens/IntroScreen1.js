import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {images} from '../images';
import {styles} from './IntroScreenStyle';
import screen1 from './screen1.json';

const IntroScreen1 = () => {

    return (
        <>
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <Image style={styles.image1} source={images.image1}/>
                <Text style={styles.Shopping}>{screen1.IntroScreens[0].Shopping}</Text>
                <Text style={styles.Content1}>{screen1.IntroScreens[0].Content1}</Text>
            </View>
        </SafeAreaView>

        </>

    )
}

export default IntroScreen1;