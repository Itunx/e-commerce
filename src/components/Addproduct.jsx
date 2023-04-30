import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Forms from "./Forms";
import axios from "axios";
import Furniture from "./furniture";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  const [dvd, setDvd] = useState("");
  const [dimension, setDimension] = useState({
    height: "",
    length: "",
  });
  const navigate = useNavigate();
   const BASE_URL = 'http://localhost/api/';  

  const handleSubmit = () => {
    // e.prevent.default();
    if (sku === "" || name === "" || price === "") {
      alert("please input all fields");
      return;
    }
    const inputs = {
      sku,
      name,
      price,
      product,
    };
    inputs["product_specific"] = dvd;
    if (product == "Furniture") {
      inputs["product_specific"] = [dvd, dimension.height, dimension.length];
    }
    axios.post("https://itunx.000webhostapp.com/", inputs).then(function (response) {
      console.log(response.data);
      navigate("/");
    });

    console.log(inputs);
  };
  function handleCancel() {
    setSku("");
    setName("");
    setPrice("");
    setProduct("");
    setDvd("");
  }

  return (
    <div>
      <Container className="container">
        <Row id="product">
          <Col>
            <h1>Product Add</h1>
          </Col>
          <Col className="two">
            <Button variant="primary" onClick={handleSubmit} className="twos">
              Save{" "}
            </Button>
            <Button
              variant="secondary"
              className="twos"
              id="delete-product-btn"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
      <br />
      <form id="product_form">
        <div>
          <label>
            <p className="sku">SKU</p>
          </label>

          <input
            type="text"
            style={{ width: "400px" }}
            name="sku"
            id="sku"
            onChange={(e) => setSku(e.target.value)}
            value={sku}
            required
          />
        </div>
        <div>
          <label>
            <p className="name">NAME</p>
          </label>

          <input
            type="text"
            style={{ width: "400px" }}
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div>
          <label>
            <p className="price">PRICE</p>
          </label>

          <input
            type="text"
            style={{ width: "400px" }}
            name="price"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </div>
        <br />
        <div className="parent">
          <div>
            <label>
              <p className="type-switcher" id="productType">
                Type Switcher
              </p>
            </label>

            <select
              id="colours"
              onChange={(e) => setProduct(e.target.value)}
              value={product}
            >
              <option value="#" key={1}>
                Type-switcher
              </option>
              <option value="DVD" id="DVD" key={2}>
                DVD
              </option>
              <option value="Furniture" id="Furniture" key={3}>
                Furniture
              </option>
              <option value="Book" id="Book" key={4}>
                Book
              </option>
            </select>
          </div>

          <Forms
            product={product}
            {...{ ...dimension, setDimension }}
            current={dvd}
            update={setDvd}
          />
        </div>
      </form>
    </div>
  );
}
export default Addproduct;
