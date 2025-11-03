import {motion} from "framer-motion"

const Development = () => {
  return (
    <div>
      {" "}
      <section
        id="process"
        className=" mb-10  relative"
      >
        {/* Overlay for readability */}

        <div className="container mx-auto px-4">
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
              How We Work
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
              Our proven development methodology ensures successful project
              delivery
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements and create a detailed project roadmap",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team creates intuitive and scalable architecture designs",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your solution using agile development methodology",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Thorough testing and deployment to ensure quality",
              },
            ].map((process) => (
              <div
                key={process.step}
                className="relative  p-5 bg-[url('/developmentbg.jpg')] bg-cover bg-center bg-no-repeat"
              >
                <div className="text-white text-5xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-100">
                  {process.title}
                </h3>
                <p className="text-white">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;
