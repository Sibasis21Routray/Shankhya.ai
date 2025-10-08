import { ScrollText, Brain, Gamepad, Plane, CheckCircle } from "lucide-react";
import { Badge } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";

const Product = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };


  return (
    <div>
      <section id="products" className="py-10">
        <div className="container mx-auto px-6">
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
              Innovations That Drive Performance
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
              Discover our innovative suite of products designed to transform
              industries with AI-driven technology.
            </motion.p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Restominder",
                icon: <ScrollText className="h-8 w-8 text-blue-500" />,
                description:
                  "AI-powered restaurant management system with real-time insights",
                features: [
                  "Table Management",
                  "Order Processing",
                  "Analytics",
                  "Inventory Control",
                ],
              },
              {
                name: "OCRPro",
                icon: <Brain className="h-8 w-8 text-blue-500" />,
                description:
                  "Advanced OCR with multi-language support and high accuracy",
                features: [
                  "Text Recognition",
                  "Document Scanning",
                  "Data Extraction",
                  "Cloud Storage",
                ],
              },
              {
                name: "Aartha Pro AI",
                icon: <Gamepad className="h-8 w-8 text-blue-500" />,
                description:
                  "Next-gen gaming platform with cryptocurrency & blockchain   integration",
                features: [
                  "Secure Crypto Transactions",
                  "Multi-Game Support",
                  "Bet and Win",
                  "Real-Time Updates",
                ],
              },
              {
                name: "Drone Software",
                icon: <Plane className="h-8 w-8 text-blue-500" />,
                description:
                  "Robust drone control and analytics for enterprise use cases worldwide",
                features: [
                  "Flight Control",
                  "Data Analysis",
                  "Mapping",
                  "Automation",
                ],
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden border-2 border-blue-500/50  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                  <CardContent className="p-6 relative z-10 ">
                    {/* Icon Container */}
                    <motion.div className="rounded-full bg-blue-100/50 p-4 w-fit mb-2 ">
                      {product.icon}
                    </motion.div>

                    {/* Product Name and Description */}
                    <h3 className="font-semibold text-2xl mb-1 text-blue-900 h-[4vh]">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-tight text-left pt-3 pb-2  ">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 text-sm   min-h-[10vh]">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            <CheckCircle className="h-5 w-5 text-blue-500" />
                          </motion.div>
                          <span className="text-gray-700 font-medium ">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Subtle Gradient Overlay */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
