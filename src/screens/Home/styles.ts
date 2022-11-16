import styled, { css } from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  ${isAndroid &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `}
`;

export const Heading = styled.Text``;
