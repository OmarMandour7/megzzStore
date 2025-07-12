import React from "react";
import { Row, Col } from "react-bootstrap";

const ChoosePayMethoud = () => {
  return (
    <div >
      <div className="admin-content-text pt-3 cor">Order Details</div>
      <div style={{filter: "drop-shadow(0 0 45px var(--shoes-shadow))"}} className="user-address-card my-3 px-3">
         <Row className="justify-content-start ">
                 <div style={{color : "rgba(0, 0, 0, 0.91)"}} className="admin-content-text py-3 cor">Order Address</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="cor input-form d-block mt-3 px-3"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        className="cor input-form d-block mt-3 px-3"
                        placeholder="Governrate"
                    />
                     <input
                        type="text"
                        className="cor input-form d-block mt-3 px-3"
                        placeholder="City "
                    />
                     <input
                        type="number"
                        className="cor input-form d-block mt-3 px-3"
                        placeholder="Phone Number"
                    />
                     <textarea
                        className="cor input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Order Details"
                    />
                </Col>
            </Row>
           
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input
              name="group"
              id="group1"
              type="radio"
              value="visa"
              className="mt-2 "
            />
            <label className="mx-2 cor fs-3" for="group1">
              Visa
            </label>
          </Col>
        </Row>

        <Row className="mt-1">
           <Col xs="12" className="my-2">
            <input
              name="group"
              id="group1"
              type="radio"
              value="visa"
              className="mt-2 "
            />
            <label className="mx-2 cor fs-3" for="group1">
              Cash On Delivery
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline mx-2 cor border">34000 LE </div>
          <div className="product-cart-add p-2 d-inline me-2">
           Order Now
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud;
