import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch remove action
    dispatch(remove(id));
  }

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-3"
      style={{ marginBottom: "15px" }}
    >
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
