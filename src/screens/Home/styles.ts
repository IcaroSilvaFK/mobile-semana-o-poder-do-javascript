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
export const SubHeader = styled.View`
  padding: 12px;
`;
export const SubHeaderText = styled.Text`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 8px;

  font-family: ${({ theme }) => theme.fonts.general[400]};
  color: ${({ theme }) => theme.colors.gray[800]};
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

export const Divider = styled.View`
  height: 1px;
  width: 100%;

  margin: 12px 0;

  background: ${({ theme }) => theme.colors.gray[100]};
`;
