import { PlusCircle } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { currencyFormatter } from '../../utils/currencyFormatter';
import {
  Container,
  ContainerContent,
  Heading,
  Image,
  Paragraphy,
  Price,
  Button,
} from './styles';

interface ICardProducts {
  title: string;
  image: string;
  description: string;
  price: number | string;
}

export function CardProduct({
  description,
  image,
  price,
  title,
}: ICardProducts) {
  const { colors } = useTheme();

  return (
    <Container>
      <Image source={{ uri: image }} />
      <ContainerContent>
        <Heading>{title}</Heading>
        <Paragraphy>{description}</Paragraphy>
        <Price>{currencyFormatter(+price)}</Price>
      </ContainerContent>
      <Button>
        <PlusCircle size={22} color={colors.red[500]} />
      </Button>
    </Container>
  );
}
