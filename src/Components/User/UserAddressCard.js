import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
const UserAddressCard = () => {
    return (
        <div className="user-address-card my-3 px-2 cor">
            <Row className="d-flex justify-content-between  ">
                <Col xs="1">
                    <div className="p-2 fs-3">Home</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit cor"> Edit</p>
                            </Link>
                        </div>
                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"   
                                width="15px"
                            />
                            <p className="item-delete-edit cor "> Remove</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                          
                            fontSize: "14px",
                        }}>
                        Address Address Address Address Address
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                           
                            fontSize: "16px",
                        }}>
                         Phone Number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                           
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard
