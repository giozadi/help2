import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

signIn = async () => {
  const response = await api.post('/auth', {
    cpf: 'teste',
    senha: 'teste',
  });

  const { user, token } = response.data;
  console.log(token);
}

export default function CadastroPerfil(){
  return(
    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.textHeader}>Help!</Text>
        </View>
        <Text style={styles.logoFoto}>FOTO</Text>
        <View style={styles.inputsPerfil}>
          <TextInput
            id="senha"
            style={styles.inputPerfil}
            maxLength={21}
            placeholder="Login"
          />

        <TextInput
            id="senha"
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