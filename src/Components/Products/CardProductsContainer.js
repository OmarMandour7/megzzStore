import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({title ,btntitle,pathText ,sectitle}) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText} sectitle={sectitle}/>
            <Row className='my-2 d-flex justify-content-between '>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </Container>
    )
}

export default CardProductsContainer
