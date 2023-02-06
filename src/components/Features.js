import React from 'react';
// import data 
import { features } from '../data';
// import { features2 } from '../data';
// import { features3 } from '../data';
// import { features4 } from '../data';
const Features = () => {
  // distacur
  const {title, subtitle, image, buttonText,items} = features
  // const {title, subtitle, image, buttonText} = features2
  // const {title, subtitle, image, buttonText} = features3
  // const {title, subtitle, image, buttonText} = features4

  return (
    <section className='section'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
            {/* image  */}
            <div className='flex-1 order-1 lg:-order-1 '>
              <img src={image.type} alt="m1" className='rounded h-[32rem] w-96' />
            </div>
            {/* text  */}
            <div className='flex-1 flex flex-col justify-end bg-feature2'>
              <h2 className='title'>{title}</h2>
              <p className='subtitle'>{subtitle}</p>
              {/* item  */}
              <div>
                {items.map((item, index) => {
                  // destructure item 
                  const {title, subtitle, icon}=item;
                  return(
                    <div className='flex mb-6 lg:last:mb-0'>
                      <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                      <div>
                      <h4 className='text-base lg:text-xl font-semibold mb-3'>{title}</h4>
                      <p>{subtitle}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
};

export default Features;
