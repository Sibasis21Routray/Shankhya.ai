import { motion } from "framer-motion";
import { Target, Eye, Rocket, Users } from "lucide-react";

const Mission = () => {
  const missionData = {
    vision: {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description:
        "To revolutionize the blockchain gaming industry by creating seamless, transparent, and engaging experiences that bridge the gap between traditional gaming and Web3 technology.",
    },
    mission: {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "Empower gaming platforms with cutting-edge blockchain solutions that ensure fairness, security, and real-time transactions while providing players with unprecedented ownership and control over their digital assets.",
    },
    approach: {
      icon: <Rocket className="w-8 h-8" />,
      title: "Our Approach",
      description:
        "Leveraging advanced AI and blockchain technology to create dynamic gaming ecosystems where every transaction is secure, every bonus is transparent, and every player experience is exceptional.",
    },
    values: {
      icon: <Users className="w-8 h-8" />,
      title: "Our Values",
      description:
        "Innovation, transparency, and user-centric design drive everything we do. We believe in building trust through technology and creating value for both platform operators and players alike.",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative mt-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#034778_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
       
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#034778] to-[#021f67] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Purpose & Mission
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#034778] to-[#021f67] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-5xl mx-auto leading-tight "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            At Shankhya AI, we're not just building technology - we're shaping
            the future of gaming through innovative blockchain solutions that
            prioritize security, transparency, and unparalleled user
            experiences.
          </motion.p>
        </motion.div>

        {/* box */}
        <div className=" flex flex-col lg:flex-row mb-10">
          {/* image */}
          <div>
            <img
              src="https://img.freepik.com/premium-photo/green-arrow-with-mission-word_698953-2889.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Mission Image"
              className="mx-auto mb-12 rounded-xl  w-full max-w-4xl"
            />
          </div>
          {/* Mission Grid */}
          <div className="w-full  lg:w-4/5">
            <motion.div
              className="  space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Mission Card */}
              <motion.div
                className="group relative  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-fit flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#034778] to-[#021f67] opacity-0 group-hover:opacity-3 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#034778] to-[#021f67] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Target className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-[#034778] mb-2 group-hover:text-[#021f67] transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      {missionData.mission.title}
                    </motion.h3>
                  </div>
                </div>

                <motion.p
                  className="text-gray-600 leading-relaxed text-sm  overflow-hidden   "
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {missionData.mission.description}
                </motion.p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-fit flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#034778] to-[#021f67] opacity-0 group-hover:opacity-3 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#034778] to-[#021f67] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Eye className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-[#034778] mb-2 group-hover:text-[#021f67] transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      {missionData.vision.title}
                    </motion.h3>
                  </div>
                </div>

                <motion.p
                  className="text-gray-600 leading-relaxed text-sm flex-1 overflow-hidden"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {missionData.vision.description}
                </motion.p>
              </motion.div>

              {/* Approach Card */}
              <motion.div
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-fit flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#034778] to-[#021f67] opacity-0 group-hover:opacity-3 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#034778] to-[#021f67] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Rocket className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-[#034778] mb-2 group-hover:text-[#021f67] transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      {missionData.approach.title}
                    </motion.h3>
                  </div>
                </div>

                <motion.p
                  className="text-gray-600 leading-relaxed text-sm flex-1 overflow-hidden"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {missionData.approach.description}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
