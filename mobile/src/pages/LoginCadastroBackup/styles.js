import { StyleSheet } from 'react-native';
import {WidthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';

export default StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#2d40ee',
    paddingHorizontal: hp('2.8%'),
    paddingTop: Constants.statusBarHeight + hp('5%'),
  },

  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('-2%'),
  },

  logoTextHelp:{
    fontSize: hp('12%'),
    color: '#fff',
    fontWeight: 'bold',
    marginTop: hp('20%'),
    
  },

  buttons:{
   flex: 1,
   marginTop: hp('25%'),
  },

  button:{
    
    backgroundColor: '#4553FA',
    borderRadius: hp('1%'),
    marginTop: hp('3%'),
    height: hp('8%'),
  },

  buttonText:{
    color: '#fff',
    fontSize: hp('2.7%'),
    marginTop: hp('-3.9%'),
    marginLeft: hp('8%'),
  },

  ImgButton:{
    marginTop: hp('2%'),
    marginLeft:hp('2%'),
  },
});