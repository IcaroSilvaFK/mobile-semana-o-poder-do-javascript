import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px 8px;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  border-radius: 8px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-family: ${({ theme }) => theme.fonts.general[400]};
`;
