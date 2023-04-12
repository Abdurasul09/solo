import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { API } from "../helpers/const";

export const clientContext = React.createContext();

const INIT_STATE = {
  products: null,
  productDetails: null,
  productsCountIncart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  cart: null,
  productsCountInFavorites: JSON.parse(localStorage.getItem("fv"))
    ? JSON.parse(localStorage.getItem("fv")).products.length
    : 0,
  favorites: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET-PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_DETAILS":
      return { ...state, productDetails: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCountIncart: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_FAVORITES":
      return { ...state, productsCountInFavorites: action.payload };
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const ClientContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      let filter = window.location.search;

      let response = await axios(`${API}/${filter}`);
      let action = {
        type: "GET-PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
      resetCurrentPage();
    } catch (e) {
      console.log(e);
    }
  };

  // !детали

  const getDetails = async (id) => {
    try {
      let response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_DETAILS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  // ! пагинация

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    if (state.products) {
      const data = state.products;
      setPosts(state.products);
    }
  }, [state.products]);

  const numberOfLastPost = currentPage * postPerPage;
  const numberOfFirstPost = numberOfLastPost - postPerPage;
  const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost);
  const totalPosts = posts.length;

  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  // ! корзина

  const addAndDeleteProductInCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let clothes = {
      product: product,
      count: 1,
      subPrice: 0,
    };

    clothes.subPrice = calcSubPrice(clothes);
    let checkArr = cart.products.filter((item) => {
      return item.id === product.id;
    });
    if (checkArr.length === 0) {
      cart.products.push(product);
    } else {
      cart.products = cart.products.filter((item) => {
        return item.id !== product.id;
      });
    }
    console.log("chekArr", checkArr);
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let checkArr = cart.products.filter((item) => {
      return item.id === id;
    });
    if (checkArr.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountProductIncart = (count, id) => {
    if (count < 1) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.map((item) => {
      if (item.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // ! избранные
  const addAndDeleteProductInFavorites = (product) => {
    let cart = JSON.parse(localStorage.getItem("fv"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let clothes = {
      product: product,
      count: 1,
      subPrice: 0,
    };

    clothes.subPrice = calcSubPrice(clothes);
    let checkArr = cart.products.filter((item) => {
      return item.id === product.id;
    });
    if (checkArr.length === 0) {
      cart.products.push(product);
    } else {
      cart.products = cart.products.filter((item) => {
        return item.id !== product.id;
      });
    }
    console.log("chekArr", checkArr);
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem("fv", JSON.stringify(cart));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_FAVORITES",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInfavorites = (id) => {
    let cart = JSON.parse(localStorage.getItem("fv"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let checkArr = cart.products.filter((item) => {
      return item.id === id;
    });
    if (checkArr.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const getFavorites = () => {
    let cart = JSON.parse(localStorage.getItem("fv"));
    let action = {
      type: "GET_FAVORITES",
      payload: cart,
    };
    dispatch(action);
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        getDetails: getDetails,
        handlePage: handlePage,
        addAndDeleteProductInCart: addAndDeleteProductInCart,
        checkProductInCart: checkProductInCart,
        getCart: getCart,
        changeCountProductIncart: changeCountProductIncart,
        addAndDeleteProductInFavorites: addAndDeleteProductInFavorites,
        checkProductInfavorites: checkProductInfavorites,
        getFavorites: getFavorites,
        favorites: state.favorites,
        productsCountInFavorites: state.productsCountInFavorites,
        cart: state.cart,
        products: state.products,
        productDetails: state.productDetails,
        productsCountIncart: state.productsCountIncart,
        currentPosts: currentPosts,
        totalPosts: totalPosts,
        postPerPage: postPerPage,
        currentPage: currentPage,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContextProvider;
