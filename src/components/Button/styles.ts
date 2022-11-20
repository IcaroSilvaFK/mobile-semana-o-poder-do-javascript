import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[200] : theme.colors.red[500]};

  padding: 12px 18px;
  border-radius: 48px;
  max-height: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.general[600]};
  color: ${({ theme }) => theme.colors.white};
`;
