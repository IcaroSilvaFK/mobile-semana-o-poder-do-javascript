import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 18px 22px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitle = styled.View``;

export const SubHeading = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.general[400]};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Heading = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.general[700]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const TextLight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.general[400]};
`;

export const Button = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.red[500]};
  font-family: ${({ theme }) => theme.fonts.general[600]};
`;
