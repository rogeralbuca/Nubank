import {Animated, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  margin: 0 30px;
`;

export const Code = styled.View`
  padding: 10px;
  align-items: center;
  overflow: hidden;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
  width: 100%;
`;

export const NavItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  flex: 1;
  align-self: flex-start;
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export const Account = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-top: 5px;
`;

export const Agency = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-top: 5px;
`;

export const Bold = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;
