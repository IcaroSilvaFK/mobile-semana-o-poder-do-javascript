import { useAtom } from 'jotai';

import { ModalNewTableIsOpenAtom, TableOrder } from '../../atoms';
import { useCart } from '../../store/cart';
import { Button } from '../Button';

import {
  FooterContainer,
  Footer as SubFooter,
  HStack,
  VStack,
  Text,
} from './styles';

export function Footer() {
  const [, seIsOpenModalNewTable] = useAtom(ModalNewTableIsOpenAtom);
  const [table] = useAtom(TableOrder);
  const { products } = useCart((state) => state);

  function openNewTableModal() {
    seIsOpenModalNewTable(true);
  }
  console.log(!table);
  return (
    <FooterContainer>
      <SubFooter>
        {!table ? (
          <Button onPress={openNewTableModal}>Novo Pedido</Button>
        ) : (
          <HStack>
            <VStack>
              <Text>Seu carrinho está vazio</Text>
            </VStack>
            <Button onPress={openNewTableModal} disabled={!products.length}>
              Confirmar pedido
            </Button>
          </HStack>
        )}
      </SubFooter>
    </FooterContainer>
  );
}
