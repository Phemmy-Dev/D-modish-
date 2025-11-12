import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaStar, FaTimes, FaChevronLeft, FaChevronRight, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { GiCakeSlice, GiCupcake, GiBread, GiPartyFlags } from 'react-icons/gi';
import { IoSparkles, IoClose } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Categories
  const categories = [
    { id: 'all', label: 'All', icon: <IoSparkles /> },
    { id: 'wedding', label: 'Wedding Cakes', icon: <FaHeart /> },
    { id: 'birthday', label: 'Birthday Cakes', icon: <GiCakeSlice /> },
    { id: 'celebration', label: 'Celebration Cakes', icon: <GiPartyFlags /> },
    { id: 'finger-foods', label: 'Finger Foods', icon: <GiCupcake /> },
    { id: 'pastries', label: 'Pastries & Desserts', icon: <GiBread /> },
    { id: 'events', label: 'Event Setups', icon: <FaStar /> },
  ];

  // Gallery Items
  const galleryItems = [
    {
      id: 1,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
      title: 'Elegant White Wedding Cake',
      occasion: 'Wedding Reception',
      description: '5-tier white wedding cake with intricate fondant flowers and gold accents',
      features: 'Fresh roses, Gold leaf, Vanilla & Raspberry filling'
    },
    {
      id: 2,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80',
      title: 'Colorful Birthday Celebration',
      occasion: '30th Birthday Party',
      description: 'Vibrant multi-colored birthday cake with buttercream frosting',
      features: 'Rainbow layers, Buttercream frosting, Custom topper'
    },
    {
      id: 3,
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1200&q=80',
      title: 'Anniversary Masterpiece',
      occasion: '25th Anniversary',
      description: 'Sophisticated silver anniversary cake with elegant design',
      features: 'Silver accents, Red velvet, Cream cheese frosting'
    },
    {
      id: 4,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80',
      title: 'Rustic Wedding Delight',
      occasion: 'Outdoor Wedding',
      description: 'Semi-naked cake with fresh berries and flowers',
      features: 'Fresh berries, Edible flowers, Lemon & Elderflower'
    },
    {
      id: 5,
      category: 'finger-foods',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
      title: 'Premium Small Chops Platter',
      occasion: 'Corporate Event',
      description: 'Assorted Nigerian finger foods beautifully arranged',
      features: 'Puff puff, Samosas, Spring rolls, Meat pies'
    },
    {
      id: 6,
      category: 'pastries',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
      title: 'Artisan Bread Buns',
      occasion: 'Daily Fresh',
      description: 'Freshly baked Nigerian-style bread buns',
      features: 'Soft texture, Traditional recipe, Fresh daily'
    },
    {
      id: 7,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
      title: 'Chocolate Indulgence',
      occasion: 'Kids Birthday',
      description: 'Rich chocolate cake with drip effect and decorations',
      features: 'Chocolate ganache, Custom decorations, Triple chocolate'
    },
    {
      id: 8,
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1200&q=80',
      title: 'Graduation Celebration',
      occasion: 'Graduation Party',
      description: 'Custom graduation-themed cake with school colors',
      features: 'Fondant decorations, School colors, Personalized'
    },
    {
      id: 9,
      category: 'events',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
      title: 'Dessert Table Setup',
      occasion: 'Wedding Reception',
      description: 'Complete dessert display with multiple treats',
      features: 'Coordinated theme, Multiple desserts, Professional setup'
    },
    {
      id: 10,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
      title: 'Modern Minimalist Wedding',
      occasion: 'Contemporary Wedding',
      description: 'Clean lines with geometric design and fresh florals',
      features: 'Geometric design, Fresh flowers, Modern aesthetic'
    },
    {
      id: 11,
      category: 'pastries',
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=1200&q=80',
      title: 'Mini Cupcake Collection',
      occasion: 'Baby Shower',
      description: 'Assorted mini cupcakes with various flavors',
      features: 'Multiple flavors, Buttercream frosting, Party perfect'
    },
    {
      id: 12,
      category: 'finger-foods',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80',
      title: 'Golden Samosa Selection',
      occasion: 'Party Catering',
      description: 'Crispy samosas with beef and vegetable fillings',
      features: 'Beef & veggie options, Perfectly spiced, Golden crispy'
    },
    {
      id: 13,
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=1200&q=80',
      title: 'Baby Shower Delight',
      occasion: 'Baby Shower',
      description: 'Pastel-themed cake with baby decorations',
      features: 'Pastel colors, Baby theme, Vanilla & Strawberry'
    },
    {
      id: 14,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=1200&q=80',
      title: 'Princess Theme Birthday',
      occasion: 'Kids Birthday',
      description: 'Magical princess-themed cake with tiara',
      features: 'Princess theme, Tiara topper, Pink & Purple'
    },
    {
      id: 15,
      category: 'events',
      image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=1200&q=80',
      title: 'Event Catering Display',
      occasion: 'Corporate Event',
      description: 'Professional catering setup with variety of treats',
      features: 'Full service, Professional display, Custom branded'
    },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Portfolio
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6">
              A Feast for the Eyes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Explore our collection of handcrafted creations—where artistry meets flavor. Each piece tells a story of celebration, craftsmanship, and unforgettable moments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <IoSparkles className="text-[#E1BF5E] text-xl" />
                <span className="font-semibold">500+ Creations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <FaHeart className="text-[#E1BF5E] text-xl" />
                <span className="font-semibold">1000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter/Category Navigation */}
      <section className="bg-white sticky top-24 z-40 border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-[#1F1D63] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid/Masonry Layout */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{ aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/3' : '1/1' }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.occasion}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1F1D63] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox/Modal View */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50"
            >
              <IoClose className="text-2xl" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold z-50">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>

            {/* Content */}
            <div 
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative bg-gray-100" style={{ minHeight: '400px' }}>
                    <img 
                      src={filteredItems[currentImageIndex]?.image} 
                      alt={filteredItems[currentImageIndex]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-8 flex flex-col justify-center bg-white">
                    <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-3">
                      {categories.find(c => c.id === filteredItems[currentImageIndex]?.category)?.label}
                    </span>
                    <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1F1D63] mb-4">
                      {filteredItems[currentImageIndex]?.title}
                    </h2>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">Occasion</h3>
                        <p className="text-gray-600">{filteredItems[currentImageIndex]?.occasion}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">Description</h3>
                        <p className="text-gray-600">{filteredItems[currentImageIndex]?.description}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Special Features</h3>
                        <p className="text-gray-600 text-sm">{filteredItems[currentImageIndex]?.features}</p>
                      </div>
                    </div>
                    <NavLink
                      to="/order"
                      className="block w-full text-center bg-gradient-to-r from-[#1F1D63] to-[#16143f] text-white py-3 rounded-full font-semibold hover:from-[#16143f] hover:to-[#1F1D63] transition-all duration-300"
                    >
                      Order Similar
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Projects Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Spotlight
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Featured Masterpieces
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A closer look at some of our most memorable and intricate custom creations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80" 
                  alt="Royal Wedding Cake"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#E1BF5E] text-white px-4 py-2 rounded-full font-bold text-sm">
                  Featured
                </div>
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#1F1D63] mb-4">
                Royal Wedding Extravaganza
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A magnificent 7-tier wedding cake that took our team 40 hours to create. Each tier featured hand-sculpted sugar flowers, edible gold leaf, and intricate royal icing piping. The bride wanted a fusion of Nigerian cultural elements with classic British elegance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  7 Tiers
                </span>
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Hand-sculpted Flowers
                </span>
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Gold Leaf
                </span>
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Serves 200+
                </span>
              </div>
            </motion.div>

            {/* Featured Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80" 
                  alt="Corporate Event Catering"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#E1BF5E] text-white px-4 py-2 rounded-full font-bold text-sm">
                  Featured
                </div>
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#1F1D63] mb-4">
                Corporate Gala for 500
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We catered a high-profile corporate event with over 2,000 pieces of Nigerian-inspired finger foods. The challenge was maintaining authentic flavors while meeting dietary requirements for an international audience. Every platter was a work of art.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  500 Guests
                </span>
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  2000+ Pieces
                </span>
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Multi-Dietary
                </span>
                <span className="bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Brand Customized
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials (Visual) */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Real Celebrations
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Moments That Matter
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              See our creations in action at real celebrations, paired with heartfelt words from our amazing clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
                name: 'Sarah & James',
                event: 'Wedding - June 2024',
                review: "D'modish created our dream wedding cake! It was not only stunning but tasted absolutely divine. All our guests are still talking about it!",
                rating: 5
              },
              {
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
                name: 'Chioma Obi',
                event: 'Birthday Party - August 2024',
                review: "The attention to detail was incredible. They brought my vision to life perfectly. The chocolate cake was a showstopper!",
                rating: 5
              },
              {
                image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
                name: 'Corporate Client',
                event: 'Annual Gala - September 2024',
                review: "Professional, reliable, and creative. D'modish catered our event flawlessly. The finger foods were the highlight of the evening!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#E1BF5E]" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div>
                    <h4 className="font-bold text-[#1F1D63]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Behind the Scenes
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Where the Magic Happens
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A glimpse into our kitchen and the passionate team that brings your celebrations to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', title: 'Cake Decorating' },
              { image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80', title: 'Fresh Baking' },
              { image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&q=80', title: 'Team at Work' },
              { image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=800&q=80', title: 'Quality Check' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
                Inspired? Let's Create Your Perfect Celebration!
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Ready to bring your vision to life? Contact us for a personalized consultation and let's design something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <NavLink 
                  to="/order"
                  className="inline-flex items-center justify-center gap-2 bg-[#E1BF5E] text-[#1F1D63] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#d4a838] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <MdEmail />
                  Request Consultation
                </NavLink>
                <NavLink 
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  View Our Menu
                </NavLink>
              </div>

              {/* Social Media Links */}
              <div>
                <p className="text-white/60 mb-4 text-sm">Follow us for more inspiration</p>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Integration */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Follow Our Journey
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Latest on Instagram
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Stay updated with our newest creations, behind-the-scenes moments, and customer celebrations
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FaInstagram className="text-xl" />
              Follow @dmodishcakes
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
