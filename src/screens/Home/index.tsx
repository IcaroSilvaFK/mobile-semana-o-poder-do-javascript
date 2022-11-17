import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { CategoryButton } from '../../components/CategoryButton';
import { Header } from '../../components/Header';

import {
  Body,
  Container,
  ContentBody,
  Footer,
  FooterContainer,
  HeaderBody,
} from './styles';

import { categories } from '../../mocks/categories';

export function Home() {
  const [tabOpen, setTabOpen] = useState('');

  function handleSetTabOpen(tab: string) {
    console.log('tab');
    const isTabOpen = tabOpen === tab ? '' : tab;

    setTabOpen(isTabOpen);
  }

  return (
    <>
      <Container>
        <Header />
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
          <ContentBody></ContentBody>
        </Body>
      </Container>
      <FooterContainer>
        <Footer>
          <Button>Novo Pedido</Button>
        </Footer>
      </FooterContainer>
    </>
  );
}
