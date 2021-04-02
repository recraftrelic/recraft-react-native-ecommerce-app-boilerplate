import React from 'react';
import { Image, SafeAreaView, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from '../../styles/mainpagestyle/MainPageStyle';

const SearchBar = ({
    style,
    placeholder,
    imageStyle,
    imageSource,
    cartStyle,
    cartSource,
    onChange
}) => {

    return(
        <SafeAreaView style={styles.search}>
            <TextInput
            style={style}
            placeholder={placeholder}
            onChange={onChange}
            />
            <Image style={imageStyle} source={imageSource} />
            <Image style={cartStyle} source={cartSource}></Image>
        </SafeAreaView>

    )
}

export default SearchBar;