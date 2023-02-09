import React from 'react';

// import data
import { footer } from '../data';

// import logo
// import Logo from '../assets/img/logo.svg'

const Footer = () => {
  
  return (
    <footer className='section bg-primary text-white' id='footer'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0 text-4xl font-semibold' href="#h">
            {footer.logo.logo}
          </a>
          {/* social */}
          <div className='flex gap-x-4'>
            {footer.social.map((item, index)=>{
              return(
                <div key={index} className="w-12 h-12 text-2xl bg-gray-700 hover:bg:accent rounded-full flex justify-center items-center transaition" >
                  <a href="#d">{item.icon}</a>
                </div>
              )
            })}
          </div>
        </div>
        {/* copyright text */}
        <p className='text-center'>
          &copy; MadinaPowerTech. 2023 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
