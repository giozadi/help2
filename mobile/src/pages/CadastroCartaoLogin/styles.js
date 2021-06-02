import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2d40ee',
    paddingHorizontal: hp('2.5%'),
    paddingTop: Constants.statusBarHeight + hp('4%'),
  },

  textHeader: {
    paddingTop: Constants.statusBarHeight + hp('1%'),
    color: '#fff',
    fontSize: hp('4.5%'),
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Constants.statusBarHeight,

  },

  groupInput: {
    paddingTop: Constants.statusBarHeight + 1
  },

  inputNumberCard: {
    borderWidth: hp('1%'),
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: hp('1%'),
    padding: hp('1%'),
    margin: hp('1%'),
    width: hp('43%'),
    },

    inputDateCard: {
      borderWidth: wp('1%'),
      borderColor: '#fff',
      backgroundColor: '#fff',
      padding: hp('1.3%'),
      borderRadius: hp('1%'),
      width: wp('42%'),
      margin: hp('1%'),
    },

    inputCodeCard: {
      borderWidth: wp('1%'),
      borderColor: '#fff',
      backgroundColor: '#fff',
      padding: hp('1.3%'),
      borderRadius: hp('1%'),
      width: wp('42%'),
      margin: hp('1%')
    },

    inputCodeCVC: {
      marginLeft: wp('43%'),
      marginTop: hp('-9.1%')
    },

    buttonText:{
      color: '#fff',
      fontSize: hp('2.7%'),
      marginTop: hp('-2%'),
      marginLeft: hp('-1%'),
    },

    button: {
      paddingTop: Constants.statusBarHeight + 1,
      backgroundColor: '#4553FA',
      borderRadius: hp('1%'),
      height: hp('8%'),
      justifyContent: 'center',
      alignItems: 'center',
      padding: wp('5%'),
      margin: hp('1%'),
      width: wp('87%'),
    },

    groupButton: {
      paddingTop: Constants.statusBarHeight + 3
    }

});
