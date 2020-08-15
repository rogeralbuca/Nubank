import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '~/config/config.json';
const Fontello = createIconSetFromFontello(fontelloConfig);

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  Account,
  Agency,
  Bold,
} from './styles';

import QRCode from '~/components/QRCode';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode />
        <Agency>
          Agência <Bold>0001</Bold>
        </Agency>
        <Account>
          Conta <Bold>682265-3</Bold>
        </Account>
      </Code>
      <Nav>
        <NavItem>
          <Fontello name="me-ajuda" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Fontello name="perfil" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Fontello name="configurar-cartao" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Fontello name="configurar-app" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
