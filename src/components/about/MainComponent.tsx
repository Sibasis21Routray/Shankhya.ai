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
  <div className="bg-white  ">
    

    {/* What We Do Section */}
    <section className="flex flex-col lg:flex-row justify-between mt-10 md:mt-0 px-4 gap-8 md:gap-0 m-0 lg:m-8">
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <div>
          <WhatWeDoCard />
        </div>
      </div>

      <div className="w-full lg:w-1/2 mx-auto text-center lg:mt-[15vh] order-1 lg:order-2">
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
          Shankhya.Ai is a software product developing company where we endeavor
          on highly proficient, propitious and cost-effective software products.
          Shankhya have highly skilled personnel's offering software products
          using the best innovative minds, skills & using cutting-edge
          technologies.
        </motion.p>
      </div>
    </section>
  </div>
);

export default MainComponent;
