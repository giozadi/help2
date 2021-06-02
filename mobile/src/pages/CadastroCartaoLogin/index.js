import React, { useState } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function CadastroCartaoLogin(){

  const navigation = useNavigation();

  function navigateToPermitirLocalizacao(){
    navigation.navigate('PermitirLocalizacao');
  }

  function navigateToInicioApp(){
    navigation.navigate('InicioApp');
  }
  
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');

  return(
  <View style={styles.container}>
    <TouchableOpacity>
      <Feather name="arrow-left" size={25} color="#fff" onPress={navigateToPermitirLocalizacao}/>
    </TouchableOpacity>
    <Text style={styles.textHeader}>Novo Cartão de Crédito/Débito</Text>
    <View style={styles.groupInput}>

      <TextInput 
      style={styles.inputNumberCard}
      maxLength={16}
      keyboardType='numeric'
      placeholder="1234 5678 1234 5678"
      onChangeText={(val) => setName(val)}
      />

      <TextInput
        style={styles.inputDateCard}
        maxLength={4}
        keyboardType='numeric'
        placeholder="MM/AA"
      />

    </View>

    <View style={styles.inputCodeCVC}>
    <TextInput
        style={styles.inputCodeCard}
        maxLength={3}
        keyboardType='numeric'
        placeholder="CVC"
    />
    </View>

    <View style={styles.groupButton}>
    <TouchableOpacity style={styles.button} onPress={navigateToInicioApp}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={navigateToInicioApp}>
      <Text style={styles.buttonText}>Depois</Text>
    </TouchableOpacity > 
    </View>
  </View>
  );
}