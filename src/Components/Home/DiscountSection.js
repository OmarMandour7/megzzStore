import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import laptops from '../../images/mmm.png'
import shoes from '../../images/ah.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="4">
                    <div className="discount-title cor">
                        <h2 className="text-white">Discounts</h2>
                        <p className="text-white">Get the best deals on our products</p>
                         
                    </div>
                </Col>
                <Col sm="8" className="d-flex justify-content-center">
                    <img className="dicount-img d-flex" src={laptops} alt="" />
                      <img className="dicount-img d-flex" src={shoes} alt="" />

                    <img className="dicount-img d-flex" src={laptops} alt="" />

                    <img className="dicount-img d-flex" src={shoes} alt="" />

                    
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
