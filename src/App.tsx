//import { getProducts } from "./api/services/product";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
export const App = () => {
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Our Products</h2>
        <div className="row mt-5">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
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
