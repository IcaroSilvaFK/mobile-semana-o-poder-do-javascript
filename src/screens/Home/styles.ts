import styled, { css } from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray[50]};
  ${isAndroid &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `}
`;

export const FooterContainer = styled.View`
  height: 100px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
export const Footer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;

  padding: 0 22px;
`;

export const Body = styled.View`
  flex: 1;
`;

export const HeaderBody = styled.View`
  align-items: center;
`;

export const ContentBody = styled.View`
  flex: 1;
`;
