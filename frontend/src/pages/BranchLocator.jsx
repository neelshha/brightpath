import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BranchLocator = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-normal items-center w-full min-h-screen p-4 bg-[#E66B2D]">
        <h1 className="text-5xl text-white font-bold mb-20 mt-12">Our Bank's Locations</h1>

        <div className="w-full max-w-5xl h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
              src="https://my.atlist.com/map/14f7294a-b101-4429-a1b9-aea3b9d87123?share=true" 
              allow="geolocation 'self' https://my.atlist.com" 
              className="w-full h-full"
              loading="lazy" 
              frameBorder="0" 
              scrolling="no" 
              allowFullScreen 
              id="atlist-embed">
          </iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BranchLocator;
