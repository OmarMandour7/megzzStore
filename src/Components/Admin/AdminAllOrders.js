import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'

const AdminAllOrders = () => {
    return (
        <div>
            <div className='admin-content-text mb-3 cor'>All Order Managment</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem />
                 <AdminAllOrdersItem />
                  <AdminAllOrdersItem />
                   <AdminAllOrdersItem />

            </Row>
        </div>
    )
}

export default AdminAllOrders
