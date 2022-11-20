import create from 'zustand';

type Product = {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number;
};

interface IUseCartProps {
  products: Product[];
  addProduct(product: Product): void;
  removeProduct(id: string): void;
}

export const useCart = create<IUseCartProps>()((set, get) => ({
  products: [],
  addProduct(product) {
    const productExists = get().products?.find(
      (element) => element._id === product._id,
    );

    if (!productExists) {
      return set((state) => ({
        ...state,
        products: [...state.products, product],
      }));
    }

    const productUpdated = get().products.map((element) => {
      return element._id === product._id
        ? {
            ...element,
            quantity: element.quantity + product.quantity,
            price: element.price * product.quantity,
          }
        : element;
    });

    set((state) => ({ ...state, products: productUpdated }));
  },
  removeProduct(id) {
    const products = get().products.filter((element) => element._id === id);

    set((state) => ({ ...state, products }));
  },
}));
