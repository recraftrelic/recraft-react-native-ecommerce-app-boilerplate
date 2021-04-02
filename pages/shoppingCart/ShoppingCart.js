import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  CheckBox,
  FlatList,
  TouchableOpacity
} from "react-native";
import shoppingCart from "../../constants/shoppingCart/shoppingCart.json";
import main from "../../constants/shoppingCart/shoppingCartJs";
import { images } from "../../utilities/Common";
import { styles } from "../../styles/shoppingCart/shoppingCartStyle";

const ShoppingCart = () => {
  const [isSelected, setSelection] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const deleteButton = () => {
    setIsDelete(!isDelete)
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={images.backButton}></Image>
        <Text style={styles.heading}>{shoppingCart.heading}</Text>
        <Image source={images.otherButton}></Image>
      </View>
      <View style={styles.containerOne}>
        <FlatList
          vertical={true}
          data={main.data}
          renderItem={({ item, index }) => (
              <>
              
            <View style={styles.containerTwo}>
            <View>
              <View style={styles.description}>
              
                <View style={styles.checkbox}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                </View>
                <View style={styles.box}></View>
                <View>
                  <View style={styles.content}>
                    <View style={styles.display}>
                      <Text style={styles.name}>{item.name}</Text>
                      <TouchableOpacity onPress={deleteButton}>
                      <Image source={item.src} ></Image>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.color}>{item.color}</Text>
                    <Text style={styles.size}>{item.size}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                    <View style={styles.boxOne}>
                      <View style={styles.less}>
                        <Image source={item.less}></Image>
                      </View>
                      <Text>{item.number}</Text>
                      <View style={styles.add}>
                        <Image source={item.add}></Image>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={isDelete? styles.positive : styles.negative}>
                <Image source={images.Delete} ></Image>
              </View>
              </View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.total}>
                <Text style={styles.sub}>{item.sub}</Text>
                <Text style={styles.totalOne}>{item.total}</Text>
              </View>
             
            </View>
            </>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;
