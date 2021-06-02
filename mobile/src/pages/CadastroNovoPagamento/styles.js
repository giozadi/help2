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


inputcartao: {
  borderWidth: hp('1%'),
  borderColor: '#fff',
  backgroundColor: '#fff',
  padding: hp('1.3%'),
  borderRadius: hp('1%'),
  width: hp('45%'),
  margin: hp('1%')
},

inputdata: {
  borderWidth: hp('1%'),
  borderColor: '#fff',
  backgroundColor: '#fff',
  padding: hp('1.3%'),
  borderRadius: hp('1%'),
  width: hp('22%'),
  margin: hp('1%')
},

inputcodigo: {
  borderWidth: hp('1%'),
  borderColor: '#fff',
  backgroundColor: '#fff',
  padding: hp('1.3%'),
  borderRadius: hp('1%'),
  width: hp('22%'),
  margin: hp('1%'),
  marginLeft: hp('24%'),
  marginTop: hp('-9%')
},

inputsPerfil: {
  marginLeft: hp('2%'),
  marginTop: hp('10%')
},

descricaoTela: {
  paddingTop: Constants.statusBarHeight + hp('3%'),
  color: '#fff',
  fontSize: hp('3.8%'),
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: Constants.statusBarHeight + hp('0.6%'),
},

buttonCadastroCartao:{
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