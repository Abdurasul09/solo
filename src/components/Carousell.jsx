import React from "react";
import { Carousel } from "react-bootstrap";

const Carousell = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Clover</h2>
          <p>Одежда для всей семьи</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4880395/pexels-photo-4880395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Clover</h3>
          <p>Одежда для всей семьи</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8945237/pexels-photo-8945237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Clover</h3>
          <p>Одежда для всей семьи</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousell;
