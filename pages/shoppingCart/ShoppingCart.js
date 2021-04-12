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
import { colors } from "../../constants/colors/colors";
import Routes from "../../constants/routes/routes";
import { images } from "../../utilities/Common";
import ButtonContainer from "../../utilities/ButtonContainer";
import { styles } from "../../styles/shoppingCart/shoppingCartStyle";

const ShoppingCart = ({navigation}) => {
  const [isSelected, setSelection] = useState([]);
  const [showDelete, setShowDelete] = useState([]);
  const [allData, setData] = useState(main.data)


  const deleteButton = (index) => {
    const list = showDelete[index] = true
    setShowDelete([...showDelete], showDelete[index] = true);
  };

  const redDelete = (index) => {
    const list = showDelete[index] = false
    setShowDelete([...showDelete], showDelete[index] = false);
  };

  const onPressSignIn = () => {
    navigation.navigate(Routes.CheckOut);
  };

  const addButton = (index) => {
    setData([...allData], allData[index].number = allData[index].number + 1)
    showAmount(index)
  };

  const lessButton = (index) => {
    if (allData[index].number > 0) {
      setData([...allData], allData[index].number = allData[index].number - 1)
      showAmount(index)
    }
  };

  const showAmount = (index) => {
    const value = main.data[index].number * main.data[index].amount
    main.data[index].total = value
  }

  const SetCheckBox = (event, index) => {
    const list = isSelected[index] = event
    setSelection([...isSelected], list)
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backButton}></Image>
        </TouchableOpacity>
        <Text style={styles.heading}>{shoppingCart.heading}</Text>
        <Image source={images.otherButton}></Image>
      </View>
      <View style={styles.containerOne}>
        <FlatList
          vertical={true}
          data={allData}
          renderItem={({ item, index }) => (
            <>
              <View style={styles.containerTwo}>
                <View>
                  <View style={styles.description}>
                    {showDelete[index] ? null : (
                      <View style={styles.checkbox}>
                        <CheckBox
                          style={styles.boxColor}
                          value={isSelected[index]}
                          onValueChange={(event) => { SetCheckBox(event, index) }}
                        />
                      </View>
                    )}
                    <View style={styles.box}></View>
                    <View style={styles.content}>
                      <View style={styles.display}>
                        <Text style={styles.name}>{item.name}</Text>
                      </View>
                      <Text style={styles.color}>{item.color}</Text>
                      <Text style={styles.size}>{item.size}</Text>
                      <Text style={styles.amount}>{`$${item.amount}`}</Text>
                      <View style={styles.boxOne}>
                        <TouchableOpacity onPress={() => lessButton(index)}>
                          <View style={styles.less}>
                            <Image source={item.less}></Image>
                          </View>
                        </TouchableOpacity>
                        <Text>{item.number}</Text>
                        <TouchableOpacity onPress={() => { addButton(index, item.amount) }}>
                          <View style={styles.add}>
                            <Image source={item.add}></Image>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View>
                      <View style={styles.marginRyt}>
                        <TouchableOpacity onPress={(event) => deleteButton(index)}>
                          {showDelete[index] ? null : (
                            <Image source={item.src}></Image>
                          )}
                        </TouchableOpacity>
                      </View>
                      {showDelete[index] ? (
                        <View>
                          <TouchableOpacity onPress={() => redDelete(index)}>
                            <Image source={images.deleteBox}></Image>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.line}></View>
                </View>
                <View style={styles.total}>
                  <Text style={styles.sub}>{item.sub}</Text>
                  <Text style={styles.totalOne}>{`$${item.total}`}</Text>
                </View>
              </View>
            </>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.upperLine}>
        <View style={styles.subOne}>
          <Text>{shoppingCart.total}</Text>
          <Text style={styles.amountOne}>{`$${allData[0].total + allData[1].total}`}</Text>
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
