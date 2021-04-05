import React from 'react'; 
import { Image, SafeAreaView, Text, View } from 'react-native';
import Modal from "react-native-modal";
import { styles } from '../styles/modalSlide/CommonStyle'

const ModalSlide = ({
    imageStyle,
    imageSource,
    isModalVisible,
    imageSuccess,
    successText,
    successContent
}) => {

  
    return(
        <SafeAreaView>
        <View>
          <Modal
            isVisible={isModalVisible}
            transparent={true}
            animated
            style={{
              justifyContent: "flex-end",
            }}
            swipeDirection={["down", "up"]}
          >
            <View style={styles.modalOpen}>
              <Image style={imageStyle}
               source={imageSource}
               
            />
             <Image style={imageStyle}
               source={imageSuccess}
               
            />
            <Text style={styles.successText}
            >{successText}</Text>
              <Text style={styles.successContent}
            >{successContent}</Text>
              </View>
              </Modal>
              </View>
              </SafeAreaView>
    )
}

export default ModalSlide;