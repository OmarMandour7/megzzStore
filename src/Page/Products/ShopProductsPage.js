import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import { motion } from 'framer-motion'

const ShopProductsPage = () => {
    return (
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
> 
        <div style={{ minHeight: '670px'}}>
            
            <Container>
                <SearchCountResult title="400 Item " />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="2" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="10">
                         <CardProductsContainer title="" btntitle=""/>
                    </Col>
                </Row>
                    <Pagination />
            </Container>
        </div>
        </motion.div>
    )
}

export default ShopProductsPage
