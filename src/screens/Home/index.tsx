import { useState } from 'react';
import { FlatList } from 'react-native';
import { useAtom } from 'jotai';

import { Button, CategoryButton, Header, CardProduct } from '../../components';

import {
  Body,
  Container,
  ContentBody,
  Footer,
  FooterContainer,
  HeaderBody,
  Divider,
  SubHeader,
  SubHeaderText,
} from './styles';

import { categories } from '../../mocks/categories';
import { products } from '../../mocks/products';
import { ModalNewTables } from '../../components/ModalNewTable';
import { ModalNewTableIsOpenAtom, TableOrder } from '../../atoms';

export function Home() {
  const [tabOpen, setTabOpen] = useState('');
  const [, seIsOpenModalNewTable] = useAtom(ModalNewTableIsOpenAtom);
  const [table] = useAtom(TableOrder);

  function handleSetTabOpen(tab: string) {
    const isTabOpen = tabOpen === tab ? '' : tab;
    setTabOpen(isTabOpen);
  }

  function openNewTableModal() {
    seIsOpenModalNewTable(true);
  }

  return (
    <>
      <Container>
        <Header />
        {!!table && (
          <SubHeader>
            <SubHeaderText>Mesa {table}</SubHeaderText>
          </SubHeader>
        )}
        <Body>
          <HeaderBody>
            <FlatList
              data={categories}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => (
                <CategoryButton
                  icon={item.icon}
                  label={item.name}
                  isDisabled={tabOpen !== item.name}
                  handleOpenCategory={() => handleSetTabOpen(item.name)}
                />
              )}
              horizontal
            />
          </HeaderBody>
          <ContentBody>
            <FlatList
              style={{ marginTop: 18, flex: 1 }}
              contentContainerStyle={{ paddingHorizontal: 22 }}
              data={products}
              ItemSeparatorComponent={() => <Divider />}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => (
                <CardProduct
                  description={item.description}
                  image={item.imagePath}
                  price={item.price}
                  title={item.name}
                />
              )}
            />
          </ContentBody>
        </Body>
      </Container>
      <FooterContainer>
        <Footer>
          <Button onPress={openNewTableModal}>Novo Pedido</Button>
        </Footer>
      </FooterContainer>
    </>
  );
}
