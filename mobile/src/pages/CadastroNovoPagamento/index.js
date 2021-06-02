import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CadastroPerfil(){
  return(
    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.textHeader}>Help!</Text>
        </View>
        <Text style={styles.descricaoTela}>Novo cartão de Crédito</Text>
        <View style={styles.inputsPerfil}>
          <TextInput
            style={styles.inputcartao}
            maxLength={3}
            placeholder="1234 5678 1234 5678"
          />

        <TextInput
            style={styles.inputdata}
            maxLength={3}
            placeholder="MM/AA"
            keyboardType="numeric"
          />

          
        <TextInput
            style={styles.inputcodigo}
            maxLength={3}
            placeholder="CVC"
            keyboardType="numeric"
          />
       </View>
       <TouchableOpacity style={styles.buttonCadastroCartao}>
            <Text style={styles.buttonTextSalvarPerfil}>Salvar</Text>
          </TouchableOpacity>
      </View>
  );
}