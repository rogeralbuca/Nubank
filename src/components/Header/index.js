import React from 'react';

import {Container, Top, Logo, Title, ContainerIcon} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header({translateY}) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Roger</Title>
      </Top>
      <ContainerIcon
        style={{
          transform: [
            {
              rotate: translateY.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </ContainerIcon>
    </Container>
  );
}
