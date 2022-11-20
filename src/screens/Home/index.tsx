import { useState } from 'react';
import { FlatList } from 'react-native';
import { useAtom } from 'jotai';

import { Button, CategoryButton, Header, CardProduct } from '../../components';

import {
  Body,
  Container,
  ContentBody,
  HeaderBody,
  Divider,
  SubHeader,
  SubHeaderText,
} from './styles';

import { categories } from '../../mocks/categories';
import { products } from '../../mocks/products';
import {
  ModalProductIsOpenAtom,
  ProductFromModalMoreDetailsProduct,
  TableOrder,
} from '../../atoms';
import { Footer } from '../../components/Footer';
import { IProductProps } from '../../@types/IProducts';

export function Home() {
  const [tabOpen, setTabOpen] = useState('');
  const [table] = useAtom(TableOrder);
  const [, setModalProductMoreDetailsIsOpen] = useAtom(ModalProductIsOpenAtom);
  const [, setProductFromMoreDetails] = useAtom(
    ProductFromModalMoreDetailsProduct,
  );

  function handleSetTabOpen(tab: string) {
    const isTabOpen = tabOpen === tab ? '' : tab;
    setTabOpen(isTabOpen);
  }

  function handleOpenAndSetProductInModalProductMoreDetails(
    product: IProductProps,
  ) {
    setProductFromMoreDetails(product);
    setModalProductMoreDetailsIsOpen(true);
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
                  selectProductFromMoreDetails={() =>
                    handleOpenAndSetProductInModalProductMoreDetails(item)
                  }
                />
              )}
            />
          </ContentBody>
        </Body>
      </Container>
      <Footer />
    </>
  );
}
