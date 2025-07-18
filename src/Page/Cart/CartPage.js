import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'
import { motion } from "framer-motion";

const CartPage = () => {
    return (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >   <div style={{ minHeight: '670px'}}> 
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4 '>CART</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9" >
                    <CartItem />
                     <CartItem />
                      <CartItem />
                       <CartItem />
                       
                    
                </Col>

                <Col xs="12" md="3">
                    <CartCheckout />
                </Col>
            </Row>
        </Container></div>
        </motion.div>
     
       
    )
}

export default CartPage
