import { Product } from "../interfaces/Product";

export type UseProduct = {
    products: Product[];
    addToCart: (product: Product) => void;
    cart: Product[];
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
    isEmptyCart: boolean;
    totalCart: number;
}