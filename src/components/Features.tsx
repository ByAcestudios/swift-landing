'use client';

import { FaTruck, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-white relative lg:-mt-60 z-10 rounded-tr-[50px] w-full lg:w-11/12 lg:mr-auto ">
      {/* Curved shape background at the top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-white rounded-tl-[50px] rounded-tr-[50px] -z-10"></div>
      
      <div className="container mr-auto px-4 pt-40 pb-16 text-left mx-auto px-4 md:px-12">
        {/* <div className="text-left mb-16">
          <h2 className="text-gray-500 uppercase font-medium tracking-wider">FEATURES</h2>
          <div className="w-16 h-1 bg-swift-green mr-auto mt-2"></div>
        </div> */}
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-20">
          The best delivery service in<br /> your hands
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mr-auto">
          {/* Verified Riders */}
          <div className="text-left">
            <div className="w-16 h-16">
              <FaTruck className="w-7 h-7 text-swift-purple" />
            </div>
           
            <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Riders</h3>
            <p className="text-gray-600">
              All Riders have been verified for the safety of your packages
            </p>
          </div>
          
          {/* Track Orders */}
          <div className="text-left">
            <div className="w-16 h-16">
              <FaMapMarkerAlt className="w-7 h-7 text-swift-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Track Orders</h3>
            <p className="text-gray-600">
              Track your orders using the mobile application
            </p>
          </div>
          
          {/* Payment */}
          <div className="text-left">
            

            <div className="w-16 h-16">
              <FaCreditCard className="w-7 h-7 text-swift-purple" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">Payment</h3>
            <p className="text-gray-600">
              Payments have been made easy for the users
            </p>
          </div>
        </div>
        
        {/* Additional service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mr-auto mt-12">
          {/* Verified Riders (duplicate) */}
          <div className="text-left">
          <div className="w-16 h-16">
              <FaTruck className="w-7 h-7 text-swift-purple" />
            </div>


            <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Riders</h3>
            <p className="text-gray-600">
              All Riders have been verified for the safety of your packages
            </p>
          </div>
          
          {/* Verified Riders (duplicate) */}
          <div className="text-left">
          <div className="w-16 h-16">
              <FaTruck className="w-7 h-7 text-swift-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Riders</h3>
            <p className="text-gray-600">
              All Riders have been verified for the safety of your packages
            </p>
          </div>
          
          {/* Verified Riders (duplicate) */}
          <div className="text-left">
          <div className="w-16 h-16">
              <FaTruck className="w-7 h-7 text-swift-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Riders</h3>
            <p className="text-gray-600">
              All Riders have been verified for the safety of your packages
            </p>
          </div>
        </div>
      </div>
      
      {/* Light gray background for footer transition */}
      <div className="bg-gray-50 h-24 w-full"></div>
    </section>
  );
};

export default Features; 