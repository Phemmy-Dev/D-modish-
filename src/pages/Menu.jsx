import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaStar, FaLeaf, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { GiCupcake, GiCakeSlice, GiPartyFlags, GiBread } from 'react-icons/gi';
import { IoSparkles, IoTimeOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { MdLocalShipping, MdDesignServices } from 'react-icons/md';
import { BiCustomize } from 'react-icons/bi';

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
        name: "Elegant Wedding Cake",
        category: "cakes",
        description: "Multi-tiered masterpiece with intricate designs, personalized to match your wedding theme. Available in various flavors and sizes.",
        features: ["Custom Design", "Multiple Tiers", "Fresh Flowers Option", "Serves 80-200+"],
        priceRange: "Starting from £450",
        dietary: ["Vegan Option", "Gluten-Free Option"],
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
      },
      {
        id: 2,
        name: "Birthday Celebration Cake",
        category: "cakes",
        description: "Custom-designed birthday cakes that bring your vision to life. From simple elegance to elaborate themed creations.",
        features: ["Theme Customization", "Age Display", "Photo Printing Available", "Serves 15-50"],
        priceRange: "Starting from £65",
        dietary: ["Dairy-Free Option"],
        image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80"
      },
      {
        id: 3,
        name: "Anniversary Masterpiece",
        category: "cakes",
        description: "Romantic and sophisticated cakes perfect for celebrating years of love. Elegant designs with premium finishes.",
        features: ["Gold/Silver Accents", "Romantic Designs", "Message Personalization", "Serves 20-60"],
        priceRange: "Starting from £85",
        dietary: ["Sugar-Free Option"],
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80"
      },
      {
        id: 4,
        name: "Corporate Event Cake",
        category: "cakes",
        description: "Professional and branded cakes for corporate events, product launches, and business celebrations.",
        features: ["Logo Integration", "Brand Colors", "Professional Finish", "Serves 30-100"],
        priceRange: "Starting from £120",
        dietary: ["Nut-Free Option"],
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
      }
    ],
    fingerFoods: [
      {
        id: 5,
        name: "Puff Puff Party Pack",
        category: "finger-foods",
        description: "Authentic Nigerian puff puff - sweet, fluffy, and irresistible. Perfect for any celebration or gathering.",
        features: ["Freshly Made", "Traditional Recipe", "Party Favorite", "Minimum 50 pieces"],
        priceRange: "£2.50 per dozen",
        servingSize: "50-200 pieces",
        image: "https://images.unsplash.com/photo-1600184893240-6c90f53d0588?w=800&q=80"
      },
      {
        id: 6,
        name: "Premium Samosa Selection",
        category: "finger-foods",
        description: "Crispy samosas filled with spiced meat or vegetables. A fusion favorite at every event.",
        features: ["Beef or Veggie Options", "Perfectly Spiced", "Golden & Crispy", "Minimum 30 pieces"],
        priceRange: "£3.00 per dozen",
        servingSize: "30-150 pieces",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
      },
      {
        id: 7,
        name: "Nigerian Meat Pies",
        category: "finger-foods",
        description: "Flaky pastry filled with savory seasoned beef and vegetables. A nostalgic taste of home.",
        features: ["Flaky Crust", "Savory Filling", "Party Size Available", "Minimum 20 pieces"],
        priceRange: "£2.00 each",
        servingSize: "20-100 pieces",
        image: "https://images.unsplash.com/photo-1619873981210-77999c065e75?w=800&q=80"
      },
      {
        id: 8,
        name: "Small Chops Platter",
        category: "finger-foods",
        description: "Assorted Nigerian finger foods including spring rolls, samosas, puff puff, and more. Perfect party platter.",
        features: ["Variety Selection", "Professionally Arranged", "Customizable Mix", "Serves 10-50"],
        priceRange: "£45 per platter",
        servingSize: "Serves 10-15 guests",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
      },
      {
        id: 9,
        name: "Chin Chin Party Pack",
        category: "finger-foods",
        description: "Crunchy, sweet Nigerian snack perfect for munching. Available in various flavors.",
        features: ["Multiple Flavors", "Long Shelf Life", "Perfect Gift", "Bulk Available"],
        priceRange: "£8 per 500g bag",
        servingSize: "Serves 8-12",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80"
      }
    ],
    pastries: [
      {
        id: 10,
        name: "Artisan Bread Buns",
        category: "pastries",
        description: "Soft, fluffy Nigerian-style bread buns. Perfect for breakfast or as a sweet snack.",
        features: ["Freshly Baked Daily", "Soft & Fluffy", "Traditional Recipe", "Pack of 6"],
        priceRange: "£6 per pack",
        dietary: ["Dairy-Free"],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
      },
      {
        id: 11,
        name: "Fusion Croissants",
        category: "pastries",
        description: "Buttery croissants with Nigerian-inspired fillings. A unique East-meets-West treat.",
        features: ["Butter-Rich Layers", "Unique Fillings", "Fresh Daily", "Minimum 6 pieces"],
        priceRange: "£3.50 each",
        dietary: ["Vegetarian Options"],
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
      },
      {
        id: 12,
        name: "Mini Cupcake Collection",
        category: "pastries",
        description: "Bite-sized cupcakes in various flavors with buttercream frosting. Perfect for events.",
        features: ["Multiple Flavors", "Beautiful Decoration", "Individual Portions", "Minimum 24 pieces"],
        priceRange: "£30 per dozen",
        dietary: ["Vegan Available"],
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80"
      },
      {
        id: 13,
        name: "Chocolate Brownies",
        category: "pastries",
        description: "Rich, fudgy brownies that melt in your mouth. Decadent chocolate in every bite.",
        features: ["Fudgy Texture", "Premium Chocolate", "Cut to Size", "Minimum 12 pieces"],
        priceRange: "£25 per dozen",
        dietary: ["Gluten-Free Option"],
        image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80"
      },
      {
        id: 14,
        name: "Fruit Tarts",
        category: "pastries",
        description: "Elegant tarts with custard cream and fresh seasonal fruits. A sophisticated dessert option.",
        features: ["Fresh Fruits", "Buttery Crust", "Beautiful Presentation", "Minimum 6 pieces"],
        priceRange: "£4.50 each",
        dietary: ["Contains Dairy"],
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80"
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
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <IoCheckmarkCircle className="text-[#E1BF5E] text-2xl" />
                <span className="font-semibold">Dietary Options</span>
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

                    {/* Dietary Info */}
                    {item.dietary && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.dietary.map((diet, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold"
                          >
                            <FaLeaf className="text-green-600" />
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Serving Size (for finger foods) */}
                    {item.servingSize && (
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>Serving:</strong> {item.servingSize}
                      </p>
                    )}

                    {/* Order Button */}
                    <NavLink
                      to="/order"
                      className="block w-full text-center bg-gradient-to-r from-[#1F1D63] to-[#16143f] text-white py-3 rounded-full font-semibold hover:from-[#16143f] hover:to-[#1F1D63] transition-all duration-300"
                    >
                      Order Now
                    </NavLink>
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center mb-4">
                <FaLeaf className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Dietary Accommodations</h3>
              <p className="text-gray-600">
                Vegan, gluten-free, nut-free, and allergy-friendly options
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
                    <p className="text-sm text-gray-600">Custom designs, multiple sizes</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">From £65</span>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Wedding Cakes</p>
                    <p className="text-sm text-gray-600">Multi-tier, fully customizable</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">From £450</span>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Finger Foods</p>
                    <p className="text-sm text-gray-600">Per dozen or bulk orders</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">From £2/dozen</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-[#1F1D63]">Pastries & Desserts</p>
                    <p className="text-sm text-gray-600">Individual or bulk pricing</p>
                  </div>
                  <span className="text-[#E1BF5E] font-bold">From £3 each</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#E1BF5E]/10 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Final pricing depends on design complexity, size, and customization requirements. Contact us for a detailed quote.
                </p>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <NavLink 
                  to="/order"
                  className="inline-flex items-center justify-center gap-2 bg-[#E1BF5E] text-[#1F1D63] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#d4a838] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <FaHeart />
                  Get a Quote
                </NavLink>
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
              href="tel:+447123456789"
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
                <p className="font-bold text-lg">+44 712 345 6789</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:hello@dmodishcakes.com"
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
                <p className="font-bold text-lg">hello@dmodishcakes.com</p>
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
