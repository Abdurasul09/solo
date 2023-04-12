import { Card, Button, NavItem } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating } from "@mui/material";

const FavoritesPage = () => {
  const {
    getFavorites,
    favorites,
    checkProductInfavorites,
    addAndDeleteProductInFavorites,
  } = useContext(clientContext);

  useEffect(() => {
    getFavorites();
  }, []);

  //   console.log(favorites);
  //   console.log("egfehgfe");
  return (
    <div className="favorite-page">
      {favorites ? (
        favorites.products.map((item) => (
          <Link to={`/product/${item.id}`}>
            <Card className="favorite-page_card">
              <Card.Img className="img" variant="top" src={item.image} />

              <Card.Body>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Rating size="small" name="read-only" value={4} readOnly />
                </Card.Title>

                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item.name}</div> <div> {item.price}сом</div>
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default FavoritesPage;

{
  /* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Link to={`/product/${item.id}`}>
                <Button variant="primary">Подробнее...</Button>
              </Link>
            </Card.Body>
          </Card> */
}
