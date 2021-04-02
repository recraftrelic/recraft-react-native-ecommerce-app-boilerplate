import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import BottomDrawer from 'rn-bottom-drawer';
import Drawer, { Message } from 'react-native-bottom-drawer';
import product from '../../constants/products/product.json';
import mainPage from '../../constants/mainpage/mainpage.json';
import products from '../../constants/products/Products'
import SearchBar from '../../component/common/SearchBar';
import { images } from '../../utilities/Common';
import { styles } from '../../styles/productstyle/ProductStyle';

// const ProductDetail = (id) => {
//   alert(id)
//   console.log(id, 'id')
// }
const TAB_BAR_HEIGHT = 49;
const HEADER_HEIGHT = 60;

const ProductDetail = ({
    navigation,
    route
}) => {
    console.log(navigation, '12121')
    console.log(route, '121asas21')
    const { item } = route.params
    console.log(item, '121111111')

    const [modalShow, setModalShow] = useState(true)
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.upperHeader}>
                    <Swiper
                        // style={styles.wrapper}
                        showsButtons={true}>
                        <Image
                            style={styles.tinyLogo}
                            source={item.src}
                        />
                    </Swiper>

                </View>
                <BottomDrawer
                containerHeight={100}
                offset={TAB_BAR_HEIGHT}
                // containerHeight={100}
                // offset={TAB_BAR_HEIGHT + HEADER_HEIGHT}
                // onExpanded = {() => {console.log('expanded')}}
                // onCollapsed = {() => {console.log('collapsed')}}
              >
              <Text>
              {item.text}
              
              </Text>
              </BottomDrawer>

            </ScrollView>

        </SafeAreaView>
    );
};

export default ProductDetail;
