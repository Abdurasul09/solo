import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { admimContext } from "../contexts/AdminContext";
import { useNavigate, useParams } from "react-router";
import { TextField, Button } from "@mui/material";

const EditPage = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(3, "Минимальное количество символов 3")
      .max(30, "Максимальное количесиво символов 30")
      .required("Поле обязательна для заполнение"),
    image: yup
      .string()
      //   .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    description: yup
      .string()
      .min(10, "Минимальное количество символов 10")
      .max(255, "Максимальное количество символов 255")
      .required("Поле обязательно для заполнения"),
    price: yup
      .number()
      .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    brand: yup
      .string()
      //   .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
  });

  const { getProductToEdit, productToEdit, saveEditedProduct } =
    useContext(admimContext);

  const params = useParams();

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="add-page">
      <h2>Редактировать товар</h2>

      {productToEdit ? (
        <Formik
          validationSchema={schema}
          onSubmit={(editedProduct) => {
            saveEditedProduct(editedProduct);
            navigate("/admin");
          }}
          initialValues={productToEdit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                label="Название товара"
                variant="standard"
                placeholder="enter image"
                name="name"
                value={values.name}
                error={!!errors.name && touched.name}
                helperText={touched.name ? errors.name : ""}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Картинка товара"
                variant="standard"
                placeholder="enter pprice"
                name="image"
                value={values.image}
                error={!!errors.image && touched.image}
                helperText={touched.image ? errors.image : ""}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Описание товара"
                variant="standard"
                placeholder="enter description"
                name="description"
                value={values.description}
                error={!!errors.description && touched.description}
                helperText={touched.description ? errors.description : ""}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="цена товара"
                variant="standard"
                placeholder="enter phone number"
                name="price"
                value={values.price}
                error={!!errors.price && touched.price}
                helperText={touched.price ? errors.price : ""}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Бренд товара"
                variant="standard"
                placeholder="enter phone number"
                name="brand"
                value={values.brand}
                error={!!errors.brand && touched.brand}
                helperText={touched.brand ? errors.brand : ""}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "10px", backgroundColor: "darkblue" }}
              >
                Добавить товар
              </Button>
            </form>
          )}
        </Formik>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default EditPage;
