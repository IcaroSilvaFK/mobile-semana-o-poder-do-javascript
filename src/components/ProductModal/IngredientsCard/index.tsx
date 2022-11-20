import { Container, Text } from './styles';

interface IIngredientsCardProps {
  icon: string;
  name: string;
}

export function IngredientsCard({ icon, name }: IIngredientsCardProps) {
  return (
    <Container>
      <Text>{icon}</Text>
      <Text style={{ marginLeft: 14 }}>{name}</Text>
    </Container>
  );
}
