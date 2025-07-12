import React from 'react'
import { Row, Col } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
const UserProfile = () => {
    return (
        <div>
            <div className="admin-content-text cor">User Profile</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2 cor">Name:</div>
                        <div className="p-1 item-delete-edit cor">Omar Mandour </div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit cor mx-1">Edit</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2 cor">Phone Number:</div>
                        <div className="p-1 item-delete-edit cor">0122314324</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2 cor">Email:</div>
                        <div className="p-1 item-delete-edit cor ">Mans@gmail.com</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div style={{color : "black"}} className="admin-content-text cor mb-4 ">Change Password  </div>
                        <input
                            type="password"
                            className="input-form cor  d-block mt-1 px-3"
                            placeholder="Enter Old Password"
                        />
                        <input
                            type="password"
                            className="input-form cor  d-block mt-3 px-3"
                            placeholder="Enter New Password"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button className="btn-save d-inline mt-2 cor ">Save Password</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UserProfile
