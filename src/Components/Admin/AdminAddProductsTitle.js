import React from 'react'
import { Row, Col } from 'react-bootstrap'
import add from '../../images/add.png'
const AdminAddProductsTitle = () => {
 
    const onSelect = () => {

    }
    const onRemove = () => {

    }

    return (
        <div>
            <Row className="justify-content-start ">
               <div className="admin-content-text pb-4 cor"> Add New Product Title </div>
                <Col sm="8">
                                   <div className="text-form pb-2 cor"> Brand Name</div>

                  <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-1 px-2 cor">
                        <option value="val">Brand</option>
                        <option value="val2"> Adidas</option>
                        <option value="val2">Nike</option>
                        <option value="val2">New Balance</option>
                    </select>
                    
                   <div className="text-form pb-2 cor mt-3">Product Title</div>
                   
                    <input
                        type="text"
                        className="input-form d-block mt-1 px-3 cor"
                        placeholder="Product Title"
                    />
                  
                  
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-4 cor ">Add Product</button>
                </Col>
            </Row>
        </div>
    )
}


export default AdminAddProductsTitle