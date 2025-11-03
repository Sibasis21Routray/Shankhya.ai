import { motion } from "framer-motion";

import {
  Shield,
  Zap,
  ArrowRight,
  SquareCheckBig,
  Hotel,
  CreditCard,
  Globe,
  MapPin,
  Workflow,
  Gamepad,
  Coins,
} from "lucide-react";
import { UtensilsCrossed, Clock, TrendingUp, Server } from "lucide-react";

const Products = () => {
  //scroll animation

  const productsData = [
    {
      slug: "arthaProAi",
      name: "Artha Pro AI",
      theme: "blue",
      productHeadingSection: {
        name: "Artha Pro AI",
        navIcon: "/Shankhya.ai2.png",
        productUrl: "https://games.arthapro.ai/",
        heading: "Play. Win. Earn. On the Blockchain.",
        subheading: "One Crypto Arcade. Endless Games. Real Rewards.",
        description:
          "Artha Pro AI is a next-gen crypto gaming platform offering fast-paced games like Aviator, Minesweeper, and Plinko. Deposit, play, win tokens, and withdraw — all with transparent on-chain fairness and full control through the back office dashboard.",
      },
      featureSection: {
        heading: "Everything You Need to Run a Web3 Arcade",
        description:
          "From wallet integration to game economy management, Artha Pro AI is your all-in-one crypto gaming solution built for performance, fairness, and scale.",
        features: [
          {
            title: "Multi-Game Engine",
            description:
              "Support for multiple game types like Aviator, Minesweeper, and Plinko with shared wallet & token systems.",
          },
          {
            title: "Native Token Deposit",
            description:
              "Players can deposit native blockchain tokens (e.g., ETH, MATIC) which are auto-converted into in-game tokens.",
          },
          {
            title: "Bonus System",
            description:
              "Offer bonuses, free plays based rewards to increase engagement and retention.",
          },
          {
            title: "On-Chain Fairness",
            description:
              "Every outcome is powered by smart contracts or verifiable randomness to ensure transparency.",
          },
          {
            title: "Crypto Reward Withdrawal",
            description:
              "Players can withdraw their winnings to their wallets after playing — fast, gas-efficient payouts.",
          },
          {
            title: "Back Office Control",
            description:
              "Manage players, set odds, control token supply and adjust bonuses through an intuitive admin dashboard.",
          },
        ],
      },
      productBenefits: {
        keyBenefits: [
          {
            id: 1,
            title: "Multiple Games, One Wallet",
            description:
              "Players use a single wallet to play all games — from Aviator to Plinko — making onboarding smooth and fast.",
          },
          {
            id: 2,
            title: "Tokenized Economy",
            description:
              "Native tokens are converted into in-game credits, enabling real-time economy control and analytics.",
          },
          {
            id: 3,
            title: "Scalable Game Infrastructure",
            description:
              "Microfrontend-based architecture lets you add or remove games without affecting the entire platform.",
          },
          {
            id: 4,
            title: "Secure & Verifiable Gameplay",
            description:
              "Every play session and win logic is secured with cryptographic proofs and can be audited anytime.",
          },
          {
            id: 5,
            title: "Complete Admin Control",
            description:
              "Set bonuses, control multiplier, track transactions, and more with the BO dashboard.",
          },
        ],
      },
      whyChooseSection: {
        stats: [
          {
            icon: <Gamepad className="w-6 h-6" />,
            value: "Multiple Games",
            label: "Play Aviator, Minesweeper, Plinko & more in one place",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            value: "Instant Gameplay",
            label: "Fast, seamless, and lag-free gaming experience",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            value: "On-Chain Fairness",
            label:
              "Every outcome powered by smart contracts and verifiable randomness",
          },
          {
            icon: <Coins className="w-6 h-6" />,
            value: "Crypto Rewards",
            label: "Win and withdraw tokens securely and efficiently",
          },
        ],
      },
    },
    {
      slug: "ocrPro",
      name: "OCR Pro",
      theme: "green",
      productHeadingSection: {
        name: "OCR Pro",
        navIcon: "/ocr-pro-logo.png",
        productUrl: "https://ocrpro.ai/",
        heading: "Scan. Extract. Automate. With AI Precision.",
        subheading: "Advanced OCR with Multi-Language Intelligence.",
        description:
          "OCR Pro leverages cutting-edge AI to extract text from any document with unparalleled accuracy. Support for 50+ languages, real-time processing, and seamless integration.",
      },
      featureSection: {
        heading: "Intelligent Document Processing Suite",
        description:
          "From simple text extraction to complex form understanding, OCR Pro delivers enterprise-grade document intelligence.",
        features: [
          {
            title: "Multi-Language OCR",
            description:
              "Accurate text extraction from 50+ languages including complex scripts and handwritten text.",
          },
          {
            title: "AI-Powered Analysis",
            description:
              "Advanced machine learning models for layout analysis, table recognition, and form understanding.",
          },
          {
            title: "Real-time Processing",
            description:
              "Instant document processing with sub-second response times for high-volume workflows.",
          },
          {
            title: "Batch Processing",
            description:
              "Process thousands of documents simultaneously with automated quality control.",
          },
          {
            title: "API Integration",
            description:
              "RESTful APIs for seamless integration with your existing systems and workflows.",
          },
          {
            title: "Data Export",
            description:
              "Export extracted data in multiple formats including JSON, CSV, and XML.",
          },
        ],
      },
      productBenefits: {
        keyBenefits: [
          {
            id: 1,
            title: "Universal Language Support",
            description:
              "Process documents in any language with industry-leading accuracy and confidence scores.",
          },
          {
            id: 2,
            title: "Scalable Architecture",
            description:
              "Handle from single documents to millions of pages with consistent performance.",
          },
          {
            id: 3,
            title: "Enterprise Security",
            description:
              "End-to-end encryption and compliance with global data protection standards.",
          },
          {
            id: 4,
            title: "Customizable Workflows",
            description:
              "Tailor processing pipelines to match your specific business requirements.",
          },
          {
            id: 5,
            title: "Real-time Analytics",
            description:
              "Monitor processing metrics, accuracy rates, and system performance in real-time.",
          },
        ],
      },
      whyChooseSection: {
        stats: [
          {
            icon: <Zap className="w-6 h-6" />,
            value: "Instant Results",
            label: "Extract text from any document in seconds",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            value: "Multilingual Support",
            label: "Works seamlessly across 50+ global languages",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            value: "Enterprise Security",
            label: "Your documents stay encrypted and private",
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            value: "Easy Integration",
            label: "Plug OCR Pro into your workflow with minimal setup",
          },
        ],
      },
    },
    {
      slug: "restroMinder",
      name: "RestroMinder",
      theme: "deepblue",
      productHeadingSection: {
        name: "RestroMinder",
        navIcon: "/product/allProducts/restro/logo.png",
        productUrl: "https://restrominder.ai/",
        heading: "Smart. Restaurant. Management. Simplified.",
        subheading: "Real-Time Insights. Effortless Operations.",
        description:
          "RestroMinder is an intelligent restaurant management system that streamlines operations, enhances customer service, and provides real-time analytics. From table management to inventory tracking — run your restaurant smarter than ever.",
      },
      featureSection: {
        heading: "Built for Modern Restaurants",
        description:
          "Manage your restaurant with real-time visibility into orders, tables, staff, and inventory — all from one place.",
        features: [
          {
            title: "Table Management",
            description:
              "Easily view, assign, and optimize table occupancy with a dynamic floor plan that updates in real time.",
          },
          {
            title: "Order Processing",
            description:
              "Simplify order taking, reduce errors, and sync directly with the kitchen to ensure faster service.",
          },
          {
            title: "Analytics Dashboard",
            description:
              "Track daily sales, peak hours, and staff performance using real-time data and visual insights.",
          },
          {
            title: "Inventory Control",
            description:
              "Monitor ingredient levels, predict restocking needs, and prevent shortages with smart inventory alerts.",
          },
          {
            title: "Multi-Branch Management",
            description:
              "Operate multiple outlets effortlessly with centralized control over menus, pricing, and reporting.",
          },
          {
            title: "Customer Engagement",
            description:
              "Boost loyalty through personalized recommendations, feedback tracking, and targeted promotions.",
          },
        ],
      },
      productBenefits: {
        keyBenefits: [
          {
            id: 1,
            title: "Real-Time Insights",
            description:
              "Monitor every part of your restaurant — from table occupancy to order flow — in real time.",
          },
          {
            id: 2,
            title: "Optimized Operations",
            description:
              "Reduce manual errors and streamline workflows across kitchen, floor, and billing teams.",
          },
          {
            id: 3,
            title: "Data-Driven Decisions",
            description:
              "Leverage analytics to make informed decisions on staffing, menu optimization, and promotions.",
          },
          {
            id: 4,
            title: "Inventory & Cost Control",
            description:
              "Track ingredients, reduce waste, and maintain consistent profitability across all outlets.",
          },
          {
            id: 5,
            title: "Customer Experience Focused",
            description:
              "Enhance dining experiences with quick service, personalized engagement, and digital convenience.",
          },
        ],
      },
      whyChooseSection: {
        stats: [
          {
            icon: <UtensilsCrossed className="w-6 h-6" />,
            value: "Smart Dining",
            label: "Seamless restaurant operations for smoother service",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            value: "Efficiency",
            label: "Optimize table turnover and reduce waiting times",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            value: "Growth",
            label: "Empower restaurants with actionable insights and analytics",
          },
          {
            icon: <Server className="w-6 h-6" />,
            value: "Reliability",
            label: "Cloud-based performance with consistent uptime",
          },
        ],
      },
    },
    {
      slug: "Alhajz",
      name: "Alhajz",
      theme: "green",
      productHeadingSection: {
        name: "Alhajz",
        navIcon: "/product/allProducts/Alhajz/logo.png",
        productUrl: "https://Alhajz.ai/",
        heading: "Book. Stay. Relax. Effortlessly.",
        subheading: "Smart Hotel Booking for a Seamless Travel Experience.",
        description:
          "Alhajz is a modern hotel booking platform that simplifies travel planning. From luxury resorts to budget stays, it offers real-time room availability, secure payments, and a smooth booking experience — all in one place.",
      },
      featureSection: {
        heading: "Everything You Need for a Seamless Stay",
        description:
          "Alhajz brings technology and hospitality together — from smart recommendations to instant confirmations, helping travelers find the perfect stay in seconds.",
        features: [
          {
            title: "Personalized Recommendations",
            description:
              "Get hotel suggestions based on your travel preferences, destination, and stay type.",
          },
          {
            title: "Instant Booking & Confirmation",
            description:
              "Reserve rooms instantly with live availability and get immediate booking confirmation.",
          },
          {
            title: "Smart Filters & Search",
            description:
              "Easily find hotels by budget, ratings, amenities, and proximity to attractions.",
          },
          {
            title: "Secure Payments",
            description:
              "Supports multiple payment methods with strong encryption and reliable transaction tracking.",
          },
          {
            title: "Dynamic Pricing Engine",
            description:
              "Get the best deals with real-time price updates and seasonal discounts.",
          },
          {
            title: "Booking Management Dashboard",
            description:
              "Manage reservations, cancellations, and payment history from one centralized dashboard.",
          },
        ],
      },
      productBenefits: {
        keyBenefits: [
          {
            id: 1,
            title: "Personalized Experience",
            description:
              "Find stays that match your needs — from luxury escapes to comfortable budget rooms.",
          },
          {
            id: 2,
            title: "Transparent Pricing",
            description:
              "No hidden charges — see taxes, fees, and discounts clearly before checkout.",
          },
          {
            id: 3,
            title: "Multi-Platform Support",
            description:
              "Book from web or mobile with a consistent and secure booking experience.",
          },
          {
            id: 4,
            title: "Global Hotel Network",
            description:
              "Access thousands of hotels, homestays, and resorts across the world on one platform.",
          },
          {
            id: 5,
            title: "Smart Admin Dashboard",
            description:
              "Hotel owners can manage listings, pricing, and availability with ease.",
          },
        ],
      },
      whyChooseSection: {
        stats: [
          {
            icon: <Hotel className="w-6 h-6" />, // represents hotels & stays
            value: "2K+",
            label: "Hotels Listed",
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            value: "50+",
            label: "Cities Served",
          },

          {
            icon: <CreditCard className="w-6 h-6" />, // represents secure payment
            value: "100%",
            label: "Secure Payments",
          },
          {
            icon: <Clock className="w-6 h-6" />, // represents quick booking
            value: "<1min",
            label: "Booking Confirmation",
          },
        ],
      },
    },
  ];

  interface ThemeColors {
    gradient: string;
    light: string;
    bg: string;
    text: string;
    border: string;
    hover: string;
  }

  const getThemeColors = (theme: string): ThemeColors => {
    const themes: Record<string, ThemeColors> = {
      blue: {
        gradient: "from-blue-500 to-cyan-500",
        light: "from-blue-400 to-cyan-400",
        bg: "from-blue-50 to-cyan-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
      },
      green: {
        gradient: "from-green-500 to-emerald-500",
        light: "from-green-400 to-emerald-400",
        bg: "from-green-50 to-emerald-50",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-300",
      },
      deepblue: {
        gradient: "from-blue-900 to-indigo-900",
        light: "from-blue-800 to-indigo-800",
        bg: "from-blue-100 to-indigo-200",
        text: "text-indigo-800",
        border: "border-indigo-700",
        hover: "hover:border-indigo-600",
      },
    };

    return themes[theme] ?? themes.blue; // default to blue if unknown
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
    <div className="min-h-screen bg-white overflow-hidden">
      {productsData.map((productData, productIndex) => {
        const theme = getThemeColors(productData.theme);
        const isEven = productIndex % 2 === 0;

        return (
          <div key={productData.slug}>
            <div
              className={`relative flex flex-col items-center text-4xl lg:text-6xl py-12 text-white font-bold bg-gradient-to-r ${theme.gradient} shadow-2xl rounded-b-3xl border-b-8 border-white/30`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-black/10 rounded-b-3xl"></div>

              {/* Content */}
              <span className="relative z-10 pl-0 drop-shadow-2xl">
                {productData.name}
              </span>
              <span
                className={`relative z-10 mt-6 h-2 w-1/5 bg-white/90 rounded-full shadow-lg`}
              ></span>

              {/* Bottom accent */}
              <div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-${productData.theme}-400 rounded-full blur-sm opacity-60`}
              ></div>
            </div>

            {/* product intro Section  */}
            <section
              className={`relative py-5 flex items-center justify-center overflow-hidden`}
            >
              <div className="absolute inset-0">
                <div
                  className={`absolute top-1/4 left-1/4 w-64 h-64 bg-${productData.theme}-500/10 rounded-full blur-3xl animate-pulse`}
                />
                <div
                  className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-${productData.theme}-500/5 rounded-full blur-3xl animate-pulse delay-1000`}
                />
              </div>

              <div className="relative z-10 max-w-6xl 0 mx-auto px-4 sm:px-6 lg:px-0 ">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row  justify-around  w-screen   ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Text heading */}
                  <motion.div
                    variants={itemVariants}
                    className={`space-y-18 flex justify-center items-start rounded-3xl w-full lg:w-[10vw]  ${
                      isEven ? "" : "lg:col-start-2"
                    }`}
                  >
                    <motion.h1
                      variants={itemVariants}
                      className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight "
                    >
                      <span
                        className={`bg-gradient-to-r ${theme.light} bg-clip-text text-transparent`}
                      >
                        {
                          productData.productHeadingSection.heading.split(
                            "."
                          )[0]
                        }
                        .
                      </span>
                      <br />
                      <span className="text-gray-800">
                        {
                          productData.productHeadingSection.heading.split(
                            "."
                          )[1]
                        }
                        .
                      </span>
                      <br />
                      <span
                        className={`bg-gradient-to-r ${theme.light} bg-clip-text text-transparent`}
                      >
                        {
                          productData.productHeadingSection.heading.split(
                            "."
                          )[2]
                        }
                        .
                      </span>
                    </motion.h1>
                  </motion.div>

                  {/* paragraph */}
                  <motion.div
                    variants={itemVariants}
                    className={`flex justify-center text-left ${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1 "
                    }`}
                  >
                    <div className="relative">
                      <div
                        className={`w-full h-full gap-4 rounded-3xl  flex flex-col items-center justify-center  p-5`}
                      >
                        <motion.p
                          variants={itemVariants}
                          className="text-2xl md:text-3xl text-gray-600 font-light "
                        >
                          {productData.productHeadingSection.subheading}
                        </motion.p>

                        <motion.p
                          variants={itemVariants}
                          className="text-xl text-gray-600 max-w-2xl leading-tight mb-6"
                        >
                          {productData.productHeadingSection.description}
                        </motion.p>

                        <motion.div variants={itemVariants}>
                          <motion.a
                            href={productData.productHeadingSection.productUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${theme.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Product</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </motion.a>
                        </motion.div>
                        {/* <img
                          src={productData.productHeadingSection.navIcon}
                          alt={productData.name}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        /> */}
                      </div>
                      {/* <div
                        className={`absolute -top-4 -right-4 w-24 h-24 bg-${productData.theme}-500/20 rounded-2xl border border-${productData.theme}-500/30 backdrop-blur-sm`}
                      />
                      <div
                        className={`absolute -bottom-4 -left-4 w-20 h-20 bg-${productData.theme}-500/15 rounded-2xl border border-${productData.theme}-500/20 backdrop-blur-sm`}
                      /> */}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {productData.featureSection.heading}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {productData.featureSection.description}
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {productData.featureSection.features.map(
                      (feature, index) => (
                        <motion.div
                          key={index}
                          className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm  transition-all duration-500 overflow-hidden"
                          whileHover={{ y: -6, scale: 1.02 }}
                          variants={itemVariants}
                        >
                          {/* Animated Background Layer */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          />


                          {/* Content */}
                          <div className="relative">
                            <h3
                              className={`text-lg font-bold ${theme.text} mb-3 group-hover:text-gray-800 transition-colors duration-300`}
                            >
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 text-md leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                              {feature.description}
                            </p>
                          </div>

                          {/* Corner Accent */}
                          <div
                            className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${theme.border} rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200`}
                          />

                          {/* Bottom Progress Line */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${theme.gradient}`}
                              initial={{ width: "0%" }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 2, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>

                          {/* Hover Glow Effect */}
                          <div
                            className={`absolute -inset-1 bg-gradient-to-r ${theme.gradient} rounded-2xl opacity-0 group-hover:opacity-5 blur-sm transition-opacity duration-500`}
                          />
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Benefits Section - Zigzag Layout */}
            <section
              className={`py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${theme.bg}`}
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-8 items-start ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Stats Grid    */}
                  <motion.div
                    variants={itemVariants}
                    className={`grid grid-cols-2 gap-4 ${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Why Choose{" "}<br/>
                      <span
                        className={`bg-gradient-to-r ${theme.light} bg-clip-text text-transparent inline-block`}
                      >
                        {productData.name.length > 7 ? (
                          <>
                            {productData.name.substring(
                              0,
                              Math.ceil(productData.name.length / 2)
                            )}
                            <br />
                            {productData.name.substring(
                              Math.ceil(productData.name.length / 2)
                            )}
                          </>
                        ) : (
                          productData.name
                        )}
                      </span>
                      ?
                    </h2>
                    {productData.whyChooseSection.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className={`text-center p-4 rounded-xl bg-white border ${theme.border} ${theme.hover} shadow-md hover:shadow-lg transition-all duration-200`}
                        whileHover={{ y: -2, scale: 1.02 }}
                        variants={itemVariants}
                      >
                        <div
                          className={`${theme.text} flex justify-center mb-2`}
                        >
                          {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-md text-gray-600 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Benefits List - Compact */}
                  <motion.div
                    variants={itemVariants}
                    className={`space-y-4 ${isEven ? "" : "lg:col-start-2"}`}
                  >
                    <div className="space-y-3">
                      {productData.productBenefits.keyBenefits.map(
                        (benefit) => (
                          <motion.div
                            key={benefit.id}
                            className={`flex items-start  rounded-xl `}
                            whileHover={{ x: 4 }}
                            variants={itemVariants}
                          >
                            <div className="flex-1 min-w-0 text-left">
                              <h3
                                className={`flex gap-4 text-lg font-semibold ${theme.text} mb-1 group-hover:${theme.text}/80 transition-colors line-clamp-1`}
                              >
                                <SquareCheckBig /> {benefit.title}
                              </h3>
                              <p className="text-gray-600 text-md leading-relaxed line-clamp-2">
                                {benefit.description}
                              </p>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Product Footer */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
              <div className="max-w-4xl mx-auto">
                <motion.div className="text-center">
                  {/* Completion Message */}
                  <motion.div>
                    <motion.p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                      You've explored all the features and benefits. Ready to
                      experience {productData.name} for yourself?
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <motion.a
                        href={productData.productHeadingSection.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${theme.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span> {productData.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </motion.div>

                    {/* Next Product Indicator (except for last product) */}
                    {/* {productIndex < productsData.length - 1 && (
                      <motion.div
                        className="mt-12"
                       
                      >
                        <motion.p
                          className="text-gray-500 mb-4 text-sm font-medium"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          Continue to {productsData[productIndex + 1].name} ↓
                        </motion.p>
                        <motion.div
                          className={`h-1 w-16 mx-auto bg-gradient-to-r ${theme.gradient} rounded-full opacity-50`}
                          animate={{ width: ["4rem", "6rem", "4rem"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      </motion.div>
                    )} */}
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
