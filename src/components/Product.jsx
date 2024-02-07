import { useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch an action for fetchProducts
    dispatch(getProducts());
    // get products
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((result) => setProducts(result));
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger" className="text-center">
        Something went wrong! Please try again later.
      </Alert>
    );
  }

  const addToCart = (product) => {
    // using dispatch for add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "15px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
        </Card.Body>

        <Card.Footer className="text-center" style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2 className="text-center">Product Dashboard</h2>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
