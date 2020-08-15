import React from 'react';

import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '~/config/config.json';
const Fontello = createIconSetFromFontello(fontelloConfig);

import {Container, TabsContainer, TabItem, TabsText} from './styles.js';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Fontello name="indicar-amigos" size={24} color="#FFF" />
          <TabsText>Indicar amigos</TabsText>
        </TabItem>
        <TabItem>
          <Fontello name="pagar" size={24} color="#FFF" />
          <TabsText>Pagar</TabsText>
        </TabItem>
        <TabItem>
          <Fontello name="depositar" size={24} color="#FFF" />
          <TabsText>Depositar</TabsText>
        </TabItem>
        <TabItem>
          <Fontello name="transferir" size={24} color="#FFF" />
          <TabsText>Transferir</TabsText>
        </TabItem>
        <TabItem>
          <Fontello name="bloquear-cartao" size={24} color="#FFF" />
          <TabsText>Bloquear cartão</TabsText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
