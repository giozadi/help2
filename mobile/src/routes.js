import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import LoginCadastro from './pages/LoginCadastro';
import PermitirLocalizacao from './pages/PermitirLocalizacao';
import CadastroCartaoLogin from './pages/CadastroCartaoLogin';
import InicioApp from './pages/InicioApp';
import MenuPrincipal from './pages/MenuPrincipal';
import InicioChat from './pages/InicioChat';
import ChatApp from './pages/ChatApp';
import FinalAtendimento from './pages/FinalAtendimento';
import AvaliacaoAtendimento from './pages/AvaliacaoAtendimento';
import CadastroPerfil from './pages/CadastroPerfil';
import HistoricoAtendimentos from './pages/HistoricoAtendimentos';
import ConsultaAtendimento from './pages/ConsultaAtendimento';
import ConsultaPagamentos from './pages/ConsultaPagamentos';
import CadastroNovoPagamento from './pages/CadastroNovoPagamento';
import CadastroEndereco from  './pages/CadastroEndereco';
import TermosDeUso from './pages/TermosDeUso';
import InicioCadastroEmpresa from './pages/InicioCadastroEmpresa';
import CNPJEmpresa from './pages/CNPJEmpresa';
import AtividadeEmpresa from './pages/AtividadeEmpresa';
import AreaDeServicoEmpresas from './pages/AreaDeServicoEmpresas';


export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator>

        <AppStack.Screen name="LoginCadastro" component={LoginCadastro} options={{headerShown: false}}/>
        <AppStack.Screen name="PermitirLocalizacao" component={PermitirLocalizacao} options={{headerShown: false}}/>
        <AppStack.Screen name="CadastroCartaoLogin" component={CadastroCartaoLogin} options={{headerShown: false}}/>
        <AppStack.Screen name="InicioApp" component={InicioApp} options={{headerShown: false}}/>
        <AppStack.Screen name="MenuPrincipal" component={MenuPrincipal} options={{headerShown: false}}/>
        <AppStack.Screen name="InicioChat" component={InicioChat} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="ChatApp" component={ChatApp} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="FinalAtendimento" component={FinalAtendimento} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="AvaliacaoAtendimento" component={AvaliacaoAtendimento} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="CadastroPerfil" component={CadastroPerfil} options={{title: "Help!", headerTitleAlign: 'center'}} options={{headerShown: false}}/>
        <AppStack.Screen name="HistoricoAtendimentos" component={HistoricoAtendimentos} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="ConsultaAtendimento" component={ConsultaAtendimento} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="ConsultaPagamentos" component={ConsultaPagamentos} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="CadastroNovoPagamento" component={CadastroNovoPagamento} options={{title: "Help!", headerTitleAlign: 'center'}} options={{headerShown: false}}/>
        <AppStack.Screen name="CadastroEndereco" component={CadastroEndereco} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="TermosDeUso" component={TermosDeUso} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="InicioCadastroEmpresa" component={InicioCadastroEmpresa} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="CNPJEmpresa" component={CNPJEmpresa} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="AtividadeEmpresa" component={AtividadeEmpresa} options={{title: "Help!", headerTitleAlign: 'center'}}/>
        <AppStack.Screen name="AreaDeServicoEmpresas" component={AreaDeServicoEmpresas} options={{title: "Help!", headerTitleAlign: 'center'}}/>
      </AppStack.Navigator>

      </NavigationContainer>
  );
}
