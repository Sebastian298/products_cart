import { Header } from "./components/Header";
import { Products } from "./components/Products";
import {useProduct} from './hooks/useProduct'
export const App = () => {
  const {products,addToCart,cart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart} = useProduct();
  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart}/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Our Products</h2>
        <div className="row mt-5">
          {products.map((product) => (
            <Products key={product.id} product={product} addToCart={addToCart}/>
          ))}
          
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">Products Shopping - All rights reserved</p>
        </div>
    </footer>
    </>
  );
};
