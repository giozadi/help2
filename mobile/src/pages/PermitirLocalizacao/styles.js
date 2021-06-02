import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import {WidthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({

  container: {
   flex: 1,
   backgroundColor: '#2d40ee',
   paddingHorizontal: hp('3.2%'),
   paddingTop: Constants.statusBarHeight + hp('3.5%'),
  },

  textHeader: {
    paddingTop: Constants.statusBarHeight + hp('5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },

  textTitle:{
    color: '#fff',
    fontSize: hp('8%'),
    fontWeight: 'bold',
  },

  groupText: {
    paddingTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    marginTop: hp('2%'),
    color: '#fff',
    fontSize: hp('2.6%'),
  },

  button:{
    backgroundColor: '#4553FA',
    borderRadius: hp('1%'),
    marginTop: hp('2%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  groupButton: {
    marginTop: hp('3%'),
  },

  buttonText:{
    flex: 1,
    color: '#fff',
    fontSize: hp('2.7%'),
    marginTop: hp('1.8%'),
  },

})
