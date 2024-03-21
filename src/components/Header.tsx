import { Product } from "../interfaces/Product";
interface HeaderProps {
  cart: Product[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}
export const Header = ({ cart,removeFromCart,increaseQuantity,decreaseQuantity }: HeaderProps) => {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3"></div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="image cart"
              />

              <div id="carrito" className="bg-white p-3">
                <p className="text-center">The cart is empty</p>
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img
                            className="img-fluid"
                            src={product.image}
                            alt="image product"
                          />
                        </td>
                        <td>{product.title}</td>
                        <td className="fw-bold">${product.price}</td>
                        <td className="flex align-items-start gap-4">
                          <button type="button" className="btn btn-dark" onClick={
                            ()=>{decreaseQuantity(product.id)}
                          }>
                            -
                          </button>
                          {product.quantity}
                          <button type="button" className="btn btn-dark" onClick={
                            ()=>{increaseQuantity(product.id)}
                          }>
                            +
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-danger" type="button" onClick={()=>{removeFromCart(product.id)}}>
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="text-end">
                  Total due: <span className="fw-bold">$899</span>
                </p>
                <button className="btn btn-dark w-100 mt-3 p-2">
                  Empty Cart
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
