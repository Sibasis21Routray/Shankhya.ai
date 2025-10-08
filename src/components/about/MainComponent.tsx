import React from "react";
import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";

const WhatWeDoCard: React.FC<{}> = () => {
  return (
    <div>
      <BentoGrid />
    </div>
  );
};

const MainComponent: React.FC = () => (
  <div className="bg-white min-h-screen">
    {/* About Us Section */}
    <section className="bg-white py-10 md:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-1 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center order-2 md:order-1"
        >
          <img
            src="/about/computer.jpeg"
            alt="computer"
            className="w-full max-w-md md:max-w-full max-h-[50vh] md:max-h-[80vh] rounded-lg shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          className="md:text-center ml-8 text-center order-1 md:order-2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-light text-gray-900 mb-6 md:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            OUR <span className="font-semibold text-gray-700">STORY</span>
          </motion.h1>

          <p className="text-gray-600 mb-6 md:mb-8  md:text-lg leading-relaxed px-4 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col gap-4 mb-8 justify-center">
            <span
              className="bg-blue-100 text-blue-900 py-10 px-[50px] text-sm font-medium shadow-lg "
              style={{
                clipPath:
                  "polygon(10% 10%, 90% 0%, 100% 60%, 80% 90%, 20% 100%, 0% 50%)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ipsum sit iusto, quia consequuntur minima repellat error
              doloremque libero autem illo inventore possimus velit magnam.
            </span>
            <span
              className="bg-blue-100 text-blue-900 py-14 px-[50px]  text-sm font-medium shadow-lg"
              style={{
                clipPath:
                  "polygon(0% 20%, 85% 0%, 100% 40%, 90% 100%, 10% 90%, 0% 60%)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quas saepe dicta tenetur totam iste atque quos
              ducimus molestias.
            </span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* What We Do Section */}
    <section className="flex flex-col lg:flex-row justify-between py-8 md:py-10 px-4 gap-8 md:gap-0">
      <div className="w-full lg:w-1/2 mx-auto text-center lg:mt-[15vh] order-1 lg:order-1">
        <motion.h1
          className="text-4xl md:text-7xl font-light text-gray-900 mb-6 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          WHAT <span className="font-semibold text-gray-700">WE DO</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-xl  mx-auto mb-8 md:mb-12 text-left md:text-lg leading-relaxed px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </motion.p>
      </div>

      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div>
          <WhatWeDoCard />
        </div>
      </div>
    </section>
  </div>
);

export default MainComponent;
