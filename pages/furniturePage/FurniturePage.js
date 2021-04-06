import React, { useState } from "react";
import {
    FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SlidingPanel from 'react-native-sliding-up-down-panels';
import furniturePage from "../../constants/furniturePage/furniturePage.json";
import main from "../../constants/furniturePage/furniturePageJs";
import { styles } from "../../styles/furniturePage/furniturePageStyle";
import { images } from "../../utilities/Common";

const FurniturePage = () => {
  
  return (
    <SafeAreaView style={StyleSheet.main}>
      <View style={styles.container}>
        <View style={styles.headerField}>
          <Image source={images.backButton}></Image>
          <Text style={styles.heading}>{furniturePage.heading}</Text>
          <Image source={images.cart}></Image>
        </View>
        <View>
          <Text style={styles.category}>{furniturePage.category}</Text>
          
        </View>
         {/* <SlidingPanel
            headerLayoutHeight = {50}
            headerLayout = { () =>
                <View style={styles.headerLayoutStyle}>
                  <Text style={styles.commonTextStyle}>My Awesome sliding panel</Text>
                </View>
            }
            slidingPanelLayout = { () =>
                <FlatList 
                 horizontal={true}
                data={main.data}
                renderItem={({ item, index }) => (
                    
                  <View >
                     <View style={styles.boxOne}></View>
                      
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemQuantity}>{item.quantity}</Text>
                    
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
              /> */}
                 {/* <View style={styles.slidingPanelLayoutStyle}>
                   <Text style={styles.commonTextStyle}>The best thing about me is you</Text>
                </View>
            }
        /> */}
        <View style={styles.src}>
            <FlatList
              horizontal={true}
              data={main.data}
              renderItem={({ item, index }) => (
                  
                <View >
                   <View style={styles.boxOne}></View>
                    
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>{item.quantity}</Text>
                  
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
            <View>
            <Image style={styles.slideUp} source={images.slideUp}></Image>
            </View>
          </View>
      </View>
      
    </SafeAreaView>
  );
};

export default FurniturePage;
