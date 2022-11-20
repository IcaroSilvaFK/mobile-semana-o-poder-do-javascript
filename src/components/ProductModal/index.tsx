import { X } from 'phosphor-react-native';
import { FlatList, Modal, StatusBar } from 'react-native';
import { IngredientsCard } from './IngredientsCard';

import {
  ModalProductIsOpenAtom,
  ProductFromModalMoreDetailsProduct,
} from '../../atoms';

import {
  Container,
  Header,
  Image,
  ButtonClose,
  Body,
  Heading,
  Description,
  Ingredients,
  SubHeading,
  ContainerContent,
  FooterContainer,
  Footer,
  Text,
  VStack,
  Price,
  HStack,
} from './styles';
import { useAtom } from 'jotai';
import { useTheme } from 'styled-components';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { Button } from '../Button';

export function ProductModal() {
  const [isOpenModal, setIsOpenModal] = useAtom(ModalProductIsOpenAtom);
  const [product] = useAtom(ProductFromModalMoreDetailsProduct);
  const { colors } = useTheme();

  if (!isOpenModal || !product) {
    return null;
  }

  return (
    <Container>
      <Modal
        visible={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        transparent
        animationType="slide"
      >
        <ContainerContent>
          <Header>
            <Image source={{ uri: product.imagePath }} />
            <ButtonClose onPress={() => setIsOpenModal(false)}>
              <X size={25} color={colors.white} />
            </ButtonClose>
          </Header>
          <Body>
            <Heading>{product.name}</Heading>
            <Description>{product.description}</Description>
            <Ingredients>
              {product.ingredients.length > 0 && (
                <>
                  <SubHeading>Ingredientes</SubHeading>
                  <FlatList
                    data={product.ingredients}
                    style={{ marginTop: 20 }}
                    renderItem={({ item }) => <IngredientsCard {...item} />}
                    keyExtractor={({ _id }) => _id}
                    showsVerticalScrollIndicator={false}
                  />
                </>
              )}
            </Ingredients>
          </Body>
          <FooterContainer>
            <Footer>
              <HStack>
                <VStack>
                  <Text>Preço</Text>
                  <Price>{currencyFormatter(product.price)}</Price>
                </VStack>
                <Button>Adicionar ao pedido</Button>
              </HStack>
            </Footer>
          </FooterContainer>
        </ContainerContent>
      </Modal>
    </Container>
  );
}
