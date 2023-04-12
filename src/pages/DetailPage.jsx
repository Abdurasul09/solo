import { Rating, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Comments from "../components/Comments";
import { clientContext } from "../contexts/ClientContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const {
    getDetails,
    productDetails,
    addAndDeleteProductInCart,
    checkProductInCart,
    addAndDeleteProductInFavorites,
    checkProductInfavorites,
  } = useContext(clientContext);

  const params = useParams();

  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <div className="detailFirst">
      {productDetails ? (
        <>
          <div className="detail-page">
            <div className="product-img">
              <img
                style={{ maxWidth: "300px", objectFit: "contain" }}
                src={productDetails.image}
                alt=""
              />
            </div>
            <div className="product-details">
              <h2>{productDetails.name}</h2>
              <Rating
                name="simple-controlled"
                // value={value}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
              <h4>{productDetails.price}</h4>
              <h6>Бренд: {productDetails.brand}</h6>
              <h6>Тип: {productDetails.name}</h6>
              <h6>Описание: </h6>
              <p>{productDetails.description}</p>
              <Button onClick={() => addAndDeleteProductInCart(productDetails)}>
                <ShoppingCartIcon
                  color={
                    checkProductInCart(productDetails.id) ? "error" : "#212121"
                  }
                />
              </Button>
              <Button
                onClick={() => addAndDeleteProductInFavorites(productDetails)}
              >
                <FavoriteIcon
                  color={
                    checkProductInfavorites(productDetails.id)
                      ? "error"
                      : "primary"
                  }
                />
              </Button>
              <Link to="/credit/card">
                <Button variant="contained" color="secondary">
                  Купить
                </Button>
              </Link>
            </div>
          </div>
          <Comments productId={productDetails.id} className="erlan" />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailPage;
