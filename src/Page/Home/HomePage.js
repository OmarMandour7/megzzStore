import React from 'react'
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import DiscountSection from '../../Components/Home/DiscountSection';
import { motion } from "framer-motion";

const HomePage = () => {
    return (
 <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
         <div className=''style={{ minHeight: '670px' }}>
            
            <Silder />
            <CardProductsContainer title="Products" btntitle="More" pathText="/products" />
             <DiscountSection />
            <BrandFeatured title="Top Brands" btntitle="More"  />
           

        </div>
    </motion.div>
       
    )
}

export default HomePage
