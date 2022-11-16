import styled from 'styled-components/native';

export const Container = styled.View``;

export const SubHeading = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.general[400]};
`;

export const Heading = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.general[700]};
  text-transform: uppercase;
`;

export const TextLight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.general[400]};
`;
