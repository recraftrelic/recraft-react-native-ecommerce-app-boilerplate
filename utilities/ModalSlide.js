import React from 'react'; 
import { Image, SafeAreaView, Text, View } from 'react-native';
import Modal from "react-native-modal";
import { styles } from '../styles/modalSlide/CommonStyle'
import ButtonContainer from './ButtonContainer';

const ModalSlide = ({
    imageStyle,
    imageSource,
    isSuccessVisible,
    imageSuccess,
    successText,
    successContent,
    text,
    textColor,
    bgColor,
    onSwipeComplete,
    buttonStyle
}) => {

  
    return(
        <SafeAreaView>
        <View>
          <Modal
            isVisible={isSuccessVisible}
            transparent={true}
            animated
            style={{
              justifyContent: "flex-end",
            }}
            swipeDirection={["down", "up"]}
            onSwipeComplete={onSwipeComplete}

          >
            <View style={styles.modalOpen}>
              <Image style={styles.imageStyle}
               source={imageSource}
               
            />
             <Image style={styles.imageStyle1}
               source={imageSuccess}
               
            />
            <Text style={styles.successText}
            >{successText}</Text>
              <Text style={styles.successContent}
            >{successContent}</Text>
            <View style={styles.btn}>
            <ButtonContainer
              text={text}
              bgColor={bgColor}
              textColor={textColor}
              image={""}
              style={buttonStyle}
            />
          </View>
              </View>
              
              </Modal>
              </View>
              </SafeAreaView>
    )
}

export default ModalSlide;