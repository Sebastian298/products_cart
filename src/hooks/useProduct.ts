import { useState, useEffect } from "react";
import { UseProduct } from "../types/UseProduct";
import { getProducts } from "../api/services/product";
import { Product } from "../interfaces/Product";

export const useProduct = (): UseProduct => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const MAX_ITEMS: number = 10;
  const MIN_ITEMS: number = 1;
  useEffect(() => {
    const fetchProducts = async () => {
      const productsRes = await getProducts();
      setProducts(productsRes);
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const itemExist: number = cart.findIndex((item) => item.id === product.id);
    if (itemExist >= 0) {
      if (cart[itemExist].quantity >= MAX_ITEMS) return;
      const newCart: Product[] = [...cart];
      newCart[itemExist].quantity += 1;
      setCart(newCart);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: number) => {
    const newCart: Product[] = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseQuantity = (id: number) => {
    const newCart:Product[] = cart.map((item) =>
      item.id === id && item.quantity < MAX_ITEMS
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(newCart);
  };

  const decreaseQuantity = (id: number) => {
    const newCart:Product[] = cart.map((item) =>
      item.id === id && item.quantity > MIN_ITEMS
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }
  return { products, addToCart, cart, removeFromCart, increaseQuantity,decreaseQuantity,clearCart };
};
