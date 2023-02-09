import React from 'react';

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

//  import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import {Navigation, Pagination,} from 'swiper';

// import data 
import { products } from '../data';

// import icon
// import {Hiplus} from 'react-icons/hi';

const ProductSlider = () => {
  // destructure products
  const {pages}= products;
  
  return (
    <Swiper modules={[Pagination, Navigation]} pagination={{clickable: true}} navigation={true} className='productSlider min-h-[1300px]'>
        {pages.map((page, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
                  {page.productList.map((product, index)=>{
                    // destructure product
                    const {image,name} = product;
                    return (
                      <div className='w-full max-w-[290px] h-[380px]text-left' key={index}>
                        <div className='border hover:border-accent rounded-[18px] w-full max-w-[165px] h-full max-h-[162px] flex items-center justify-center mb-[15px] relative transition'>
                          <img src={image.type} alt="" className='h-40 w-40 rounded-[18px]'/>
                        </div>
                        <div className=' text-start text-slate-700 font-medium lg:text-xl'>{name}</div>
                        <div className='flex items-start justify-start gap-x-3'>
                          {/* <div>{price}</div> */}
                          {/* <div>{oldPrice}</div> */}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </SwiperSlide>
            )
        })}
    </Swiper>
  );
};

export default ProductSlider;
