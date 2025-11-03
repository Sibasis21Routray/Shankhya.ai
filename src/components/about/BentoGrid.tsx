import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaTools,
  FaChartLine,
  FaCreativeCommonsRemix,
} from "react-icons/fa";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "tall" | "normal";
  index: number;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  variant = "normal",
  index,
}) => {
  const getCardDimensions = () => {
    switch (index) {
      case 0:
        return "col-span-1 md:col-span-2 row-span-1";
      case 1:
        return "col-span-1 md:col-span-2 row-span-1";
      case 2:
        return "col-span-1 md:col-span-2 row-span-1";
      case 3:
        return "col-span-1 md:col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getAnimationDelay = () => index * 0.1;

  return (
    <motion.div
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-1 ${getCardDimensions()}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: getAnimationDelay(),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="h-full flex flex-col p-3 rounded-2xl border border-blue-600/30 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600">
        {/* Icon */}
        <motion.div>
          <motion.div
            className="text-2xl text-white relative z-10 flex justify-center m-3"
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.h3
          className="text-xl font-bold text-white    mb-3 text-center  transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: getAnimationDelay() + 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className={`text-white leading-relaxed text-center  transition-colors duration-300 flex-1 ${
            variant === "tall" ? "text-sm" : "text-xs"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: getAnimationDelay() + 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section className="py-1 px-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <Card
          icon={<FaLightbulb />}
          title="Creative Excellence"
          description="We combine art and technology to produce visually stunning and highly functional designs."
          variant="normal"
          index={0}
        />
        <Card
          icon={<FaCreativeCommonsRemix />}
          title="Experienced Professionals"
          description="Our team brings years of industry experience, ensuring every project meets the highest standards."
          variant="normal"
          index={1}
        />
        <Card
          icon={<FaTools />}
          title="Toilored Solutions"
          description="Every client is unique,and so are our designs.We adapt to your vision and goals."
          variant="normal"
          index={2}
        />
        <Card
          icon={<FaChartLine />}
          title="Ennovative Approach"
          description="At Shankhya.Ai, we ware always exploring the latest trends and technologies to keep our designs fresh and relevant."
          variant="tall"
          index={3}
        />
      </div>
    </section>
  );
};

export default BentoGrid;
