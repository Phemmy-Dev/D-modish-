import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaStar, FaLeaf, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { GiCupcake, GiCakeSlice, GiPartyFlags, GiBread } from 'react-icons/gi';
import { IoSparkles, IoTimeOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { MdLocalShipping, MdDesignServices } from 'react-icons/md';
import { BiCustomize } from 'react-icons/bi';
import celebrationCake from '../assets/images/celebrationcake.jpg';
import birthdayCake from '../assets/images/cake-girlbirthday.jpg';
import cakeSlice from '../assets/images/products/cake-cakeslice.jpg';
import expressCake from '../assets/images/products/cake-expresscake.jpg';
import puffPuff from '../assets/images/products/fried-puffpuff.jpg';
import meatPie from '../assets/images/fried-meatpie.jpg';
import puffPuffBox from '../assets/images/products/fried-puffpuffbox.jpg';
import puffpuffmix from '../assets/images/products/fried-puffpuffmix.jpg';
import bananaBread from '../assets/images/products/baked-bananabread.jpg';
import strawberryCakeSlice from '../assets/images/products/cake-strawberrybiscoffcakeslice.jpg';
import cupcakes from '../assets/images/baked-cupcakes.jpg';
import cakebirthday from '../assets/images/cake-birthday.jpg';
import premiumbirthdaycake from '../assets/images/cake-twostep.jpg';
import cakebirthday2 from '../assets/images/cake-birthday2.jpg';
import smallchops from '../assets/images/fried-smallchops.jpg';
import friedminismallchopsplatter from '../assets/images/fried-minismallchopsplatter.jpg';
import friedcarrotbanana from '../assets/images/fried-carrotbanana.jpg';
import friedvegetablespringroll from '../assets/images/fried-vegetablespringroll.jpg';
import filleddoughnuts from '../assets/images/fried-filleddoughnut.jpg';
import cakebirthday3 from '../assets/images/cake-girlbirthday2.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categories
  const categories = [
    { id: 'all', label: 'All Items', icon: <IoSparkles /> },
    { id: 'cakes', label: 'Signature Cakes', icon: <GiCakeSlice /> },
    { id: 'finger-foods', label: 'Finger Foods', icon: <GiCupcake /> },
    { id: 'pastries', label: 'Pastries & Desserts', icon: <GiBread /> },
  ];

  // Menu Items
  const menuItems = {
    cakes: [
      {
        id: 1,
        name: "Celebration Cake",
        category: "cakes",
        description: "Custom-designed celebration cakes for weddings, birthdays, anniversaries and special events. Each cake is a masterpiece crafted to match your theme and taste preferences.",
        features: ["Custom Design", "Multiple Tiers", "Fresh Ingredients", "Serves 30-80+"],
        priceRange: "From £250",
        image: celebrationCake
      },
      {
        id: 2,
        name: "Birthday Cake",
        category: "cakes",
        description: "Personalized birthday cakes that bring joy to your special day. From simple elegance to elaborate themed creations with authentic Nigerian flavors.",
        features: ["Theme Customization", "Age Display", "Photo Printing Available", "Serves 15-40"],
        priceRange: "From £80",
        image: birthdayCake
      },
      {
        id: 2,
        name: "Birthday Cake",
        category: "cakes",
        description: "Personalized birthday cakes that bring joy to your special day. From simple elegance to elaborate themed creations with authentic Nigerian flavors.",
        features: ["Theme Customization", "Age Display", "Photo Printing Available", "Serves 15-40"],
        priceRange: "From £85",
        image: cakebirthday2
      },
      {
        id: 3,
        name: "Cake Slice",
        category: "cakes",
        description: "Individual cake slices perfect for a quick treat or everyday indulgence. Available in multiple flavors including chocolate, vanilla, and red velvet.",
        features: ["Multiple Flavors", "Perfect Single Serving", "Fresh Daily", "Ready to Eat"],
        priceRange: "£10 per slice",
        image: cakeSlice
      },
      {
        id: 4,
        name: "Birthday Cake",
        category: "cakes",
        description: "Quick turnaround cakes for last-minute celebrations. Simple yet elegant designs with authentic taste.",
        features: ["24-48hr Turnaround", "Simple Designs", "Premium Quality", "Serves 8-15"],
        priceRange: "From £65",
        image: cakebirthday3
      },
      {
        id: 5,
        name: "Cupcakes",
        category: "cakes",
        description: "Quick turnaround cakes for last-minute celebrations. Simple yet elegant designs with authentic taste.",
        features: ["24-48hr Turnaround", "Simple Designs", "Premium Quality", "Serves 8-15"],
        priceRange: "From £30",
        image: cupcakes
      },
      {
        id: 5,
        name: "Birthday Cake",
        category: "cakes",
        description: "Quick turnaround cakes for last-minute celebrations. Simple yet elegant designs with authentic taste.",
        features: ["24-48hr Turnaround", "Simple Designs", "Premium Quality", "Serves 8-15"],
        priceRange: "From £50",
        image: cakebirthday
      },
      {
        id: 5,
        name: "Premium Birthday Cake",
        category: "cakes",
        description: "Quick turnaround cakes for last-minute celebrations. Simple yet elegant designs with authentic taste.",
        features: ["24-48hr Turnaround", "Simple Designs", "Premium Quality", "Serves 8-15"],
        priceRange: "From £250",
        image: premiumbirthdaycake
      }
    ],
    fingerFoods: [
      {
        id: 5,
        name: "Puff Puff Mix",
        category: "finger-foods",
        description: "Authentic Nigerian puff puff - sweet, fluffy, and irresistible. Freshly made daily using traditional recipes passed down through generations.",
        features: ["Freshly Made Daily", "Traditional Recipe", "Party Favorite", "Various Pack Sizes"],
        priceRange: "From £5 per pack",
        image: puffpuffmix
      },
      {
        id: 6,
        name: "Meat Pie",
        category: "finger-foods",
        description: "Flaky pastry filled with savory seasoned beef and vegetables. A nostalgic taste of home that's perfect for any occasion.",
        features: ["Flaky Crust", "Savory Beef Filling", "Perfectly Spiced", "Individual or Bulk"],
        priceRange: "£3.50 each",
        image: meatPie
      },
      {
        id: 7,
        name: "Small Chops Platter",
        category: "finger-foods",
        description: "Assorted Nigerian finger foods bursting with spices. Perfect party platter with a variety of authentic treats professionally arranged.",
        features: ["Variety Selection", "Professionally Arranged", "Customizable Mix", "Serves 10-15"],
        priceRange: "£80 per platter",
        image: puffPuffBox
      },
      {
        id: 8,
        name: "Small Chops",
        category: "finger-foods",
        description: "Crispy spring rolls with Nigerian-spiced fillings. A fusion favorite that combines authentic African flavors with contemporary presentation.",
        features: ["Crispy & Golden", "Perfectly Spiced", "Party Size Available", "Vegetarian Option"],
        priceRange: "£8",
        image: smallchops
      },
      {
        id: 9,
        name: "Mini Small Chops Platter",
        category: "finger-foods",
        description: "Premium samosas filled with spiced meat or vegetables. Golden, crispy, and perfectly seasoned for your events.",
        features: ["Beef or Veggie Options", "Perfectly Spiced", "Golden & Crispy", "Bulk Orders Available"],
        priceRange: "£30",
        image: friedminismallchopsplatter
      }
    ],
    pastries: [
      {
        id: 10,
        name: "Banana Bread",
        category: "pastries",
        description: "Moist, flavorful banana bread baked fresh daily. Perfect for breakfast or as a sweet snack with tea or coffee.",
        features: ["Freshly Baked Daily", "Moist & Flavorful", "Premium Ingredients", "Slice or Loaf"],
        priceRange: "From £8",
        image: bananaBread
      },
      {
        id: 11,
        name: "Strawberry Biscoff Cake Slice",
        category: "pastries",
        description: "Indulgent cake slice combining fresh strawberries with Biscoff spread. A modern twist on traditional cake.",
        features: ["Fresh Strawberries", "Biscoff Flavor", "Individual Serving", "Fresh Daily"],
        priceRange: "£12 per slice",
        image: strawberryCakeSlice
      },
      {
        id: 12,
        name: "Mini Cupcakes",
        category: "pastries",
        description: "Bite-sized cupcakes in various flavors with buttercream frosting. Perfect for events and celebrations.",
        features: ["Multiple Flavors", "Beautiful Decoration", "Individual Portions", "Minimum 24 pieces"],
        priceRange: "From £25 per dozen",
        image: cakeSlice
      },
      {
        id: 13,
        name: "Bread Buns",
        category: "pastries",
        description: "Soft, fluffy Nigerian-style bread buns. Perfect for breakfast or as a sweet snack.",
        features: ["Freshly Baked Daily", "Soft & Fluffy", "Traditional Recipe", "Pack of 6"],
        priceRange: "From £6 per pack",
        image: bananaBread
      },
      {
        id: 14,
        name: "Carrot Banana Bread",
        category: "pastries",
        description: "Assorted pastries and treats. A delightful mix of our freshly baked specialties.",
        features: ["Variety Pack", "Fresh Daily", "Perfect for Sharing", "Minimum 6 pieces"],
        priceRange: "",
        image: friedcarrotbanana
      },
      {
        id: 14,
        name: "Vegetable Spring Rolls",
        category: "pastries",
        description: "Assorted pastries and treats. A delightful mix of our freshly baked specialties.",
        features: ["Variety Pack", "Fresh Daily", "Perfect for Sharing", "Minimum 6 pieces"],
        priceRange: "From £9.99",
        image: friedvegetablespringroll
      },
      {
        id: 14,
        name: "Filled Doughnuts",
        category: "pastries",
        description: "Assorted pastries and treats. A delightful mix of our freshly baked specialties.",
        features: ["Variety Pack", "Fresh Daily", "Perfect for Sharing", "Minimum 6 pieces"],
        priceRange: "From £10",
        image: filleddoughnuts
      }
    ]
  };

  // Flatten all items for filtering
  const allItems = [...menuItems.cakes, ...menuItems.fingerFoods, ...menuItems.pastries];
  
  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#E1BF5E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Menu
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6">
              Culinary Excellence<br />in Every Creation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From elegant celebration cakes to authentic Nigerian finger foods, explore our carefully crafted menu designed to make every occasion unforgettable.
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <IoCheckmarkCircle className="text-[#E1BF5E] text-2xl" />
                <span className="font-semibold">Custom Designs</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <IoCheckmarkCircle className="text-[#E1BF5E] text-2xl" />
                <span className="font-semibold">Fresh Ingredients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation/Filter */}
      <section className="bg-white sticky top-24 z-40 border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#1F1D63] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#E1BF5E] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {item.priceRange}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1F1D63] mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs bg-[#f5f5f5] text-gray-700 px-3 py-1 rounded-full"
                        >
                          <IoCheckmarkCircle className="text-[#E1BF5E]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Bespoke Creations
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Custom Orders & Design Consultation
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Can't find exactly what you're looking for? Let us create something uniquely yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center mb-4">
                <MdDesignServices className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Design Consultation</h3>
              <p className="text-gray-600">
                One-on-one consultation to bring your vision to life
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center mb-4">
                <BiCustomize className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Flavor Customization</h3>
              <p className="text-gray-600">
                Choose from our extensive flavor library or create your own
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center mb-4">
                <IoSparkles className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Theme Matching</h3>
              <p className="text-gray-600">
                Perfect coordination with your event colors and theme
              </p>
            </motion.div>
          </div>

          {/* Custom Order Process */}
          <div className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white p-8 md:p-12 rounded-3xl">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-8 text-center">
              How Custom Orders Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E1BF5E] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-xl font-bold mb-3">Share Your Vision</h4>
                <p className="text-white/80">
                  Contact us with your ideas, theme, event details, and any inspiration images
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E1BF5E] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-xl font-bold mb-3">Consultation & Quote</h4>
                <p className="text-white/80">
                  We'll discuss design, flavors, sizing, and provide a detailed quote
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E1BF5E] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-xl font-bold mb-3">Creation & Delivery</h4>
                <p className="text-white/80">
                  We craft your masterpiece and deliver it fresh for your special day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Ordering Information */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Ordering Info
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Pricing & Order Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pricing Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center">
                  <GiCakeSlice className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F1D63]">Pricing Structure</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Celebration Cakes</p>
                    <p className="text-sm text-gray-600">Custom designs for special events</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">£250</span>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Cake Slices</p>
                    <p className="text-sm text-gray-600">Perfect for everyday indulgence</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">£10</span>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Smallchops Platters</p>
                    <p className="text-sm text-gray-600">Assorted finger foods for gatherings</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">£80</span>
                </div>
                <div className="flex justify-between items-start pb-4">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Individual Finger Foods</p>
                    <p className="text-sm text-gray-600">Puff puff, meat pies, spring rolls</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">From £2.50</span>
                </div>
              </div>
            </motion.div>

            {/* Order Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center">
                  <IoTimeOutline className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F1D63]">Order Requirements</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E1BF5E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <IoCheckmarkCircle className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1D63] mb-1">Minimum Lead Time</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Standard Orders:</strong> 3-5 days<br />
                      <strong>Custom Cakes:</strong> 7-14 days<br />
                      <strong>Wedding Cakes:</strong> 4-8 weeks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E1BF5E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <IoCheckmarkCircle className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1D63] mb-1">Minimum Orders</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Finger Foods:</strong> 20-50 pieces (varies by item)<br />
                      <strong>Party Platters:</strong> Minimum serves 10<br />
                      <strong>Bulk Orders:</strong> Custom arrangements available
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E1BF5E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <IoCheckmarkCircle className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1D63] mb-1">Delivery & Pickup</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Delivery:</strong> Available within service areas (fee applies)<br />
                      <strong>Pickup:</strong> Free pickup from our location<br />
                      <strong>Setup Service:</strong> Available for large events
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E1BF5E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdLocalShipping className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1D63] mb-1">Payment Terms</p>
                    <p className="text-gray-600 text-sm">
                      50% deposit required for custom orders<br />
                      Full payment due 48 hours before delivery/pickup
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]"
          >
            <h4 className="text-xl font-bold text-[#1F1D63] mb-4 flex items-center gap-3">
              <IoSparkles className="text-[#E1BF5E]" />
              Important Information
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#E1BF5E] mt-1">•</span>
                <span>Rush orders may be accommodated with additional fees - contact us to inquire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E1BF5E] mt-1">•</span>
                <span>Seasonal availability may affect certain ingredients and designs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E1BF5E] mt-1">•</span>
                <span>Allergy information available upon request - please inform us of any dietary restrictions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E1BF5E] mt-1">•</span>
                <span>Cancellations must be made at least 72 hours in advance for deposit refund</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Special Programmes Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Exclusive Services
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Special Programmes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Innovative services designed to make your life easier and healthier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WeightSmart Programme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-3xl shadow-lg border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center">
                  <FaLeaf className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1D63]">WeightSmart FingerFoods</h3>
                  <p className="text-sm text-[#E1BF5E] font-semibold">Subscription Programme</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                A subscription-based healthy-eating initiative allowing clients to select meals aligned with personal goals — 
                <strong> weight loss, maintenance, or strength gain</strong>. Our AI-assisted recipe planner and portion-control 
                system ensure balanced nutrition without compromising flavour.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">Personalized meal plans based on your goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">AI-assisted recipe planner</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">Portion-controlled servings</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">Authentic flavors, balanced nutrition</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#E1BF5E]/10 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Coming Soon!</strong> Register your interest for early access to our WeightSmart programme.
                </p>
              </div>
            </motion.div>

            {/* Birthday Scheduler Programme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-3xl shadow-lg border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center">
                  <GiPartyFlags className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1D63]">Programmed Birthday Scheduler</h3>
                  <p className="text-sm text-[#E1BF5E] font-semibold">Automated Gift Service</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                A unique automation service that enables customers to <strong>pre-schedule birthday cakes, party boxes, 
                and food trays for loved ones</strong>. The system sends a 5-day reminder before preparation, ensuring 
                gifts arrive on time — making celebration effortless.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">Pre-schedule cakes and gift boxes</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">5-day advance reminder system</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">Automated preparation & delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-[#E1BF5E] text-xl flex-shrink-0" />
                  <span className="text-gray-700">Never miss a loved one's birthday again</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#E1BF5E]/10 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Make celebrations effortless!</strong> Set it once and we'll handle the rest, every year.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
                Ready to Order?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Let's create something amazing together. Get in touch for a personalized quote or place your order today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="https://wa.link/fcqc2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#E1BF5E] text-[#1F1D63] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#d4a838] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <FaHeart />
                  Get a Quote
                </a>
                <NavLink 
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  <IoSparkles />
                  View Gallery
                </NavLink>
              </div>
            </motion.div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="tel:+447477839439"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Call Us</p>
                <p className="font-bold text-lg">+44 7477 839439</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@dmodish.co.uk"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Email Us</p>
                <p className="font-bold text-lg">info@dmodish.co.uk</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/447123456789"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">WhatsApp</p>
                <p className="font-bold text-lg">Chat with us</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
