import React from "react";

/* REACT-BOOTSTRAP */
import { Card } from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded bg-dark text-light ">
      <Link className="text-light" to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body className="text-light">
        <Link to={`/product/${product._id}`}>
          <Card.Title className="text-light" as="div">
            <strong className="text-light">{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text className="text-light" as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </Card.Text>

        <Card.Text className="text-light" as="h3">₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;