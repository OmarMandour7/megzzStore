import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAllOrder from '../../Components/User/UserAllOrder'
import { motion } from 'framer-motion'

const UserAllOrdersPage = () => {
    return (
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        ><Container >
            <Row className='py-3'>
                <Col sm="3" xs="3" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="9" md="10">
                  <UserAllOrder />
                </Col>
            </Row>
        </Container></motion.div>
         

    )
}


export default UserAllOrdersPage
