import React from 'react';


// import data
import { products } from '../data';

// import slider component
import ProductSlider from '../components/ProductSlider';

const Products = () => {
  // destructure products
  const {title, subtitle} = products;
  return (
    <section className='section text-center' id='product'>
        <div className='container max-auto'>
          <div>
            <h2 className='title'>{title}</h2>
            <p className='max-w-[639] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
          </div>
          {/* slider */}
          <ProductSlider></ProductSlider>
        </div>
    </section>
  );
};

export default Products;
