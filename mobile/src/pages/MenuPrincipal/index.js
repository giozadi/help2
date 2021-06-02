import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MenuPrincipal(){

  const navigation =  useNavigation();

  function navigateToInicioChat(){
    navigation.navigate('InicioChat');
  }

  function navigateToInicioCadastroEmpresa(){
    navigation.navigate('InicioCadastroEmpresa');
  }

  function navigateToCadastroPerfil(){
    navigation.navigate('CadastroPerfil');
  }

  function navigateToCadastroPagamento(){
    navigation.navigate('CadastroNovoPagamento');
  }

  return(
    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.textHeader}>Help!</Text>
         <View style={styles.menuOptions}>
            <TouchableOpacity onPress={navigateToCadastroPerfil}>
              <Text style={styles.textOption}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textOption}>Atendimentos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToCadastroPagamento}>
              <Text style={styles.textOption}>Pagamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textOption}>Endereços</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textOption}>Termos de Uso</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textOption}>Sair</Text>
            </TouchableOpacity>
         </View>
        </View>
        <View style={styles.groupButtonHelp}>
          <TouchableOpacity style={styles.buttonHelp} onPress={navigateToInicioChat}>
            <Text style={styles.buttonTextHelp}>Preciso de Ajuda!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groupButtonHelpCorporation}>
          <TouchableOpacity style={styles.buttonHelpCorporation} onPress={navigateToInicioCadastroEmpresa}>
            <Text style={styles.buttonTextHelpCorporation}>Help! Corporation</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
}