import React, {useState} from "react";
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { images } from '../../utilities/Common';
import { styles } from '../../styles/introstyle/IntroScreenStyle';
import {introScreens} from '../../constants/introscreens/screenOne';


const IntroScreenOne = () => {

    const [activeTab, setActiveTab] = useState("shopping")

    const data = introScreens[activeTab]

    const nextButton = () => {
        const updateActiveTab = activeTab
        if (activeTab == "shopping") {
            updateActiveTab = "product"
        }
        if (activeTab == "product") {
            updateActiveTab = "express"
        }
        setActiveTab(updateActiveTab)
    }

  return (
    <>
      <SafeAreaView style={styles.main}>
       
        <View style={styles.container}>
            {data.map((item) => ( 
                <>
                <Image source={item.src}/>
          <Text style={styles.heading}>{item.heading}</Text>
          <Text style={styles.content}>{item.content}</Text>  
                </>
             ))}
            
        </View>
       
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
              <Text>SKIP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default IntroScreenOne;
