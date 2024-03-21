import { Product } from "../../types/Product";
export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}