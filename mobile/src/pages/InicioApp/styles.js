import { StyleSheet } from 'react-native';
import {WidthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d40ee',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + hp('1%'),
  },

  logo:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoText:{
    fontSize: hp('12%'),
    color: '#fff',
    fontWeight: 'bold',
    marginTop: hp('22%'),
  },

  buttonComponent: {
    marginTop: hp('20%'),
  },

  button:{
    backgroundColor: '#4553FA',
    borderRadius: hp('1%'),
    marginTop: hp('1%'),
    height: hp('8%'),
  },

  buttonText:{
    color: '#fff',
    fontSize: hp('3%'),
    marginTop: hp('1.5%'),
    alignItems: 'center',
    marginLeft: Constants.statusBarHeight + hp('14%'),
  },
});