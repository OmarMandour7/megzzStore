import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'

const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px', backgroundColor:"var(--bg-color)" }}>
         
            <Container >
                <ProductDetalis />
              
                <CardProductsContainer title="Products" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
