import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';

signIn = async () => {
  const response = await api.post('/login', {
    cpf: 'teste',
    senha: 'teste',
  });

  const { user, token } = response.data;
  console.log(token);
}

export default function CadastroPerfil(){
  return(
    <View style={styles.container}>
   <View style={styles.logo}>
        <Text style={styles.logoTextHelp}>Help!</Text>
      </View>
      
        <View style={styles.inputsPerfil}>
          <TextInput
            style={styles.inputPerfil}
            maxLength={21}
            placeholder="Login"
          />

        <TextInput
            style={styles.inputPerfil}
            placeholder="Senha"
            maxLength={21}
            placeholder="Senha"
            secureTextEntry={true}
            keyboardType="numeric"
          />
       </View>
       <TouchableOpacity style={styles.buttonCadastroPerfil} onPress={signIn}>
            <Text style={styles.buttonTextSalvarPerfil}>Salvar</Text>
          </TouchableOpacity>
      </View>
  );
}