import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./styles.css";
import Product from "./Product";
// import Addproduct from './Addproduct';

const Header = ({ ids, setDeleteStatus }) => {
  const navigate = useNavigate();

  const navigateAddProduct = () => {
    // 👇️ navigate to /contacts
    navigate("./Addproduct");
  };

  function handleDelete(ids) {
    if (!ids.length) {
      alert("Select an element to delete");
      return;
    }
    axios
      .delete(`http://localhost/api/?ids=${ids.join()}`)
      .then(function (response) {
        console.log("response of delete operation: ", response);
        if (response.data.status === 0) {
          alert("An error occured while deleting. Try again");
          return;
        }
        setDeleteStatus(true);
      })
      .catch((err) => alert("An error occured while deleting. Try again"));
  }

  return (
    <div>
      <Container className="container">
        <Row id="product">
          <Col>
            <h1>Product</h1>
          </Col>

          <Col className="two">
            <Button
              variant="primary"
              onClick={navigateAddProduct}
              className="twos"
            >
              Add{" "}
            </Button>
            <Button
              variant="secondary"
              className="delete-checkbox"
              id="delete-product-btn"
              onClick={() => handleDelete(ids)}
            >
              MASS DELETE
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Header;
