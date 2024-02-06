import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // get products
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

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
          <Button variant="primary">Add To Cart</Button>
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
