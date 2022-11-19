import { useAtom } from 'jotai';
import { TableOrder } from '../../atoms';

import {
  Container,
  Heading,
  SubHeading,
  TextLight,
  Button,
  TextButton,
  ContainerTitle,
} from './styles';

export function Header() {
  const [table, setTable] = useAtom(TableOrder);

  function handleCancelOrder() {
    setTable(null);
  }

  return (
    <Container>
      <ContainerTitle>
        {!table ? (
          <SubHeading>Bem-Vindo(a) ao</SubHeading>
        ) : (
          <Heading>Pedido</Heading>
        )}
        {!table && (
          <Heading>
            waiter<TextLight>app</TextLight>
          </Heading>
        )}
      </ContainerTitle>
      {!!table && (
        <Button onPress={handleCancelOrder}>
          <TextButton>Cancelar Pedido</TextButton>
        </Button>
      )}
    </Container>
  );
}
