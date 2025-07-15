import React from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
const AdminAddBrand = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4 cor"> Add New Brand</div>
                <Col sm="8">
                    <div className="text-form pb-2 cor"> Brand Photo</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3 cor"
                        placeholder="Brand Name"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 cor ">Add New Brand</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand
