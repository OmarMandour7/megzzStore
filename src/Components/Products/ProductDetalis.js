import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalis = () => {
    return (
        <div>
            <Row className='py-3 justify-content-center'>
                <Col lg="4" md="8">
                    <ProductGallery />
                </Col>

                <Col lg="8" md="12">
                       <ProductText />
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetalis
