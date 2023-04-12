import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/const";

export const admimContext = createContext();

const INIT_STATE = {
  products: null,
  productToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    case "CLEAR_STATE":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const AdminContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //   ! create
  const addProduct = async (product) => {
    try {
      let response = await axios.post(API, product);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  //   !read
  const getProducts = async () => {
    try {
      let response = await axios(API);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  //   ! delete

  const deleteProduct = async (id) => {
    try {
      let response = await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  // ! update

  const getProductToEdit = async (id) => {
    try {
      let response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedProduct = async (editedProduct) => {
    try {
      let response = await axios.patch(
        `${API}/${editedProduct.id}`,
        editedProduct
      );
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  const clearState = () => {
    let action = {
      type: "CLEAR_STATE",
      payload: null,
    };
    dispatch(action);
  };

  return (
    <admimContext.Provider
      value={{
        addProduct: addProduct,
        getProducts: getProducts,
        deleteProduct: deleteProduct,
        getProductToEdit: getProductToEdit,
        saveEditedProduct: saveEditedProduct,
        clearState: clearState,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </admimContext.Provider>
  );
};

export default AdminContextProvider;
