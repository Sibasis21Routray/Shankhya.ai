import { motion } from "framer-motion";
import {  LuSparkles, LuCpu } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="relative">
      <section
        className="min-h-screen relative flex items-center justify-center py-4 md:py-8 overflow-hidden"
        id="home"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-60">
            <video
              className="w-screen h-full object-fill lg:object-cover  "
              // src="https://videocdn.cdnpk.net/videos/60ecbdbf-94ee-5404-8436-e709b4aeecc9/horizontal/previews/clear/large.mp4?token=exp=1759234246~hmac=028c3c8f92e78f452223f3ab4671834f49dd0421295120d426faac46e840a848"
              autoPlay
              muted
              playsInline
            />
            {/* <img src="https://img.freepik.com/free-vector/blue-grunge-pattern-background_1409-1359.jpg?t=st=1759232968~exp=1759236568~hmac=33365e276d8cd564b1f5f2fbac44a500ad6c0ebad869c95895e12711ca3e3f90&w=2000" /> */}
          </div>

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Animated Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-2xl md:blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-2xl md:blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Binary Rain */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-300/20 font-mono text-xs md:text-sm"
                style={{
                  left: `${10 + i * 8}%`,
                  top: "-20px",
                }}
                animate={{
                  y: ["0vh", "100vh"],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.div>
            ))}
          </div>

          {/* Circuit Lines */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            animate={{
              y: [0, 400, 800],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center justify-between min-h-[60vh] md:min-h-[70vh]">
            {/* Left Section - Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 mt-[10vh] "
            >
              <div className="space-y-4 md:space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2"
                >
                  <LuSparkles className="text-blue-400 text-sm md:text-base" />
                  <span className="text-blue-300 text-xs md:text-sm font-medium">
                    Enterprise AI Solutions
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="flex flex-row text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold leading-tight justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    SHANKHYA
                  </span>
                  <motion.span
                    className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    .AI
                  </motion.span>
                </motion.h1>

                {/* Subheading */}
                <motion.div
                  className="flex items-center gap-3 py-2 md:py-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p className="text-base md:text-xl text-blue-100 font-light leading-relaxed w-full">
                    Transforming Ideas into{" "}
                    <span className="font-semibold text-white">
                      Intelligent
                    </span>{" "}
                    Software Solutions
                  </p>
                </motion.div>

                <p className="text-white text-sm md:text-base leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid quisquam quis nihil excepturi. Quo, ea quod quasi
                  autem quam iste aut! Nulla amet porro obcaecati ipsam rem
                  doloribus, quisquam quo.
                </p>

                {/* Tech Tags */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap gap-2 md:gap-3 justify-center"
                >
                  {["Machine Learning", "Deep Learning"].map((tag) => (
                    <motion.div
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 md:px-4 md:py-2 "
                    >
                      <span className="text-blue-200 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
                        <LuCpu className="text-blue-400" size={12} />
                        {tag}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Section - Animated Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center items-center mt-8 lg:mt-0"
            >
              <div className="flex justify-center  w-full max-w-md lg:max-w-none">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl md:blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src="/hero/bot2.png"
                  className="h-fit lg:h-[80vh] mt-0 lg:mt-[15vh] ml-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
