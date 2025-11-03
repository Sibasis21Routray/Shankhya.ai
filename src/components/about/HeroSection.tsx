import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white  overflow-hidden">
      {/*  Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 mt-12 ">
        <div className=" ">
          {/*  Header */}
          <motion.div
            className="text-center mb-8 lg:mb-[10vh] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-px bg-blue-600"></div>
              <span className="text-white font-medium tracking-widest text-sm uppercase">
                Our Story
              </span>
              <div className="w-12 h-px bg-blue-600"></div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-light text-zinc-100 mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About <span className="font-semibold">Shankhya.AI</span>
            </motion.h1>

            <motion.div
              className="w-24 h-0.5 bg-gradient-to-r from-white to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>

          {/*  Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start   m-0 md:m-[5vw]">
            {/* Left Column  */}
            <motion.div
              className="space-y-8 "
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-8 ">
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed font-light border-l-4 border-blue-200 mr-5 pl-6 py-1 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Shankhya.ai Software Solutions Private Limited is a software
                  product developing company where we endeavor on highly
                  proficient, propitious, and cost-effective software products.
                  Shankhya.ai have highly skilled personnel's offering software
                  products using the best innovative minds, skills and using
                  cutting-edge technologies.
                </motion.p>
              </div>

              {/*  Stats */}
              <motion.div
                className="grid grid-cols-2 gap-8 pt-2 mt-2 border-t border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { number: "10+", label: "Happy Clients" },
                  { number: "15+", label: "Projects Completed" },
                  // { number: "30+", label: "Happy Clients" },
                  // { number: "5+", label: "Awards Won" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                    <div className="w-8 h-0.5 bg-blue-600 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column  */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative group">
                {/* Main Image Container */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/about/hero.jpg"
                    alt="Modern architectural design"
                    className="w-full h-full lg:h-[50vh] object-fill transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
