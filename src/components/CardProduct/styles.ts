import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 95px;
  object-fit: cover;

  border-radius: 8px;
`;

export const ContainerContent = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Heading = styled.Text`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.general[600]};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Paragraphy = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.general[400]};
  color: ${({ theme }) => theme.colors.gray[600]};
  padding: 8px 0;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.general[600]};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Button = styled.TouchableOpacity`
  position: absolute;

  bottom: 0;
  right: 0;
`;
