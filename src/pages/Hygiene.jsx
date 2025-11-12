import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCheckCircle, FaCertificate, FaTemperatureLow, FaUserMd, FaLeaf, FaTruck, FaHandsWash, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { GiChemicalDrop, GiCookingPot, GiHealthNormal } from 'react-icons/gi';
import { MdVerified, MdCleanHands, MdLocalShipping, MdSanitizer } from 'react-icons/md';
import { IoShieldCheckmark, IoDocumentText, IoSparkles } from 'react-icons/io5';
import { BiHealth } from 'react-icons/bi';

const Hygiene = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1BF5E] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#E1BF5E] rounded-full mb-8">
              <FaShieldAlt className="text-5xl text-white" />
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              At D'modish, we maintain the highest standards of food safety, hygiene, and quality control. Your trust means everything to us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <MdVerified className="text-[#E1BF5E] text-2xl" />
                <span className="font-semibold">UK Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <FaCertificate className="text-[#E1BF5E] text-2xl" />
                <span className="font-semibold">Food Safety Level 3</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <IoShieldCheckmark className="text-[#E1BF5E] text-2xl" />
                <span className="font-semibold">5-Star Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Hygiene Standards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Commitment
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Exceptional Hygiene Standards
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We go above and beyond regulatory requirements to ensure every product meets the highest safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-4">
                <MdVerified className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">UK Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Full compliance with UK Food Safety Act 1990, Food Hygiene Regulations 2013, and Food Standards Agency guidelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-4">
                <FaCertificate className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Certified Team</h3>
              <p className="text-gray-600 leading-relaxed">
                All staff hold Food Safety Level 2 or higher certifications with regular training updates and competency assessments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-4">
                <IoShieldCheckmark className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">5-Star Rating</h3>
              <p className="text-gray-600 leading-relaxed">
                Awarded 5-star food hygiene rating by local authorities, demonstrating our commitment to excellence in food safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-4">
                <IoDocumentText className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive HACCP plans, risk assessments, and detailed record-keeping for full traceability of all processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-4">
                <BiHealth className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Regular Inspections</h3>
              <p className="text-gray-600 leading-relaxed">
                Voluntary internal audits and scheduled health inspections ensure continuous compliance and improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-2xl flex items-center justify-center mb-4">
                <GiHealthNormal className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Insurance Coverage</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive public liability and product liability insurance providing complete peace of mind for our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kitchen & Facility Standards */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Our Facility
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Professional Kitchen Standards
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our state-of-the-art commercial kitchen is designed and maintained to exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1BF5E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GiCookingPot className="text-2xl text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Commercial-Grade Equipment</h3>
                    <p className="text-gray-600">
                      Professional ovens, mixers, refrigeration units, and prep stations that meet commercial kitchen standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1BF5E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdSanitizer className="text-2xl text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Rigorous Cleaning Protocols</h3>
                    <p className="text-gray-600">
                      Daily deep cleaning schedules with food-safe sanitizers. All surfaces, equipment, and utensils sanitized between uses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1BF5E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaTemperatureLow className="text-2xl text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Temperature Control</h3>
                    <p className="text-gray-600">
                      Digital temperature monitoring with automated alerts. Regular calibration of all thermometers and temperature logs maintained.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1BF5E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GiChemicalDrop className="text-2xl text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Pest Control Management</h3>
                    <p className="text-gray-600">
                      Professional pest control contract with monthly inspections. Proactive measures and sealed facility design.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1BF5E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IoSparkles className="text-2xl text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Separate Prep Zones</h3>
                    <p className="text-gray-600">
                      Designated areas for different food types (raw/cooked, allergen-free) to prevent cross-contamination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#E1BF5E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1BF5E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-2xl text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1D63] mb-2">Proper Ventilation</h3>
                    <p className="text-gray-600">
                      Commercial extraction and ventilation systems maintaining optimal air quality and temperature control.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Handling & Preparation */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#E1BF5E]/10 to-[#1F1D63]/5 rounded-3xl flex items-center justify-center border-2 border-dashed border-[#1F1D63]/20">
                  <div className="text-center text-[#1F1D63] opacity-40">
                    <FaHandsWash className="text-6xl mx-auto mb-4" />
                    <p className="text-lg font-medium">Food Handling Excellence</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E1BF5E] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1F1D63] rounded-full opacity-20 blur-3xl"></div>
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
                Safe Practices
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
                Expert Food Handling & Preparation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team follows strict protocols to ensure every product is prepared with maximum safety and care.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#E1BF5E] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-1">Certified Staff Training</h4>
                    <p className="text-gray-600 text-sm">
                      All team members complete Food Safety Level 2+ certification with annual refresher courses on hygiene, allergens, and contamination prevention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#E1BF5E] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-1">Strict Handwashing Protocols</h4>
                    <p className="text-gray-600 text-sm">
                      Mandatory 20-second handwashing with antibacterial soap before entering kitchen, between tasks, and after any contamination risk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#E1BF5E] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-1">Cross-Contamination Prevention</h4>
                    <p className="text-gray-600 text-sm">
                      Color-coded chopping boards, separate utensils for different food groups, and dedicated allergen-free preparation zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#E1BF5E] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-1">Protective Equipment</h4>
                    <p className="text-gray-600 text-sm">
                      Food-grade disposable gloves, hairnets, aprons, and protective clothing worn at all times. Gloves changed frequently throughout service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#E1BF5E] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-1">Health Monitoring</h4>
                    <p className="text-gray-600 text-sm">
                      Daily health checks for all staff. Anyone showing signs of illness is immediately excluded from food preparation areas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredient Sourcing & Quality */}
      <section className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Quality First
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Ingredient Sourcing
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              We select only the finest ingredients from trusted, vetted suppliers who share our commitment to quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaLeaf className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Fresh & Premium Selection</h3>
                  <p className="text-white/80 leading-relaxed">
                    Daily deliveries of fresh ingredients. We prioritize organic, locally-sourced produce whenever possible and use only premium butter, flour, and eggs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MdVerified className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Supplier Vetting Process</h3>
                  <p className="text-white/80 leading-relaxed">
                    All suppliers undergo rigorous vetting including food safety compliance checks, quality audits, and traceability verification.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaTemperatureLow className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">FIFO Storage System</h3>
                  <p className="text-white/80 leading-relaxed">
                    First In, First Out rotation ensures optimal freshness. All ingredients labeled with receive dates and use-by dates, strictly monitored.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Allergen Management</h3>
                  <p className="text-white/80 leading-relaxed">
                    Comprehensive allergen matrix for all ingredients. Separate storage for allergen-containing items with clear labeling and tracking systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health & Safety Certifications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Verified & Certified
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Certifications & Accreditations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E] text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1D63] mb-2">Food Safety Level 3</h3>
              <p className="text-gray-600 text-sm">
                Advanced food hygiene certification
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E] text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center mx-auto mb-4">
                <IoShieldCheckmark className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1D63] mb-2">5-Star Hygiene Rating</h3>
              <p className="text-gray-600 text-sm">
                Local authority food hygiene rating
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E] text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserMd className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1D63] mb-2">HACCP Certified</h3>
              <p className="text-gray-600 text-sm">
                Hazard Analysis Critical Control Points
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E] text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#E1BF5E] to-[#d4a838] rounded-full flex items-center justify-center mx-auto mb-4">
                <GiHealthNormal className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1F1D63] mb-2">Public Liability Insurance</h3>
              <p className="text-gray-600 text-sm">
                £5M coverage for complete protection
              </p>
            </motion.div>
          </div>

          {/* Inspection Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white p-8 md:p-12 rounded-3xl"
          >
            <div className="text-center mb-8">
              <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-4">Latest Health Inspection</h3>
              <p className="text-white/80 text-lg">
                Our most recent inspection results demonstrate our unwavering commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#E1BF5E] mb-2">100%</div>
                <p className="text-white/80">Hygiene of Food Handling</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#E1BF5E] mb-2">100%</div>
                <p className="text-white/80">Cleanliness & Maintenance</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#E1BF5E] mb-2">100%</div>
                <p className="text-white/80">Management of Food Safety</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-white/60 text-sm">Last inspected: October 2025 | Next scheduled: April 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Allergen Information */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Allergy Awareness
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Allergen Information & Management
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Your safety is paramount. We take allergen management seriously and provide clear, accurate information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Allergen List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1F1D63] mb-6">Common Allergens in Our Products</h3>
              <p className="text-gray-600 mb-6">
                Our products may contain or come into contact with the following allergens:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Gluten (Wheat)',
                  'Eggs',
                  'Milk & Dairy',
                  'Nuts (Tree Nuts)',
                  'Peanuts',
                  'Soya',
                  'Sesame',
                  'Sulphites'
                ].map((allergen, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-[#f5f5f5] p-3 rounded-xl"
                  >
                    <FaCheckCircle className="text-[#E1BF5E] flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{allergen}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                <p className="text-sm text-amber-900">
                  <strong>Important:</strong> Due to the nature of our kitchen, we cannot guarantee any product is 100% allergen-free. Cross-contamination may occur.
                </p>
              </div>
            </motion.div>

            {/* Allergen Protocols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1F1D63] mb-6">How We Communicate Allergen Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IoDocumentText className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Detailed Product Labels</h4>
                    <p className="text-gray-600 text-sm">
                      Every product includes a comprehensive ingredient list with allergens clearly highlighted in bold.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdCleanHands className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Allergen-Free Preparation</h4>
                    <p className="text-gray-600 text-sm">
                      Separate prep areas and dedicated utensils available for allergen-free orders upon request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Open Communication</h4>
                    <p className="text-gray-600 text-sm">
                      Contact us before ordering to discuss specific dietary restrictions or allergy concerns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLeaf className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Dietary Accommodations</h4>
                    <p className="text-gray-600 text-sm">
                      We offer vegan, gluten-free, dairy-free, and nut-free options. Please specify when ordering.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E1BF5E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdVerified className="text-[#E1BF5E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D63] mb-2">Staff Training</h4>
                    <p className="text-gray-600 text-sm">
                      All team members trained in allergen awareness and emergency procedures for allergic reactions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery & Packaging Safety */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[2px] text-[#E1BF5E] uppercase mb-4">
              Safe Delivery
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
              Packaging & Transportation Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-2xl border-2 border-[#E1BF5E]/20 hover:border-[#E1BF5E] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E1BF5E] rounded-xl flex items-center justify-center mb-4">
                <IoSparkles className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Food-Grade Packaging</h3>
              <p className="text-gray-600">
                FDA-approved food-safe boxes, bags, and containers. Sealed to prevent contamination during transport.
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
                <FaTruck className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Clean Transportation</h3>
              <p className="text-gray-600">
                Dedicated delivery vehicles cleaned and sanitized daily. Food transported in secure, hygienic compartments.
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
                <FaTemperatureLow className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Temperature Control</h3>
              <p className="text-gray-600">
                Insulated containers and cool packs for temperature-sensitive items. Delivery time optimized for freshness.
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
                <MdLocalShipping className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F1D63] mb-3">Contactless Options</h3>
              <p className="text-gray-600">
                Contactless delivery available upon request. Safe drop-off with photo confirmation and notification.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Assurance */}
      <section className="bg-gradient-to-br from-[#f5f5f5] to-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1F1D63] to-[#16143f] text-white p-8 md:p-12 lg:p-16 rounded-3xl text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E1BF5E] rounded-full mb-6">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                At D'modish FingerFoods and Bakes Ltd, food safety is not just a requirement—it's a core value. We are committed to complete transparency in our practices and continuous improvement of our hygiene standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Transparency</h4>
                  <p className="text-white/80 text-sm">
                    Open about all our processes, ingredients, and practices
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Accountability</h4>
                  <p className="text-white/80 text-sm">
                    Taking full responsibility for every product we create
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Continuous Improvement</h4>
                  <p className="text-white/80 text-sm">
                    Always learning and enhancing our safety standards
                  </p>
                </div>
              </div>
              <p className="text-white/80">
                We welcome questions about our hygiene practices. Your trust is earned through our actions, and we're proud to demonstrate our commitment every single day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1F1D63] mb-6">
                Have Questions About Our Safety Standards?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                We're here to answer any questions you have about our hygiene practices, allergen information, or food safety protocols.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <NavLink 
                  to="/order"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F1D63] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#16143f] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <FaPhoneAlt />
                  Contact Us
                </NavLink>
                <NavLink 
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1F1D63] text-[#1F1D63] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#f5f5f5] transition-all duration-300"
                >
                  View Our Menu
                </NavLink>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <a
                  href="tel:+447123456789"
                  className="flex items-center gap-4 bg-[#f5f5f5] p-6 rounded-2xl hover:bg-gray-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#E1BF5E] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-xl text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-1">Call Us Directly</p>
                    <p className="font-bold text-[#1F1D63] text-lg">+44 712 345 6789</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@dmodishcakes.com"
                  className="flex items-center gap-4 bg-[#f5f5f5] p-6 rounded-2xl hover:bg-gray-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#E1BF5E] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-1">Email Us</p>
                    <p className="font-bold text-[#1F1D63] text-lg">hello@dmodishcakes.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hygiene;
