import React from 'react'
import { Row,Col } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'

const AdminOrderDetalis = () => {
    return (
        <div className=''>
            <div className='admin-content-text cor'>Order Number   #234556</div>
            <CartItem />
               <CartItem />
   <CartItem /> 
            <Row className="justify-content-center mt-4 pb-2 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text cor py-2" style={{color:'black'}}>Order Details</div>
                </Col>
                 <Row className="d-flex justify-content-between pt-2">
                                    <Col xs="6" className="d-flex">
                                        <div className="p-2 cor">Name:</div>
                                        <div className="p-1 item-delete-edit cor">Omar Mandour </div>
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
                 <div className="product-price d-inline text-end fs-3">1250 LE</div>
                <div className="d-flex p-2 justify-content-end">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1 cor  text-center px-2 w-50">
                        <option  value="val">Order Progress </option>
                        <option  value="val2">In Progress</option>
                        <option  value="val2">Ordered</option>
                        <option  value="val2">Cancel</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">Save </button>
                </div>
            </Row>
        </div>
    )
}

export default AdminOrderDetalis
