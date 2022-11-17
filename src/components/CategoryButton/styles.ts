import styled from 'styled-components/native';

type IContainerProps = {
  isDisabled: boolean;
};
export const Container = styled.Pressable<IContainerProps>`
  align-items: center;

  opacity: ${({ isDisabled }) => (!isDisabled ? '1' : '0.4')};

  padding: 18px;
`;

export const IconContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};

  padding: 10px;
  border-radius: 50px;

  elevation: 1;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.general[600]};

  margin-top: 4px;
`;

export const Icon = styled.Text`
  font-size: ${({ theme }) => theme.fontsSizes.medium};
`;
