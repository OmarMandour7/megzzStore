import React from 'react'
import { Container } from 'react-bootstrap'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import { motion } from 'framer-motion'
const ProductDetalisPage = () => {
    return (

         <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
> 
 <div style={{ minHeight: '670px', backgroundColor:"var(--bg-color)" }}>
         
            <Container >
                <ProductDetalis />
              
                <CardProductsContainer title="Products" />
            </Container>
        </div>
        </motion.div>
       
    )
}

export default ProductDetalisPage
