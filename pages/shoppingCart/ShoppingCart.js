import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  CheckBox,
  FlatList,
  TouchableOpacity,
} from "react-native";
import shoppingCart from "../../constants/shoppingCart/shoppingCart.json";
import main from "../../constants/shoppingCart/shoppingCartJs";
import { images, widthToDp } from "../../utilities/Common";
import { styles } from "../../styles/shoppingCart/shoppingCartStyle";
import ButtonContainer from "../../utilities/ButtonContainer";
import { colors } from "../../constants/colors/colors";

const ShoppingCart = () => {
  const [isSelected, setSelection] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [showDelete, setShowDelete] = useState(true);
  const [isAdd, setIsAdd] = useState(1);
  const [isLess, setIsLess] = useState("1");

  const deleteButton = () => {
    setIsDelete(!isDelete);
    setShowDelete(!showDelete);
  };

  const redDelete = () => {
    setIsDelete(!isDelete);
    setShowDelete(!showDelete);
  };

  const onPressSignIn = () => {
    alert("hefkh")
  }

  const addButton = () => {
    setIsAdd(isAdd+1)

  }

  const lessButton = (value) => {
    console.log('isaaa',isAdd)
   if(isAdd>0)
    setIsAdd(isAdd-1)
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
              <View
                style={styles.containerTwo}
              >
                <View>
                  <View style={styles.description}>
                    {showDelete ? (
                      <View style={styles.checkbox}>
                        <CheckBox
                          value={isSelected}
                          onValueChange={setSelection}
                        />
                      </View>
                    ) : null}

                    <View style={styles.box}></View>

                    <View style={styles.content}>
                      <View style={styles.display}>
                        <Text style={styles.name}>{item.name}</Text>
                      </View>
                      <Text style={styles.color}>{item.color}</Text>
                      <Text style={styles.size}>{item.size}</Text>
                      <Text style={styles.amount}>{item.amount}</Text>
                      <View style={styles.boxOne}>
                      <TouchableOpacity onPress={lessButton}>
                        <View style={styles.less}>
                          <Image source={item.less}></Image>
                        </View>
                        </TouchableOpacity>

                     
                        <Text>{ isAdd +item.number }</Text>
                        <TouchableOpacity onPress={addButton}>
                        <View style={styles.add}>
                          <Image source={item.add}></Image>
                        </View>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.deleteBox}>
                      <View style={styles.marginRyt}>
                        <TouchableOpacity onPress={deleteButton}>
                          {showDelete ? (
                            <Image source={item.src}></Image>
                          ) : null}
                        </TouchableOpacity>
                      </View>
                      {!showDelete ? (
                        <View

                        >
                          <TouchableOpacity onPress={redDelete}>
                            <Image source={images.Delete}></Image>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </View>
                <View style={styles.line}></View>

                </View>
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
      <View style={styles.upperLine}>
         <View style={styles.subOne}>
          <Text >{shoppingCart.total}</Text>
          <Text style={styles.amountOne}>{shoppingCart.amount}</Text>
          </View>
        <View style={styles.btn}>
            <ButtonContainer
              
              text={shoppingCart.button}
              bgColor={colors.blue}
              textColor={colors.white}
              image={""}
               onPressSignIn={onPressSignIn}
            />
          </View>
          </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;
