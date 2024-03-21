import { Product } from "../interfaces/Product";

export type UseProduct = {
    products: Product[];
    addToCart: (product: Product) => void;
    cart: Product[];
}