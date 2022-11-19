import { X } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { useAtom } from 'jotai';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  ContainerContent,
  Content,
  Form,
  Heading,
  HStack,
  Input,
  SubmitButton,
  TextButton,
  Button,
  Container,
} from './styles';
import { ModalNewTableIsOpenAtom, TableOrder } from '../../atoms';

export function ModalNewTables() {
  const { colors } = useTheme();
  const [isOpenModal, setIsOpenModal] = useAtom(ModalNewTableIsOpenAtom);
  const [table, setTableValue] = useAtom(TableOrder);

  function closeModal() {
    setIsOpenModal(false);
  }

  function handleChangeTables(table: string) {
    setTableValue(+table);
  }

  function onSaveTable() {
    console.log(table);
    console.log(!table);
    if (!table) return;
    setIsOpenModal(false);
  }

  if (!isOpenModal) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Modal
          visible={isOpenModal}
          onDismiss={closeModal}
          transparent
          animationType="fade"
        >
          <ContainerContent>
            <Content>
              <HStack>
                <Heading>Informar a Mesa</Heading>
                <Button onPress={closeModal}>
                  <X size={20} color={colors.gray[600]} />
                </Button>
              </HStack>
              <Form>
                <Input
                  placeholder="Digite o numero da mesa"
                  placeholderTextColor={colors.gray[600]}
                  keyboardType="numeric"
                  onChangeText={handleChangeTables}
                />
                <SubmitButton onPress={onSaveTable}>
                  <TextButton>Salvar</TextButton>
                </SubmitButton>
              </Form>
            </Content>
          </ContainerContent>
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
