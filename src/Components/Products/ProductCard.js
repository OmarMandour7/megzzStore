import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import prod1 from "../../images/mmm.webp";
import favoff from "../../images/ah.webp";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const [hovered, setHovered] = useState(false);
  const sizes = [40, 41, 42, 43]; // available sizes
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2 position-relative product-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "var(--bg--color)",
         
        }}
      >
        <Link to="/products/:id" style={{ textDecoration: "none" }}>
          {hovered ? <Card.Img src={favoff} /> : <Card.Img src={prod1} />}
        </Link>

        <Card.Body>
          <Card.Title>
            <div className="card-title">
              <Link
                to="/products/:id"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <div className="card-title">Nike Air Max 270</div>
              </Link>
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img src={rate} alt="" height="16px" width="16px" />
                <div className="card-rate mx-2">4.9</div>
              </div>
              <div
                className="d-flex"
                style={{ textDecoration: "none", color: "#ffffff" }}
              ></div>
            </div>
            <div className="d-flex justify-content-between ">
              <div className="d-flex"></div>
              <div
                className="d-flex"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <div className="card-price">1250 </div>
                <div className="card-currency mx-1">EG</div>
              </div>
            </div>
          </Card.Text>
          {/* Sizes on hover */}
          {hovered && (
            <div
              className="position-absolute"
              style={{
                top: "90%",
                left: "1%",
                backgroundColor: "#fff",
                color: "#000",
                padding: "5px 10px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                zIndex: 10,
                marginBottom: "10px",
              }}
            >
              Sizes:{" "}
              {sizes.map((size) => (
                <span key={size} style={{ marginLeft: "6px" }}>
                  {size}
                </span>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
