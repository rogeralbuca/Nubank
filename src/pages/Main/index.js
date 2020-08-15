import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';

import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '~/config/config.json';
const Fontello = createIconSetFromFontello(fontelloConfig);

import {
  PanGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import Chart from '~/components/Chart';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardBalance,
  CardFooter,
  Title,
  SubTitle,
  Description,
  Annotation,
  SafeAreaView,
  Balance,
} from './styles';

export default function Main() {
  let offset = 0;

  const [visibility, setVsibility] = useState(true);

  const translateY = new Animated.Value(0);

  const changeHandleVisibility = () => {
    setVsibility(!visibility);
  };

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 440 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 440 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <Header translateY={translateY} />
        <Content>
          <Menu translateY={translateY} />
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 440],
                      outputRange: [-50, 0, 440],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <CardHeader>
                <Fontello name="conta" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Chart />
                <Title>Saldo disponível</Title>
                <CardBalance>
                  <Description style={{opacity: visibility ? 1 : 0}}>
                    R$ 123.045,31
                  </Description>
                  <TouchableOpacity onPress={() => changeHandleVisibility()}>
                    <Icon
                      name={visibility ? 'visibility-off' : 'visibility'}
                      size={28}
                      color="#999"
                    />
                  </TouchableOpacity>
                </CardBalance>
                <SubTitle>
                  Você ganhou <Balance>R$ 162,00</Balance> neste mês
                </SubTitle>
              </CardContent>
              <CardFooter>
                <Fontello name="depositar" size={28} color="#999" />
                <Annotation>
                  Transferencia de R$ 2.980,00 recebida de Diego Fernandes hoje
                </Annotation>
                <Icon name="keyboard-arrow-right" size={28} color="#999" />
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs translateY={translateY} />
      </Container>
    </SafeAreaView>
  );
}
