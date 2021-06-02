import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import logoFace from '../../assets/logoFace.png';
import logoGoogle from '../../assets/logoGoogle.png';
import logoFoguete from '../../assets/foguete.png'
import styles from './styles';

export default function LoginCadastro(){

const navigation = useNavigation();

function navigateToPermitirLocalizacao(){
  navigation.navigate('PermitirLocalizacao');
}

  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTextHelp}>Help!</Text>
      </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={navigateToPermitirLocalizacao}>
              <Image style={styles.ImgButton} source={logoGoogle}/>
              <Text style={styles.buttonText}>Continuar com o Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateToPermitirLocalizacao}>
             <Image style={styles.ImgButton} source={logoFace}/>
              <Text style={styles.buttonText}>Continuar com o Facebook</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}