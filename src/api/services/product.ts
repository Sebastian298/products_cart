interface Product {
    id: number;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}