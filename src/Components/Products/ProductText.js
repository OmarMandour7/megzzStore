import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">Mirror</div>
      </Row>
      <Row>
        <Col md="9">
          <div className="cat-title d-inline ">Air Max 270
           <div className="cat-rate d-inline mx-5" >4.9 <i class="fa-solid fa-star"></i></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1" style={{color : "#bfbfb3"}}>Adidas </div>
        </Col>
         <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Color :</div>
          <div className="barnd-text d-inline mx-1" style={{color : "#bfbfb3"}}>White </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-3 d-flex">
         
          <div
            className="color ms-2 border px-2 "
            style={{ backgroundColor: "white" }}>40</div>
             <div
            className="color ms-2 border px-2 "
            style={{ backgroundColor: "white" }}>41</div>
             <div
            className="color ms-2 border px-2 "
            style={{ backgroundColor: "white" }}>42</div>
             <div
            className="color ms-2 border px-2 "
            style={{ backgroundColor: "white" }}>43</div>
         
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            Crafted with a lightweight mesh upper for breathability and a snug fit, the Air Max 270 is made for those who move fast and live loud. Whether you're walking the city streets or kicking back on the weekend, this shoe brings the perfect mix of comfort, durability, and iconic Nike style.


          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">1250 LE</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">Add To Cart</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
