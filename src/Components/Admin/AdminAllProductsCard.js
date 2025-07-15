import React, { useState } from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from "../../images/mmm.webp";
import favoff from "../../images/ah.webp";
import rate from "../../images/rate.png";
const AdminAllProductsCard = () => {
     const [hovered, setHovered] = useState(false);
  const sizes = [40, 41, 42, 43]; // available sizes
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex mt-1">
            <Card
             onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "var(--bg--color)",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline cor  " style={{ color : "var(--text-color)"}}>Delete</div>
                        <div className="d-inline cor  " style={{ color : "var(--text-color)"}}>Edit</div>
                    </Col>
                </Row>
               
                   <Link to="/products/:id" style={{ textDecoration: "none" }}>
          {hovered ? <Card.Img src={favoff} /> : <Card.Img src={prod1} />}
    

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
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
