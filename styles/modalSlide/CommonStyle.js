import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors/colors";
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

export const styles = StyleSheet.create({
    modalOpen: {
        backgroundColor: colors.white,
        width: widthToDp('100%'),
        height: heightToDp('45%'),
        top: heightToDp('3%'),
        right: widthToDp('5%'),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems:'center',
      },
    successText: {
        top: heightToDp('4%'),
        fontSize: 18,
        
    },
    successContent: {
        marginTop: heightToDp('5%'),
       textAlign: 'center',
       padding: 5,
       color: colors.grey
    
    }
})