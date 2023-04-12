import { TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { admimContext } from "../contexts/AdminContext";
import { useNavigate } from "react-router";

const AddPage = () => {
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
    type: yup
      .string()
      //   .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    typeClothes: yup
      .string()
      //   .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
  });

  const { addProduct } = useContext(admimContext);

  const navigate = useNavigate();

  const handleSubmit = (product) => {
    addProduct(product);
    navigate("/admin");
  };

  return (
    <div className="add-page">
      <h2>Добавить товар</h2>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          image: "",
          description: "",
          price: "",
          brand: "",
          type: "",
          typeClothes: "",
        }}
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
            <TextField
              id="standard-basic"
              label="Тип товара"
              variant="standard"
              placeholder="Введите тип товара"
              name="type"
              value={values.type}
              error={!!errors.type && touched.type}
              helperText={touched.type ? errors.type : ""}
              onChange={handleChange}
            />
            <TextField
              id="standard-basic"
              label="Введите вид clothes"
              variant="standard"
              placeholder="Введите вид clothes"
              name="typeClothes"
              value={values.typeClothes}
              error={!!errors.typeClothes && touched.typeClothes}
              helperText={touched.typeClothes ? errors.typeClothes : ""}
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
    </div>
  );
};

export default AddPage;
