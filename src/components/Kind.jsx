import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { clientContext } from "../contexts/ClientContext";

const Kind = () => {
  const { getProducts, products, currentPosts } = useContext(clientContext);

  const navigate = useNavigate();

  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);

  function filterProducts(key, value) {
    object.set(key, value);
    let newURL = `${window.location.pathname}?${object.toString()}`;
    navigate(newURL);
    getProducts();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("type"));
  }, [object]);

  return (
    <Form.Group
      className="mb-3 kind-page"
      controlId="formBasicCheckbox"
      value={brandValue}
      onChange={(e) => {
        filterProducts("type", e.target.value);
      }}
    >
      <Form.Check
        style={{ fontFamily: "Roboto Slab", fontSize: "20px" }}
        value="Мужская"
        name="group1"
        type="radio"
        label="МУЖЧИНАМ"
      />

      <Form.Check
        style={{ fontFamily: "Roboto Slab", fontSize: "20px" }}
        value="Женская"
        name="group1"
        type="radio"
        label="ЖЕНЩИНАМ"
      />

      <Form.Check
        style={{ fontFamily: "Roboto Slab", fontSize: "20px" }}
        value="Детская"
        name="group1"
        type="radio"
        label="ДЕТЯМ"
      />
    </Form.Group>
  );
};

export default Kind;
