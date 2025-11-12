import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaTruck, FaAward, FaShieldAlt, FaCheckCircle, FaCertificate } from 'react-icons/fa';
import { GiCakeSlice, GiChefToque, GiPartyFlags } from 'react-icons/gi';
import { IoSparkles, IoGlobe } from 'react-icons/io5';
import { MdVerified, MdDinnerDining, MdLocalShipping } from 'react-icons/md';
import heroImg from '../assets/images/heroimg.jpg';
import celebrationCake from '../assets/images/products/cake-celebrationcake.jpg';
import celebrationCake2 from '../assets/images/products/cake-celebrationcake2.jpg';
import birthdayCake from '../assets/images/products/cake-birthdaycake.jpg';
import cakeSlice from '../assets/images/products/cake-cakeslice.jpg';
import strawberryCakeSlice from '../assets/images/products/cake-strawberrybiscoffcakeslice.jpg';
import puffPuff from '../assets/images/products/fried-puffpuff.jpg';
import meatPie from '../assets/images/products/fried-meatpie.jpeg';
import bananaBread from '../assets/images/products/baked-bananabread.jpg';
import puffPuffBox from '../assets/images/products/fried-puffpuffbox.jpg';
import expressCake from '../assets/images/products/cake-expresscake.jpg';
import puffPuffMix from '../assets/images/products/fried-puffpuffmix.jpg';

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Products data with actual images
  const products = [
    { 
      id: 1, 
      name: 'Celebration Cake',
      image: celebrationCake
    },
    { 
      id: 2, 
      name: 'Birthday Cake',
      image: birthdayCake
    },
    { 
      id: 3, 
      name: 'Premium Celebration Cake',
      image: celebrationCake2
    },
    { 
      id: 4, 
      name: 'Cake Slice',
      image: cakeSlice
    },
    { 
      id: 5, 
      name: 'Strawberry Biscoff Slice',
      image: strawberryCakeSlice
    },
    { 
      id: 6, 
      name: 'Puff Puff',
      image: puffPuff
    },
    { 
      id: 7, 
      name: 'Meat Pie',
      image: meatPie
    },
    { 
      id: 8, 
      name: 'Banana Bread',
      image: bananaBread
    },
  ];

  const itemsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Get visible products based on current index
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>
        <div className="relative z-[2] text-center px-6">
          <div className="max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out]">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-white mb-5 [text-shadow:2px_4px_8px_rgba(0,0,0,0.3)]">
              Your Daily Dose of Delicious
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/95 mb-10 font-normal">
              Authentic Nigerian flavours meet modern baking excellence • From £10 cake slices to £250 celebration cakes
            </p>
            <NavLink 
              to="/menu" 
              className="inline-block bg-white text-[#1F1D63] font-semibold py-3.5 px-12 rounded transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:bg-[#E1BF5E]"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="animate-[fadeInLeft_1s_ease-out]">
              <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={puffPuffBox} 
                  alt="Fresh Puff Puff Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="animate-[fadeInRight_1s_ease-out]">
              <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
                Fresh Daily
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#1F1D63] mb-6">
                Authentic Nigerian Treats Baked Fresh Daily
              </h2>
              <p className="text-base leading-relaxed text-gray-600 mb-5">
                At D'modish, we blend the rich culinary traditions of Nigeria with contemporary UK tastes to create premium treats that delight every palate.
              </p>
              <p className="text-base leading-relaxed text-gray-600 mb-6">
                From our moist celebration cakes topped with elegant designs to savory small chops platters bursting with spices, we're committed to freshness, quality, and innovation. Every item is crafted with love using locally sourced ingredients to ensure authenticity in every creation.
              </p>
              <NavLink 
                to="/menu" 
                className="inline-block bg-[#3d2514] text-white font-semibold py-3 px-8 rounded transition-all duration-300 hover:bg-[#2d1d10] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(61,37,20,0.3)]"
              >
                See Products
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#1F1D63]">
              Our Products
            </h2>
            <div className="flex gap-3">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center cursor-pointer transition-all duration-300 text-[#1F1D63] hover:bg-[#1F1D63] hover:text-white hover:border-[#1F1D63]"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center cursor-pointer transition-all duration-300 text-[#1F1D63] hover:bg-[#1F1D63] hover:text-white hover:border-[#1F1D63]"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={false}
              animate={{ x: 0 }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(31,29,99,0.15)]"
                >
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1F1D63] text-center py-5">
                    {product.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#1F1D63] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Blog Image */}
            <div className="animate-[fadeInLeft_1s_ease-out]">
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={expressCake} 
                  alt="Express Cake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="animate-[fadeInRight_1s_ease-out]">
              <span className="inline-block text-xs font-bold tracking-[1.5px] text-[#E1BF5E] uppercase mb-4">
                Our Specialty
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl leading-tight font-bold text-[#1F1D63] mb-6">
                Celebrating Heritage Through Premium Pastries
              </h2>
              <p className="text-base leading-relaxed text-gray-600 mb-5">
                Welcome to D'modish, where the vibrant flavors of Nigerian cuisine meet modern baking excellence in the heart of the UK. We are more than just a bakery – we're a celebration of heritage, innovation, and quality.
              </p>
              <p className="text-base leading-relaxed text-gray-600 mb-5">
                Founded with a deep passion for authentic African tastes, D'modish was created to bridge traditional recipes with contemporary standards, offering premium treats that delight every palate. Whether you're craving a savory bite or a sweet indulgence, our products are made with love, using locally sourced ingredients to ensure freshness and authenticity in every creation.
              </p>
              <NavLink 
                to="/about" 
                className="inline-block bg-[#1F1D63] text-white font-semibold py-3 px-8 rounded transition-all duration-300 mt-4 hover:bg-[#16143f] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(31,29,99,0.3)]"
              >
                Read Our Story
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#1F1D63] text-center mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { image: celebrationCake, alt: 'Celebration Cake' },
              { image: puffPuffMix, alt: 'Puff Puff Mix' },
              { image: birthdayCake, alt: 'Birthday Cake' },
              { image: meatPie, alt: 'Meat Pie' },
              { image: strawberryCakeSlice, alt: 'Strawberry Biscoff Slice' },
              { image: puffPuffBox, alt: 'Puff Puff Box' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(31,29,99,0.2)]"
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Promise
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Why Choose D'modish FingerFoods & Bakes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              <strong>Our Mission:</strong> To redefine the perception of Nigerian cuisine by delivering premium-quality pastries, finger foods, traditional drinks and baked products that combine authentic African flavours with modern culinary standards.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-4">
              <strong>Our Vision:</strong> To become the UK's leading Nigerian-inspired pastry, drinks and baked goods brand, recognised globally for excellence, innovation, and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-gray-100 hover:border-[#E1BF5E] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IoGlobe className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Authentic Nigerian Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                Family recipes passed down through generations, bringing authentic flavors to the UK
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-gray-100 hover:border-[#E1BF5E] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GiChefToque className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh ingredients sourced daily, ensuring every bite is perfection
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-gray-100 hover:border-[#E1BF5E] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GiCakeSlice className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Custom Celebrations</h3>
              <p className="text-gray-600 leading-relaxed">
                From £10 cake slices to £250 celebration cakes and £80 smallchops platters - tailored for every occasion
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-gray-100 hover:border-[#E1BF5E] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaLeaf className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Dietary Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Vegan, gluten-free, and custom requirements catered with care
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-gray-100 hover:border-[#E1BF5E] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaTruck className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">UK-Wide Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh delivery straight to your door, wherever you are in the UK
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-gray-100 hover:border-[#E1BF5E] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaAward className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Excellence Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Redefining Nigerian cuisine with unmatched quality and service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Testimonials
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#E1BF5E] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "The best Nigerian cakes in the UK! The taste takes me back home. D'modish Cakes never disappoints!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1D63]">Adaeze Okonkwo</h4>
                  <p className="text-sm text-gray-500">London, UK</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#E1BF5E] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Ordered a custom cake for my daughter's birthday. It was absolutely stunning and delicious!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1D63]">Michael Johnson</h4>
                  <p className="text-sm text-gray-500">Manchester, UK</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#E1BF5E] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Fresh, authentic, and absolutely delicious. The snack packs are my weekly treat!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1D63]">Chioma Nwankwo</h4>
                  <p className="text-sm text-gray-500">Birmingham, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Trust Badge Section */}
      <section className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-16">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center lg:justify-start gap-3">
              <FaShieldAlt className="text-[#E1BF5E] text-4xl" />
              Your Safety is Our Priority
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto lg:mx-0">
              Certified with 5-Star Food Hygiene Rating & UK Standards Compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Badge 1 */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 hover:border-[#E1BF5E] hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaCertificate className="text-3xl text-white" />
              </div>
              <p className="text-white font-bold text-lg text-center mb-1">5-Star</p>
              <p className="text-white/70 text-sm text-center">Hygiene Rating</p>
            </div>

            {/* Badge 2 */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 hover:border-[#E1BF5E] hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <IoSparkles className="text-3xl text-white" />
              </div>
              <p className="text-white font-bold text-lg text-center mb-1">Fresh Daily</p>
              <p className="text-white/70 text-sm text-center">Ingredients</p>
            </div>

            {/* Badge 3 */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 hover:border-[#E1BF5E] hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MdVerified className="text-3xl text-white" />
              </div>
              <p className="text-white font-bold text-lg text-center mb-1">UK Standards</p>
              <p className="text-white/70 text-sm text-center">Compliant</p>
            </div>

            {/* View Standards Button */}
            <div className="flex items-center justify-center">
              <NavLink 
                to="/hygiene"
                className="inline-flex items-center gap-2 bg-[#E1BF5E] text-[#1F1D63] px-8 py-4 rounded-2xl font-bold hover:bg-[#d4a838] transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap"
              >
                <FaCheckCircle className="text-xl" />
                View Our Standards
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section (Final CTA) */}
      <section className="bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Easy Process
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              How to Order
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Three simple steps to enjoy our delicious treats
            </p>
          </div>

          <div className="relative">
           

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="relative inline-block mb-6">
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 bg-[#E1BF5E]/20 rounded-full animate-ping"></div>
                  {/* Icon container */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                    <MdDinnerDining className="relative text-5xl text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#1F1D63] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1F1D63] mb-4">Browse Menu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore our delicious selection of cakes, bread, and authentic Nigerian snacks
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="relative inline-block mb-6">
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 bg-[#E1BF5E]/20 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  {/* Icon container */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                    <GiPartyFlags className="relative text-5xl text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#1F1D63] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1F1D63] mb-4">Place Order</h3>
                <p className="text-gray-600 leading-relaxed">
                  Order online through our website or give us a call for custom requests
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="relative inline-block mb-6">
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 bg-[#E1BF5E]/20 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                  {/* Icon container */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                    <MdLocalShipping className="relative text-5xl text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#1F1D63] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1F1D63] mb-4">Enjoy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fresh delivery to your door or convenient pickup from our location
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <NavLink 
              to="/menu"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1F1D63] to-[#16143f] text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <span>Start Ordering Now</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
