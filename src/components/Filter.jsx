import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { clientContext } from "../contexts/ClientContext";

const Filter = () => {
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
    setBrandValue(object.get("typeClothes"));
  }, [object]);

  return (
    <div>
      <Form.Group
        className="mb-3 kind filter"
        controlId="formBasicCheckbox"
        value={brandValue}
        onChange={(e) => {
          filterProducts("typeClothes", e.target.value);
        }}
      >
        <Form.Check
          className="inp"
          value="Брюки"
          name="group1"
          type="radio"
          label="Брюки"
        />

        <Form.Check
          className="inp"
          value="Верхняя одежда"
          name="group1"
          type="radio"
          label="Верхняя одежда"
        />
        <Form.Check
          className="inp"
          value="Домашняя одежда"
          name="group1"
          type="radio"
          label="Домашняя одежда"
        />
        <Form.Check
          className="inp"
          value="Майки"
          name="group1"
          type="radio"
          label="Майки"
        />
        <Form.Check
          className="inp"
          value="Нижнее белье"
          name="group1"
          type="radio"
          label="Нижнее белье"
        />
        <Form.Check
          className="inp"
          value="Носки"
          name="group1"
          type="radio"
          label="Носки"
        />
        <Form.Check
          className="inp"
          value="Пиджаки"
          name="group1"
          type="radio"
          label="Пиджаки"
        />
        <Form.Check
          className="inp"
          value="Плавки"
          name="group1"
          type="radio"
          label="Плавки"
        />
      </Form.Group>
    </div>
  );
};

export default Filter;
