import {Product} from '../interfaces/Product';
interface ProductsProps  {
    product: Product;
    addToCart: (product:Product) => void;
}
export const Products = (props:ProductsProps) =>{
    const {title,image,description,price} = props.product;
    const {addToCart} = props;
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img
                className="img-fluid"
                src={image}
                alt="image product"
              />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold">{title}</h3>
              <p>
                {description}
              </p>
              <p className="fw-black text-primary fs-3">${price}</p>
              <button type="button" className="btn btn-dark w-100" onClick={()=>addToCart(props.product)}>
                Add to cart
              </button>
            </div>
        </div>
    )
}