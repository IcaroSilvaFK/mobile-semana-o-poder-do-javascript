import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.red[500]};

  padding: 12px 22px;
  border-radius: 48px;

  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.general[600]};

  color: ${({ theme }) => theme.colors.white};
`;
