import { useState, useEffect } from 'react';
import { UseProduct } from '../types/UseProduct';
import { getProducts } from '../api/services/product';
import { Product } from '../interfaces/Product';

export const useProduct = (): UseProduct => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const productsRes = await getProducts();
            setProducts(productsRes);
        };
        fetchProducts();
    }, []);
    return { products };
}