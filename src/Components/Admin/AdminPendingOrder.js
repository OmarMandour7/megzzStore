import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
const AdminPendingOrder = () => {
  return (
     <div>
            <div className='admin-content-text mb-3 cor'>Pending Order Managment ⏳</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem />
            </Row>
        </div>
  )
}

export default AdminPendingOrder