import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import profile from "../../constants/profilepage/ProfilePageJs";
import profilepage from "../../constants/profilepage/profilepage.json";
import Routes from '../../constants/routes/routes';
import { images } from "../../utilities/Common";
import { styles } from "../../styles/profilepage/ProfilePageStyle";

const ProfilePage = ({ navigation }) => {

  const homeButton = () => {
    navigation.navigate(Routes.MainPage)
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={images.pro}></Image>
          <Text style={styles.name}>{profilepage.name}</Text>
          <Text style={styles.email}>{profilepage.Email}</Text>
        </View>
        <View>
          <FlatList
            vertical={true}
            data={profile.data}
            renderItem={({ item, index }) => (
              <View style={styles.content}>
                <Image style={styles.imageOne} source={item.src}></Image>
                <Text style={styles.imageOne}>{item.name}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.tabBoundary}>
        <TouchableOpacity onPress={homeButton}>
        <Image  style={styles.iconTwo} source={images.home}></Image>
        </TouchableOpacity>
        <Image style={styles.iconTwo} source={images.notification}></Image>
        <Image style={styles.iconTwo} source={images.Circle}></Image>
      </View>
    </View>
  );
};

export default ProfilePage;
