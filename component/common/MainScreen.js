// import React from 'react';
// import {FlatGrid} from 'react-native-super-grid';

//  const MainScreen = () => {

//     return(
//         <FlatGrid
//       itemDimension={130}
//       data={items}
//       style={styles.gridView}
//       spacing={10}
//       renderItem={({item, index}) => (
//         <TouchableHighlight
//           underLayer="white"
//           onPress={() => {
//             props.navigation.navigate(`screen${index + 1}`);
//           }}>
//           <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Image style={styles.itemCode} source={item.img} />
//           </View>
//         </TouchableHighlight>
//       )}
//     />
//     )
//  }

//  export default MainScreen;