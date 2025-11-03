import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {
  ArrowRight,
  Blocks,
  Brain,
  CheckCircle,
  Cpu,
  GamepadIcon,
  Server,
  Smartphone,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";


// Enhanced images for each service
const serviceImages = {
  ai: [
    "/hero/service/ai1.jpeg",
    "/hero/service/ai2.jpg",
    "/hero/service/ai3.webp",
  ],
  blockchain: [
    "/hero/service/blockchain1.webp",
    "/hero/service/blockchain2.jpg",
    "/hero/service/blockchain3.avif",
  ],
  game: [
    "/hero/service/game1.jpg",
    "/hero/service/game2.jpg",
    "/hero/service/game3.jpg",
  ],
  cloud: [
    "/hero/service/cloud1.jpeg",
    "/hero/service/cloud2.jpg",
    "/hero/service/cloud3.jpg",
  ],
  mobile: [
    "/hero/service/mobile.jpeg",
    "/hero/service/mobile2.jpg",
    "/hero/service/mobile3.jpg",
  ],
  quantum: [
    "/hero/service/quantum2.jpg",
    "/hero/service/quantum3.jpg",
    "/hero/service/quantum4.jpg",
  ],
};

// Define the prop type
interface ServiceProps {
  initialTab?: string;
}

const Service: React.FC<ServiceProps> = ({ initialTab = "ai" }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState(initialTab);
  const [autoPlay] = useState(true);

  const services = [
    {
      value: "ai",
      title: "Artificial Intelligence",
      icon: <Brain className="h-5 w-5" />,
      description:
        "Transform your business with cutting-edge AI solutions including machine learning, deep learning, and natural language processing.",
      features: [
        "Predictive Analytics",
        "Computer Vision",
        "NLP Solutions",
        "AI Consulting",
      ],
      stats: "95% Accuracy",
    },
    {
      value: "blockchain",
      title: "Blockchain Development",
      icon: <Blocks className="h-5 w-5" />,
      description:
        "Secure, scalable blockchain solutions with transparent and immutable systems for various industries.",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "NFT Platforms",
        "Blockchain Consulting",
      ],
      stats: "100% Secure",
    },
    {
      value: "game",
      title: "Game Development",
      icon: <GamepadIcon className="h-5 w-5" />,
      description:
        "Create engaging and immersive gaming experiences across platforms with cutting-edge graphics.",
      features: [
        "Unity Development",
        "Mobile Games",
        "AR/VR Games",
        "Game Design",
      ],
      stats: "50M+ Users",
    },
    {
      value: "cloud",
      title: "Cloud Solutions",
      icon: <Server className="h-5 w-5" />,
      description:
        "Scalable cloud infrastructure and solutions to optimize performance and reduce operational costs.",
      features: ["Cloud Migration", "DevOps", "Serverless", "Cloud Security"],
      stats: "99.9% Uptime",
    },
    {
      value: "mobile",
      title: "Mobile Development",
      icon: <Smartphone className="h-5 w-5" />,
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Flutter Apps",
        "React Native",
      ],
      stats: "4.8★ Rating",
    },
    {
      value: "quantum",
      title: "Quantum Computing",
      icon: <Cpu className="h-5 w-5" />,
      description:
        "Next-generation quantum computing solutions to solve complex problems beyond classical limits.",
      features: [
        "Quantum Algorithms",
        "Quantum Security",
        "Quantum ML",
        "Consulting",
      ],
      stats: "10x Faster",
    },
  ];

  // Update currentTab when initialTab prop changes
  
  useEffect(() => {
    const handleServiceTabChange = (event: CustomEvent) => {
      const { tab } = event.detail;
      console.log("Service tab change received:", tab);
      setCurrentTab(tab);
      setCurrentImageIndex(0);
    };

    // Add event listener for custom event
    window.addEventListener(
      "serviceTabChange",
      handleServiceTabChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "serviceTabChange",
        handleServiceTabChange as EventListener
      );
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, currentTab]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev + 1) %
        serviceImages[currentTab as keyof typeof serviceImages].length
    );
  };


  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    setCurrentImageIndex(0);
  };

  return (
    <div className="relative overflow-hidden ">
      <section id="services" className=" relative" ref={ref}>
        <div className="container mx-auto px-4 relative z-10">
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
              Our Services
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
              We deliver innovative software solutions that drive digital
              transformation.
            </motion.p>
          </motion.div>

          <Tabs value={currentTab} onValueChange={handleTabChange}>
            <div className=" mx-auto">
              {/* Compact Tab List */}
              <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.value}
                    value={service.value}
                    className="group relative px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-blue-200 data-[state=active]:shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {service.icon}
                      </motion.div>
                      {service.title.split(" ")[0]}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <AnimatePresence mode="wait">
                {services.map((tab) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="mt-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="border border-gray-200 shadow-sm">
                        <CardContent className="p-0">
                          <div className="grid lg:grid-cols-2 gap-4">
                            {/* Compact Image Slider */}
                            <div className="relative group p-4">
                              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                <AnimatePresence mode="wait">
                                  <motion.img
                                    key={currentImageIndex}
                                    src={
                                      serviceImages[
                                        tab.value as keyof typeof serviceImages
                                      ][currentImageIndex]
                                    }
                                    alt={tab.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                  />
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                {/* <button
                                  onClick={prevImage}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 text-gray-700 p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 text-gray-700 p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button> */}

                                {/* Image Indicators */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                  {serviceImages[
                                    tab.value as keyof typeof serviceImages
                                  ].map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() =>
                                        setCurrentImageIndex(index)
                                      }
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentImageIndex
                                          ? "bg-blue-600 w-6 shadow-sm"
                                          : "bg-gray-400 hover:bg-gray-500"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Compact Content Section */}
                            <div className="flex flex-col justify-center p-4">
                              <div className="space-y-4">
                                {/* Header */}
                                <motion.div
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                      {tab.title}
                                    </h3>
                                    <div className="w-20 h-1 bg-blue-700 rounded-full" />
                                  </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                  className="text-md text-gray-600 leading-relaxed"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                  {tab.description}
                                </motion.p>

                                {/* Features Grid */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                  {/* Core Features */}
                                  <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                  >
                                    <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-2 ">
                                      <CheckCircle className="h-4 w-4 text-blue-500 " />
                                      Core Features
                                    </h4>
                                    <div className="space-y-2">
                                      {tab.features.map((feature, index) => (
                                        <motion.div
                                          key={feature}
                                          className="flex items-center gap-2"
                                          initial={{ opacity: 0, y: 5 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                          }}
                                        >
                                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                          <span className="text-gray-700 text-sm font-medium">
                                            {feature}
                                          </span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>

                                  {/* Why Choose Us */}
                                  <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                  >
                                    <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                                      <Shield className="h-4 w-4 text-blue-500" />
                                      Why Choose Us
                                    </h4>
                                    <div className="space-y-2">
                                      {[
                                        "10+ years experience",
                                        "Latest tech stack",
                                        "Agile methodology",
                                        "24/7 support",
                                      ].map((item, index) => (
                                        <motion.div
                                          key={item}
                                          className="flex items-center gap-2"
                                          initial={{ opacity: 0, y: 5 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{
                                            duration: 0.3,
                                            delay: index * 0.05 + 0.2,
                                          }}
                                        >
                                          <ArrowRight className="h-3 w-3 text-blue-500 flex-shrink-0" />
                                          <span className="text-gray-600 text-sm">
                                            {item}
                                          </span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Service;
