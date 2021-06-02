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
        <Text style={styles.logoFoto}>FOTO</Text>
        <View style={styles.inputsPerfil}>
          <TextInput
            style={styles.inputPerfil}
            maxLength={3}
            placeholder="Nome Completo"
          />

        <TextInput
            style={styles.inputPerfil}
            maxLength={3}
            placeholder="CPF (Opcional)"
            keyboardType="numeric"
          />
       </View>
       <TouchableOpacity style={styles.buttonCadastroPerfil}>
            <Text style={styles.buttonTextSalvarPerfil}>Salvar</Text>
          </TouchableOpacity>
      </View>
  );
}