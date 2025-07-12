import React from 'react'
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import DiscountSection from '../../Components/Home/DiscountSection';

const HomePage = () => {
    return (
       

        <div className='' style={{ minHeight: '670px' }}>
            
            <Silder />
            <CardProductsContainer title="Products" btntitle="More" pathText="/products" />
             <DiscountSection />
            <BrandFeatured title="Top Brands" btntitle="More"  />
           

        </div>
    )
}

export default HomePage
