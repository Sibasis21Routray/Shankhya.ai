
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiSpring,
  SiUnity,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiEthereum,
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiDocker,
  SiRedis,
  SiGraphql,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      name: "React",
      category: "Frontend",
      icon: <SiReact className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: <SiNextdotjs className="w-6 h-6" />,
      color: "text-gray-800",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <SiTypescript className="w-6 h-6" />,
      color: "text-blue-600",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <SiNodedotjs className="w-6 h-6" />,
      color: "text-green-600",
    },
    {
      name: "Python",
      category: "Backend",
      icon: <SiPython className="w-6 h-6" />,
      color: "text-yellow-600",
    },
    {
      name: "Go",
      category: "Backend",
      icon: <SiGo className="w-6 h-6" />,
      color: "text-cyan-600",
    },
    {
      name: "Java",
      category: "Backend",
      icon: <FaJava className="w-6 h-6" />,
      color: "text-red-600",
    },
    {
      name: "Spring Boot",
      category: "Backend",
      icon: <SiSpring className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      name: "Unity",
      category: "Game Dev",
      icon: <SiUnity className="w-6 h-6" />,
      color: "text-gray-700",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <SiMongodb className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: <SiPostgresql className="w-6 h-6" />,
      color: "text-blue-700",
    },
    {
      name: "Redis",
      category: "Database",
      icon: <SiRedis className="w-6 h-6" />,
      color: "text-red-500",
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: <FaAws className="w-6 h-6" />,
      color: "text-orange-500",
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: <SiDocker className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      name: "Kubernetes",
      category: "DevOps",
      icon: <SiKubernetes className="w-6 h-6" />,
      color: "text-blue-600",
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: <SiFlutter className="w-6 h-6" />,
      color: "text-blue-400",
    },
    {
      name: "GraphQL",
      category: "API",
      icon: <SiGraphql className="w-6 h-6" />,
      color: "text-pink-600",
    },
    {
      name: "TensorFlow",
      category: "AI/ML",
      icon: <SiTensorflow className="w-6 h-6" />,
      color: "text-orange-500",
    },
    {
      name: "PyTorch",
      category: "AI/ML",
      icon: <SiPytorch className="w-6 h-6" />,
      color: "text-red-500",
    },
    {
      name: "Ethereum",
      category: "Blockchain",
      icon: <SiEthereum className="w-6 h-6" />,
      color: "text-gray-700",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden ">
      <section
        className="py-8 bg-gradient-to-br from-slate-50 to-blue-50 pb-20"
        ref={ref}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              className="text-4xl md:text-7xl font-light text-gray-900 mb-6 md:mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              OUR{" "}
              <span className="font-semibold text-gray-700">TECH STACK</span>
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to build robust, scalable,
              and innovative solutions
            </p>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    className={`mb-4 p-3 rounded-2xl bg-gray-50 group-hover:bg-white ${tech.color} transform group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {tech.name}
                  </h3>

                  {/* Category */}
                  <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">
                    {tech.category}
                  </span>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
