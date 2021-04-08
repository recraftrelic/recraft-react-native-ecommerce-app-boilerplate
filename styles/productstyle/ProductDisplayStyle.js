import React from "react";
import { StyleSheet,
  Dimensions} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../../constants/colors/colors";
import { fonts, heightToDp, widthToDp } from "../../utilities/Common";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  img:{
    width: widthToDp(375),
    height: heightToDp(521),
  },
  subview: {
    flex: 1,
      backgroundColor: '#E4E4E4'
  },
  viewhead: {
    flex: 1
  },
  imgsize: {
    width: '100%',
    height: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  quant: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  swiper: {
    height: 300
  },
  rateview: {
    top: moderateScale(12),
    right: moderateScale(23)
  },
  modalView:{
    width: widthToDp(375),
    height: heightToDp(320),
  },
  cart:{
    left:widthToDp('90%'),
    // top:heightToDp('1%')
  },
  back:{
    top:heightToDp('1%'),
    left:widthToDp('5%'),
    width:20   
  },
  love:{
    top:heightToDp('46%'),
    left:widthToDp('87%'),
    tintColor: 'red'
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width, 
    height: '100%',
    backgroundColor: 'orange', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    // width, 
    height: 12,
    // backgroundColor: '#7E52A0', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'black', 
    fontSize: 18,
  },
  payview: {
    flex: 1,
    backgroundColor: '#F6F6F7',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: 40

},

  Drawer:{
    borderRadius:30,
    // bottom: moderateScale(10),
    // flex: 3,
    width:widthToDp('100%'),
  //  left:widthToDp('2%'),
    // right:widthToDp('2%'),
    padding:10 ,
    height: widthToDp('100%')
    // paddingTop:20,
    // paddingLeft:20
  },
  rowDirection:{
    flexDirection:"row",

  },
  columnDirection:{
    flexDirection: 'row',
    top: '5%',
    right: '-25%'
  },
  name:{
    fontSize:25,
    fontFamily:fonts.medium,
    color:colors.Darkgrey
  },
  star:{
    // flexDirection:"row",
    // paddingTop:10,
    // top: '10%',
    // right: '-25%'
 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  price:{
    left:widthToDp('30%'),
    top:heightToDp('1%'),
    fontSize:40,
    fontFamily:fonts.nBold,
    color:colors.darkBlue,
  },
  size:{
    // left:widthToDp('46%'),
  },
  diffSize:{
    padding:8,
    margin:5,
    justifyContent:"center"
  },
  color:{
    // left:widthToDp('45%')
  },
  quantity:{
    flexDirection:"row",
    left:widthToDp('40%'),
    alignItems: 'flex-end',

  },
  button:{
    padding:5,
    backgroundColor:"#F6F6F7",
    color:"#57636F",
    margin:2,
    width:widthToDp('6%')
  },
  CartButton:{
    backgroundColor:"#126881",
    borderRadius:30,
    justifyContent:"center",
    textAlign:"center",
    width: widthToDp('90%'),
    height:heightToDp('8%'),
    top:heightToDp('2%'),
    left: '6%'
  },
  CartText:{
    left:widthToDp('35%'),
    color:colors.white,
  },
  dot:{
    top:heightToDp('39%')
  },
  NumberButton:{
    padding:5,
    backgroundColor:"#F6F6F7",
    color:"#57636F",
    margin:2,
    width:widthToDp('15%'),

  },
  SlideUp:{
    left:widthToDp('43.5%'),
    //paddingBottom:20;
    marginBottom:20,
    // position: 'absolute',
    alignItems: 'center',
    top:heightToDp('2%')
  },
  label:{
    fontFamily:fonts.nunito,
    color:colors.grey
  },
  sizeShow:{
    top:heightToDp('1.3%')
  },
  ratting:{
    // marginLeft:widthToDp('1.8%'),
    bottom:heightToDp('1%'),
    left: '70%',
  },
  panel:{
    top:heightToDp('49%')
  },
  diffColor:{
    paddingLeft: 5,
    borderRadius: 30/2,
    paddingLeft: 7,
     marginLeft: 9,
     height:moderateScale(30),
     width:moderateScale(30),
  }
  
  



})
//style={{paddingLeft:5 , backgroundColor:`#${item}`,height:30,width:30,borderRadius:30,paddingLeft:7,marginLeft:9}}
//style={{ flex: 3, left: 20,right:20, paddingTop:20,padding:10 }}
//style={{ left:90,top:5,fontSize:40}}
//style={{padding:8,margin:3,backgroundColor:"red",justifyContent:"center"}}