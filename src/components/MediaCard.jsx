import * as React from "react";

import { clientContext } from "../contexts/ClientContext";
import { useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Rating } from "@mui/material";

export default function MediaCard() {
  const {
    getProducts,
    products,
    currentPosts,
    addAndDeleteProductInCart,
    checkProductInCart,
    addAndDeleteProductInFavorites,
    checkProductInfavorites,
  } = React.useContext(clientContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="card-page">
        {products ? (
          <>
            {currentPosts.map((product) => (
              <Link to={`/product/${product.id}`}>
                <Card className="card">
                  <Card.Img className="img" variant="top" src={product.image} />

                  <Card.Body>
                    <Card.Title
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Rating
                        size="small"
                        name="read-only"
                        value={4}
                        readOnly
                      />
                    </Card.Title>

                    <Card.Title
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>{product.name}</div> <div> {product.price}сом</div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </>
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </div>
    </>
  );
}
