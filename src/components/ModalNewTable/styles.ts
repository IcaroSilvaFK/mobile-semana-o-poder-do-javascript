import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
`;

export const ContainerContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.rgba.white.alpha04};
  padding: 0 12px;
`;

export const Content = styled.View`
  max-width: 390px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;

  padding: 22px;
  elevation: 1;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-family: ${({ theme }) => theme.fonts.general[600]};
`;

export const Button = styled.TouchableOpacity``;

export const Form = styled.View`
  margin: 22px 0;
`;

export const Input = styled.TextInput`
  padding: 12px;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.general[400]};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const SubmitButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.red[500]};
  align-items: center;

  padding: 16px 0;

  border-radius: 48px;

  margin-top: 22px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.general[600]};
  font-size: 14px;
`;
