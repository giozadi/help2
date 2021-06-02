import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function InicioApp(){

const navigation = useNavigation();

function navigateToMenuPrincipal(){
  navigation.navigate('MenuPrincipal');
}
  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Help!</Text>
      </View>
      <View style={styles.buttonComponent}>
      <TouchableOpacity style={styles.button} onPress={navigateToMenuPrincipal}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}