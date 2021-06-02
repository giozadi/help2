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
    height:hp('33%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader:{
    fontSize:hp('3%'),
    fontWeight: 'bold',
    marginTop: Constants.statusBarHeight + hp('5%'),
  },

  buttonHelp:{
    backgroundColor: '#4553FA',
    borderRadius: hp('1%'),
    marginTop: hp('18%'),
    height: hp('8%'),
    marginLeft: hp('2%'),
    marginRight: hp('3%'),
    paddingHorizontal: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonHelpCorporation:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: hp('1%'),
    marginTop: Constants.statusBarHeight + hp('30%'),
    marginLeft: Constants.statusBarHeight + hp('10%'),
    height: hp('6%'),
    width: hp('25%'),
  },

  buttonTextHelp:{
    color: '#fff',
    fontSize: hp('2.7%'),
    alignItems: 'center',
    
  },

  buttonTextHelpCorporation:{
    color: '#2d40ee',
    fontSize: hp('2.3%'),
    fontWeight: 'bold',
    alignItems: 'center',
  },

  textOption: {
    fontSize: hp('2%'),
    alignItems: 'baseline',
  },

  menuOptions: {
    alignItems: 'baseline',
    marginLeft: hp('-32%'),
    marginTop: hp('-1%'),
  },

  groupButtonHelp: {

  },

  groupButtonHelpCorporation:{

  },
});