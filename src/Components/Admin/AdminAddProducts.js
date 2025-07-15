import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
const AdminAddProducts = () => {

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "التصنيف الاول", id: 1 },
        { name: "التصنيف الثاني", id: 2 },
    ];

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4 cor"> Add New Product Details</div>
                <Col sm="8">
                     <div className="text-form pb-2 cor"> Product Title</div>

                  <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-1 px-2 cor">
                        <option value="val">Product Title</option>
                        <option value="val2"> Adidas 15</option>
                        <option value="val2">Nike 20</option>
                        <option value="val2">New Balance A90</option>
                    </select>
                      <div className="text-form mt-3 cor">Colors</div>
                      
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3 cor"
                        placeholder="color"
                    />

                    <div className="text-form my-3 cor">Main Image</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <div className="text-form my-3 cor"> Image Galary</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                   
                  
                  
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                 <button className="btn-save d-inline mt-4 cor ">Add Product Details</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProducts
