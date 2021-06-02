import { StyleSheet } from 'react-native';
import {WidthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
  flex: hp('1%'),
  backgroundColor: '#2d40ee',
},

header: {
  backgroundColor: '#fff',
  height:hp('18%'),
  alignItems: 'center',
  justifyContent: 'center',
},

textHeader:{
  fontSize:hp('3%'),
  fontWeight: 'bold',
  marginTop: Constants.statusBarHeight + hp('5%'),
},

inputPerfil: {
  borderWidth: hp('1%'),
  borderColor: '#fff',
  backgroundColor: '#fff',
  padding: hp('1.3%'),
  borderRadius: hp('1%'),
  width: hp('45%'),
  margin: hp('1%')
},

inputsPerfil: {
  marginLeft: hp('2%'),
  marginTop: hp('10%')
},

logoFoto: {
  paddingTop: Constants.statusBarHeight + hp('10%'),
  color: '#fff',
  fontSize: hp('6.5%'),
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: Constants.statusBarHeight + hp('12%'),
},

buttonCadastroPerfil:{
  backgroundColor: '#4553FA',
  borderRadius: hp('1%'),
  marginTop: hp('8%'),
  height: hp('8%'),
  marginLeft: hp('2%'),
  marginRight: hp('3%'),
  paddingHorizontal: hp('10%'),
  justifyContent: 'center',
  alignItems: 'center',
},

buttonTextSalvarPerfil:{
  color: '#fff',
  fontSize: hp('2.7%'),
  alignItems: 'center',
  
},

});