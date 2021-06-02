import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function PermitirLocalizacao(){

  const navigation = useNavigation();

  function navigateToLoginCadastro (){
    navigation.navigate('LoginCadastro');
  }

  function navigateToCadastroCartaoLogin(){
    navigation.navigate('CadastroCartaoLogin');
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToLoginCadastro}>
        <Feather name="arrow-left" size={25} color="#fff"/>
      </TouchableOpacity>
      <View style={styles.textHeader}>
          <Text style={styles.textTitle}>Posso saber onde você está?</Text>
          <View style={styles.groupText}>
             <Text style={styles.text}>Talvez vou precisar enviar um</Text>
             <Text style={styles.text}> técnico até você para te ajudar</Text>
          </View>
      </View>
    <View style={styles.groupButton}>
      <TouchableOpacity style={styles.button} onPress={navigateToCadastroCartaoLogin}>
        <Text style={styles.buttonText}>Sim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToCadastroCartaoLogin}>
        <Text style={styles.buttonText}>Talvez, depois</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}