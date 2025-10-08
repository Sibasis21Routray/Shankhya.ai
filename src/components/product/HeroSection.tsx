import { motion } from "framer-motion";
import {  Shield, Globe,  User } from "lucide-react";

const HeroSection = () => {

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h1
              className="flex gap-1 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-5"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="text-white">Products</span>
              <br />
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl text-left"
              variants={itemVariants}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              tempora sunt eligendi nobis veritatis corrupti excepturi in
              dolore, incidunt fuga tenetur minus quas blanditiis ipsum
              exercitationem corporis? Ipsum, recusandae doloremque?
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex  space-x-4 justify-around "
              variants={itemVariants}
            >
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  value: "100 %",
                  label: "Secure",
                },
                {
                  icon: <User className="w-6 h-6" />,
                  value: "USER",
                  label: "Friendly UI",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  value: "24/7",
                  label: "Supports",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group   w-full  relative text-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className=" flex items-center z-10 gap-2 flex-col lg:flex-row">
                    <div className="flex justify-center items-center gap-1 mb-1">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="text-md lg:text-2xl  font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {feature.value}
                      </div>
                    </div>
                    <div className="text-sm font-light text-white mb-1">
                      {feature.label}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "75%" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Product Showcase */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Pattern */}
              {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/40 via-cyan-600/15 to-cyan-600/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-10 rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-blue-900/80 rounded-3xl" />
              </div> */}

              {/* Main Card */}
              <motion.div
                className="relative shadow-2xl border border-blue-700/40 p-5 rounded-lg overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
              >
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -translate-y-8 -translate-x-8" />

                {/* Card Header */}
                <div className=" flex flex-row items-center gap-4 mb-3 pb-3 border-b border-white/10">
                  <div className=" flex flex-row items-center gap-2">
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                      Shankhya.AI
                    </h3>
                    <p className="text-gray-300 text-sm font-medium mt-2">
                      Trusted By Industry Leaders
                    </p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="relative space-y-2 mb-8">
                  {[
                    {
                      user: "Restominder",
                      action:
                        "AI-powered restaurant management with real-time analytics",
                      logo: "/Shankhya.png",
                      status: "Live",
                      category: "Hospitality AI",
                    },
                    {
                      user: "OCRPro",
                      action:
                        "Advanced document processing with multi-language OCR",
                      logo: "/Shankhya.png",
                      status: "Active",
                      category: "Document AI",
                    },
                    {
                      user: "Aartha Pro AI",
                      action:
                        "Blockchain gaming platform with crypto integration",
                      logo: "/ArthaAi.png",
                      status: "Live",
                      category: "Gaming Tech",
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      className="group relative bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 1 }}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Logo Container */}
                        <div className="relative flex-shrink-0">
                          <img
                            src={project.logo}
                            alt={`${project.user} logo`}
                            className="w-12 h-12 object-contain "
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-white font-semibold text-sm group-hover:text-cyan-100 transition-colors">
                                  {project.user}
                                </h4>
                                <span className="text-xs text-blue-300 font-medium bg-blue-500/20 px-2 py-1 rounded-full">
                                  {project.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors text-left">
                            {project.action}
                          </p>
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Footer Stats */}
                <div className="relative flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm font-medium">
                        All products are live
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 font-medium">
                      Powered by
                    </div>
                    <div className="text-sm text-white font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                      Shankhya AI
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
