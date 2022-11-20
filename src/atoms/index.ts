import { atom } from 'jotai';
import { IProductProps } from '../@types/IProducts';

export const ModalNewTableIsOpenAtom = atom(false);
export const TableOrder = atom<number | null>(null);
export const ModalProductIsOpenAtom = atom(false);
export const ProductFromModalMoreDetailsProduct = atom<IProductProps | null>(
  null,
);
