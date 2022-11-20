import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;

  position: absolute;

  bottom: 0;
  right: 0;
  left: 0;

  padding-top: 20px;
`;
export const ContainerContent = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.gray[100]};
  padding-top: ${`${Constants.statusBarHeight}px`};
`;
export const Header = styled.View`
  flex: 1;
  max-height: 200px;
`;
export const Image = styled.Image`
  flex: 1;
  object-fit: cover;
`;
export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.rgba.dark.alpha01};
  padding: 6px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;
export const Body = styled.View`
  padding: 20px 20px 0;
  flex: 1;
`;
export const Heading = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-family: ${({ theme }) => theme.fonts.general[600]};
`;
export const Description = styled.Text`
  margin-top: 12px;

  color: ${({ theme }) => theme.colors.gray[300]};
  font-family: ${({ theme }) => theme.fonts.general[400]};
`;
export const Ingredients = styled.View`
  margin-top: 20px;
  flex: 1;
`;
export const SubHeading = styled.Text`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.general[400]};
`;

export const FooterContainer = styled.View`
  max-height: 100px;
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 22px;
`;
export const Footer = styled.SafeAreaView`
  justify-content: center;
  flex: 1;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex: 1;
`;

export const VStack = styled.View`
  margin-right: 22px;
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.general[400]};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Price = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-top: 4px;
`;
