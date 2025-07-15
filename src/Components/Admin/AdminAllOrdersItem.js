import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mobile from '../../images/mobile.png'
import CartItem from '../Cart/CartItem'
const AdminAllOrdersItem = () => {
    return (
        <Col sm="12" className='my-2'>
            <Link
                to="/admin/orders/23"
                className="user-order my-2 px-1 d-flex"
                style={{ textDecoration: "none" }}>
              
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                             <div className="py-2 order-title cor"> Order Number   #234556</div>
                            <div className="d-inline pt-2 cat-text" style={{color : "black"}}>Delete</div>
                        </Col>
                    </Row>
        
                   <CartItem />
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem
