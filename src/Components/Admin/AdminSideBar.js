import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                  <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         All Products
                    </div>
                </Link>
                 <Link to="/admin/pendingorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text  my-1 border-bottom p-2 mx-auto text-center">
                      Pending Orders
                    </div>
                </Link>
                <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text  my-1 border-bottom p-2 mx-auto text-center">
                      All Orders
                    </div>
                </Link>
              
                <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                       Add Brand
                    </div>
                </Link>

                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Category
                    </div>
                </Link>

                <Link to="/admin/addproducttitle" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Product Title
                    </div>
                </Link>
                  <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Product
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminSideBar
