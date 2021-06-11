import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import logoFace from '../../assets/logoFace.png';
import logoGoogle from '../../assets/logoGoogle.png';
import styles from './styles';
import api from '../../service/api';

export default function LoginCadastro(){

const navigation = useNavigation();
signIn = async () => {
    const response = await api.post('/auth', {
      cpf: 'teste',
      senha: 'teste',
    });

    const { user, token } = response.data;
    console.log(token);
}



function navigateToPermitirLocalizacao(){
  navigation.navigate('PermitirLocalizacao');
}

function navigateToCadastroPerfil(){
  navigation.navigate('CadastroPerfil');
}

  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTextHelp}>Help!</Text>
      </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={navigateToCadastroPerfil}>
              <Image style={styles.ImgButton} source={logoGoogle}/>
              <Text style={styles.buttonTextCadastre}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateToPermitirLocalizacao}>
             <Image style={styles.ImgButton} source={logoFace}/>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}