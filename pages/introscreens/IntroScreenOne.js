import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  introScreens,
  slideImage,
} from "../../constants/introscreens/screenOne";
import Routes from "../../constants/routes/routes";
import { styles } from "../../styles/introstyle/IntroScreenStyle";

const IntroScreenOne = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("shopping");
  const data = introScreens[activeTab];

  const activeSlideImage = slideImage[activeTab];

  const nextButton = () => {
    let updateActiveTab = activeTab;
    if (activeTab == "shopping") {
      updateActiveTab = "product";
    }
    if (activeTab == "product") {
      updateActiveTab = "express";
    }
    if (activeTab == "express") {
      navigation.navigate(Routes.SignUp);
    }
    setActiveTab(updateActiveTab);
  };

  const skipButton = () => {
    navigation.navigate(Routes.MainPage);
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          {data.map((item) => (
            <>
              <Image source={item.src} />
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </>
          ))}
        </View>
        <View style={styles.container}>
          <Image style={styles.slide} source={activeSlideImage} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 30
          }}
        >
          <TouchableOpacity onPress={skipButton} style={styles.skipBtn}>
            <Text style={styles.skip}>{introScreens.skip}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={nextButton}>
            <Text style={styles.text}>{introScreens.btnTex}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default IntroScreenOne;
