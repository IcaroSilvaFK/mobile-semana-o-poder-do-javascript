import styled from 'styled-components/native';
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
  flex: 1;
  margin-right: 22px;
`;

export const Text = styled.Text`
  font-size: 18px;

  color: ${({ theme }) => theme.colors.gray[600]};
`;
