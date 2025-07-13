import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../images/ah.webp";
const CartItem = () => {
  return (
    <Col
      xs="12"
      className="cart-item-body my-5  d-flex flex-column flex-md-row  px-2"
    >
      <img src={mobile} alt="" class="cart-img" />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="cat-text text-black-50 d-inline pt-2">Mirror</div>
            <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <i class="fa-solid fa-trash text-danger p-1"></i>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cart-title">Air Max 270</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text text-black-50 d-inline">Brand :</div>
            <div
              className="barnd-text d-inline mx-1"
              style={{ color: "#bfbfb3" }}
            >
              Adidas{" "}
            </div>
          </Col>
          <Col sm="12" className="mt-1">
            <div className="cat-text text-black-50 d-inline">Color :</div>
            <div
              className="barnd-text d-inline mx-1"
              style={{ color: "#bfbfb3" }}
            >
              White{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className="color ms-2 border px-2 "
              style={{ backgroundColor: "Black", color: "White" }}
            >
              40
            </div>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex"></div>
            <div className="product-price d-inline px-3 py-3 fs-3">1250 LE</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
