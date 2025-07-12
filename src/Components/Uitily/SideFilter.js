import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
    return (
        <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="sub-tile cor">Category</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">All</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">Shoes</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">Shoes</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">Shoes</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">Shoes</div>
            </div>
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="sub-tile cor mt-3">Brand</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">All</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">Adidas</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub cor me-2 ">Balenciaga</div>
            </div>
          </div>
  
          <div className="sub-tile cor my-3">Price</div>
          <div className="d-flex">
            <p className="filter-sub cor my-2">From:</p>
            <input
              className=" text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub cor my-2">To:</p>
            <input
              className=" text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideFilter
