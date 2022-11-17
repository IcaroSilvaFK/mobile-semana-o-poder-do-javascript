import { PressableProps } from 'react-native';

import { Container, Icon, Label, IconContainer } from './styles';

import { categories } from '../../mocks/categories';

interface ICategoryProps extends PressableProps {
  icon: string;
  label: string;
  handleOpenCategory(): void;
  isDisabled: boolean;
}

export function CategoryButton({
  icon,
  handleOpenCategory,
  label,
  isDisabled,
  ...rest
}: ICategoryProps) {
  return (
    <Container onPress={handleOpenCategory} isDisabled={isDisabled} {...rest}>
      <IconContainer>
        <Icon>{icon}</Icon>
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
}
