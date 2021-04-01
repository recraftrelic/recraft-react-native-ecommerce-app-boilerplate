import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import profile from "../../constants/profilepage/ProfilePageJs";
import profilepage from "../../constants/profilepage/profilepage.json";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/profilepage/ProfilePageStyle";

const ProfilePage = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image style={styles.image} source={images.Profil}></Image>
          <Text style={styles.name}>{profilepage.name}</Text>
          <Text style={styles.email}>{profilepage.Email}</Text>
        </View>
        <View>
          <FlatList
            vertical={true}
            data={profile.data}
            renderItem={({ item, index }) => (
              <View style={styles.content}>
                <Image style={styles.image1} source={item.src}></Image>
                <Text style={styles.image1}>{item.name}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.tabBoundary}>
        <Image style={styles.icon2} source={images.home}></Image>
        <Image style={styles.icon2} source={images.notification}></Image>
        <Image style={styles.icon2} source={images.profile}></Image>
      </View>
    </View>
  );
};

export default ProfilePage;
