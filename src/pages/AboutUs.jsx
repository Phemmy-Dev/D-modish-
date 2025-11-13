import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaUsers, FaLeaf, FaTrophy, FaHandshake } from 'react-icons/fa';
import { GiCupcake, GiCakeSlice, GiPartyFlags } from 'react-icons/gi';
import { IoSparkles } from 'react-icons/io5';
import heroImg from '../assets/images/heroimg.jpg';
import celebrationCake from '../assets/images/cake-birthday.jpg';
import puffPuffBox from '../assets/images/cake-twostep.jpg';

const AboutUs = () => {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-1"></div>
        <div className="relative z-2 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl leading-tight font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#E1BF5E] font-semibold mb-4 italic">
              "Taste. Style. Celebration!"
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Where Nigerian heritage meets modern baking excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
                About D'modish
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1D63] mb-6 break-words">
                A Modern Afro-Fusion Culinary Brand
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 break-words">
                <strong>D'modish FingerFoods and Bakes Ltd</strong> is not just another food business — it is a modern 
                <strong> Afro-Fusion culinary and lifestyle brand</strong> that blends authentic African flavours with 
                contemporary British tastes, digital convenience, and community impact. Our model brings together 
                <strong> culinary creativity, technology, and wellbeing</strong>, offering customers a complete ecosystem 
                of flavour, health, and celebration.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 break-words">
                Our journey began as a small venture inspired by family recipes from Nigeria, evolving into a beloved 
                brand that serves fresh, handcrafted goods daily. Whether it's a young professional grabbing a quick 
                bite, a family ordering weekly healthy snacks, or a company hosting a catered event, <strong>D'Modish</strong> delivers 
                food experiences that are fresh, flavourful, and meaningful.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 break-words">
                By positioning ourselves at the intersection of <strong>culture, convenience, and innovation</strong>, we are 
                redefining how the UK experiences finger foods — turning every order into a story of celebration, style, 
                and connection.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-[#f5f5f5] px-6 py-3 rounded-full">
                  <IoSparkles className="text-[#E1BF5E] text-2xl" />
                  <span className="font-semibold text-[#1F1D63]">Est. 2020</span>
                </div>
                <div className="flex items-center gap-3 bg-[#f5f5f5] px-6 py-3 rounded-full">
                  <FaUsers className="text-[#E1BF5E] text-2xl" />
                  <span className="font-semibold text-[#1F1D63]">1000+ Happy Customers</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={celebrationCake} 
                  alt="D'modish Celebration Cake"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E1BF5E] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1F1D63] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Foundation
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Mission & Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We are committed to celebrating culture through quality, creativity, and excellence
            </p>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1BF5E]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E1BF5E] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaTrophy className="text-2xl md:text-3xl text-[#1F1D63]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold break-words">Our Mission</h3>
              </div>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 break-words">
                Our mission is to become the <strong>leading Afro-Fusion finger food brand in the UK</strong>, providing 
                customers with delicious, wholesome, and culturally rich options that celebrate both tradition and modernity. 
                We are dedicated to redefining the perception of Nigerian cuisine by delivering <strong>premium-quality pastries, 
                finger foods, traditional drinks and baked products</strong> that combine authentic African flavours with modern 
                culinary standards.
              </p>
            </div>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1F1D63] mb-3">Authenticity</h4>
              <p className="text-gray-600">
                Honoring traditional recipes while embracing innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mb-4">
                <FaStar className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1F1D63] mb-3">Excellence</h4>
              <p className="text-gray-600">
                Premium ingredients and meticulous craftsmanship in every creation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mb-4">
                <IoSparkles className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1F1D63] mb-3">Innovation</h4>
              <p className="text-gray-600">
                Constantly evolving with creative fusion and contemporary techniques
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-xl flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1F1D63] mb-3">Customer First</h4>
              <p className="text-gray-600">
                Building lasting relationships through exceptional service
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Edge
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-l-4 border-[#E1BF5E] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <GiCupcake className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1D63] mb-3">Afro-Fusion Mastery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We've perfected the art of blending authentic Nigerian flavors with contemporary baking 
                    techniques, creating unique taste experiences you won't find anywhere else.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-l-4 border-[#E1BF5E] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <IoSparkles className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1D63] mb-3">Total Customization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From design to flavor profiles, every creation is tailored to your vision. We work closely 
                    with you to ensure your celebration is uniquely yours.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-l-4 border-[#E1BF5E] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaStar className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1D63] mb-3">Artisanal Attention</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every detail matters. From ingredient selection to final presentation, we bring meticulous 
                    care and artistic flair to every single order.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-l-4 border-[#E1BF5E] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <GiCakeSlice className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1D63] mb-3">Heritage Meets Modern</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We honor time-tested family recipes while embracing modern culinary innovations, giving 
                    you the best of both worlds.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Service Pillars Section */}
      <section className="bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Services
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Six Service Pillars
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At the heart of D'Modish® are six service pillars designed to serve diverse customers with efficiency, scalability, and consistency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E1BF5E]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F1D63] mb-4 text-center break-words">Walk-In & Takeaway Service</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center break-words">
                Freshly prepared Afro-Fusion snacks, small chops, and pastries available daily for walk-in customers and quick pick-ups. Every product reflects our "Finger-Lickin Taste to Celebrate with Style," combining freshness, speed, and satisfaction.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E1BF5E]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F1D63] mb-4 text-center break-words">Open Catering & Corporate Events</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center break-words">
                Tailored catering packages for weddings, corporate functions, school events, and private celebrations. D'Modish provides themed menus, dessert tables, and curated finger-food platters that blend presentation with cultural flair.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E1BF5E]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F1D63] mb-4 text-center break-words">WeightSmart FingerFoods Programme</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center break-words">
                A subscription-based healthy-eating initiative allowing clients to select meals aligned with personal goals — weight loss, maintenance, or strength gain. Our AI-assisted recipe planner and portion-control system ensure balanced nutrition without compromising flavour.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E1BF5E]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white font-bold">4</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F1D63] mb-4 text-center break-words">Programmed Birthday Scheduler</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center break-words">
                A unique automation service that enables customers to pre-schedule birthday cakes, party boxes, and food trays for loved ones. The system sends a 5-day reminder before preparation, ensuring gifts arrive on time — making celebration effortless.
              </p>
            </motion.div>

            {/* Pillar 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E1BF5E]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white font-bold">5</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F1D63] mb-4 text-center break-words">Retail & Partner Supply Line</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center break-words">
                Supplying branded D'Modish snacks, pastries, and sauces to cafés, event vendors, and retail outlets across the UK, extending brand presence beyond our flagship outlets.
              </p>
            </motion.div>

            {/* Pillar 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E1BF5E]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white font-bold">6</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F1D63] mb-4 text-center break-words">D'Modish Culinary Network & Academy</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center break-words">
                An in-house talent-development programme that trains and certifies young bakers and cooks in Afro-Fusion cuisine, empowering women, youth, and new migrants with hands-on culinary skills and entrepreneurship mentoring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="bg-[#1F1D63] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              What We Offer
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              Our Specialties
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              From intimate gatherings to grand celebrations, we craft unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <GiPartyFlags className="text-5xl text-[#E1BF5E] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Celebration Cakes</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Custom-designed cakes for weddings, birthdays, and special occasions. Each cake is a 
                masterpiece crafted to match your theme and taste preferences.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Wedding Cakes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Birthday Cakes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Anniversary Cakes
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <GiCupcake className="text-5xl text-[#E1BF5E] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Nigerian Finger Foods</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Authentic Nigerian snacks and pastries made with love. Perfect for parties, corporate 
                events, or when you're craving a taste of home.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Puff Puff & Chin Chin
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Meat Pies & Samosas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Small Chops Platters
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <GiCakeSlice className="text-5xl text-[#E1BF5E] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Artisan Pastries</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Freshly baked bread, buns, and pastries that blend traditional recipes with contemporary 
                baking techniques for exceptional taste.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Fresh Bread & Buns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Fusion Pastries
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E1BF5E]">✓</span> Dietary Options
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality & Craftsmanship */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={puffPuffBox} 
                  alt="Quality Ingredients - D'modish Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
                Our Promise
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
                Quality & Craftsmanship
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At D'modish, quality isn't just a buzzword—it's our foundation. We source only the finest, 
                freshest ingredients, ensuring every bite delivers exceptional taste and nutritional value.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLeaf className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Premium Ingredients</h4>
                    <p className="text-gray-600">
                      Fresh, high-quality ingredients sourced daily from trusted suppliers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaHeart className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Handcrafted with Care</h4>
                    <p className="text-gray-600">
                      Every item is made fresh to order with meticulous attention to detail
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IoSparkles className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Dietary Flexibility</h4>
                    <p className="text-gray-600">
                      Vegan, gluten-free, and custom dietary requirements accommodated
                    </p>
                  </div>
                </div>
              </div>

              <NavLink 
                to="/hygiene"
                className="inline-block bg-[#1F1D63] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#16143f] transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Learn About Our Standards
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose D'modish - Testimonials */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Client Love
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Why Our Customers Choose Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Don't just take our word for it—hear from those who've experienced the D'modish difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ngozi Adebayo",
                location: "London",
                rating: 5,
                text: "D'modish catered our wedding and everyone couldn't stop talking about how delicious everything was! The cake was stunning and tasted even better than it looked."
              },
              {
                name: "James Thompson",
                location: "Manchester",
                rating: 5,
                text: "As a corporate event planner, I've worked with many caterers. D'modish stands out for their professionalism, creativity, and consistently excellent quality."
              },
              {
                name: "Amara Okafor",
                location: "Birmingham",
                rating: 5,
                text: "Finally found authentic Nigerian snacks in the UK! The chin chin and puff puff take me right back home. D'modish is now my go-to for all celebrations."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#E1BF5E]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}, UK</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 bg-white px-8 py-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1F1D63] mb-1">1000+</p>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1F1D63] mb-1">500+</p>
                <p className="text-gray-600 text-sm">Events Catered</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1F1D63] mb-1">5★</p>
                <p className="text-gray-600 text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the D'modish Difference?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Let's create something extraordinary together for your next celebration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink 
                  to="/menu"
                  className="inline-block bg-[#E1BF5E] text-[#1F1D63] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#d4a838] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Explore Our Menu
                </NavLink>
                <a 
                  href="https://wa.link/fcqc2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
              <p className="text-white/60 mt-8">
                Or view our <NavLink to="/gallery" className="text-[#E1BF5E] hover:underline">portfolio gallery</NavLink> for inspiration
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
