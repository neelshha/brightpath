import React from 'react';
import Footer from "../components/Footer";
import ClientCarousel from '../components/ClientCarousel';
import CNavbar from '../components/Navbar';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (

      <div className='min-w-screen flex flex-col min-h-screen'>
        
        <CNavbar />
        
        <main className="flex-grow">
        <section className="bg-logo-orange text-logo-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Welcome to BrightPath Banking</h1>
          <p className="text-lg text-white mb-8">
            Empowering you to manage your finances with confidence. Explore personalized financial solutions designed to meet your unique needs, from everyday banking to long-term investments.
          </p>
          <Link to="#services" className="bg-white text-logo-orange px-6 py-3 rounded-full font-semibold">
            Explore Services
          </Link>
        </div>
      </section>
        </main>

        <div className="bg-orange-100">
        <header className="py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-shrink-0">
                <Link
                  to="/landing"
                  title="Bright Path"
                  className="flex items-center bg-[#e66b2d] text-white px-5 py-2 rounded-full shadow-lg outline-none focus:ring-1 focus:ring-gray-100 focus:ring-offset-2"
                >
                  <img
                    className="w-auto h-8"
                    src="./src/pages/white_favicon.svg"
                    alt="Logo"
                  />
                  <div className="ml-3 text-3xl font-semibold">Bright Path</div>
                </Link>
              </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-900">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                    <a href="#" title="" className="text-base font-medium text-[#e66b2d] transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Solutions </a>

                    <a href="#" title="" className="text-base font-medium text-[#e66b2d] transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Industries </a>

                    <a href="#" title="" className="text-base font-medium text-[#e66b2d] transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Fees </a>

                    <a href="#" title="" className="text-base font-medium text-[#e66b2d] transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About Rareblocks </a>
                </div>

                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                    <a href="#" title="" className="text-base font-medium text-[#e66b2d] transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> ______ </a>

                    <a href="#" title="" className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#e66b2d] border border-transparent rounded-xl hover:bg-orange-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Login 
                    </a>
                </div>
            </div>
        </div>
    </header>

    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Welcome to BrightPath Banking</h1>
                        <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Empowering you to manage your finances with confidence. Explore personalized financial solutions designed to meet your unique needs, from everyday banking to long-term investments.</p>

                        <form action="#" method="POST" className="mt-8 sm:mt-10">
                            <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email address"
                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                    required=""
                                />
                                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                    <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Get Free Card</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                        <div className="flex items-center">
                            <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">2943</p>
                            <p className="ml-3 text-sm text-gray-900 font-pj">Cards<br />Delivered</p>
                        </div>

                        <div className="hidden sm:block">
                            <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                            </svg>
                        </div>

                        <div className="flex items-center">
                            <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$1M+</p>
                            <p className="ml-3 text-sm text-gray-900 font-pj">Transaction<br />Completed</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img className="w-full" src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

        <ClientCarousel />
        
        <Footer />
        
      </div>
  );
};

export default LandingPage;