import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF, faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import HeadsetImage from '../../assets/images/headset.png'
import Hero from './Hero';

const ProductHero = () => {
  return (
    <div className="min-h-screen font-sans overflow-hidden p-4 flex flex-col items-center">
      < div className="my-8">
        <Hero />
      </div>
      <div className="min-h-[70vh] w-full z-10 flex flex-col md:flex-row items-center md:items-start md:justify-between justify-evenly gap-4">
        
        {/* Left Side: Secondary Image Card */}
        <div className="order-2 md:order-1 flex flex-col justify-center ">
          <div className="relative w-48 h-48 bg-[#d6eaf8] rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
            <img 
              src={HeadsetImage} 
              alt="Detail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
              </div>
            </div>
          </div>
        </div>

         {/*Center: Floating Shop Button */}
        <div className="order-1 md:order-2 flex flex-col items-center justify-center mt-4">
          <div className=" flex items-center bg-white/90 backdrop-blur-sm rounded-full pl-6 pr-2 py-2 shadow-xl border border-white/50 cursor-pointer hover:bg-white transition-all">
            <span className="text-sm font-semibold mr-4 text-gray-800">Shop Now</span>
            <div className="bg-[#d9ff66] rounded-full w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs transform rotate-45" />
            </div>
          </div>
         
        </div>

        {/* Right Side: Socials and Quote */}
        <div className="order-3 flex flex-col items-end justify-center text-right space-y-12 mt-4">
          {/* Social Icons */}
          <div className="flex space-x-3">
            {[faWhatsapp, faFacebookF, faXTwitter, faInstagram].map((icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border bg-white border-gray-400 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-colors">
                <FontAwesomeIcon icon={icon} size="xs" />
              </a>
            ))}
          </div>

           {/* Headset Image */}
          {/* <div className='w-max flex absolute top-1/2 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
             <img 
            src={HeadsetImage}
            alt="Premium Headphones" 
            className="w-[400px]"
          />
          </div> */}

          {/* Testimonial
          <div className="max-w-[200px]">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-300 text-2xl mb-2 block ml-auto" />
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "Perfect blend of cutting-edge technology and craftsmanship."
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;