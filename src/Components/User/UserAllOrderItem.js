import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = () => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title cor"> Order Number   #234556</div>
            </Row>
            
            <UserAllOrderCard />
             <UserAllOrderCard />
              <UserAllOrderCard />
              
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline order-title cor ">Statue</div>
                        <div className="d-inline mx-2 stat order-title cor ">In Progress</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                         <div className="product-price d-inline  fs-3">1250 LE</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
