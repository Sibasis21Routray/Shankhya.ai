
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Stats() {
const stats = [
  {
    value: 15,
    label: "Happy Clients",
    desc: "We’ve partnered with businesses that trust our expertise and continue to grow with us.",
  },
  {
    value: 50,
    label: "Projects Completed",
    desc: "Successfully delivered high-quality projects across various domains and industries.",
  },
  {
    value: 99,
    label: "Client Satisfaction",
    desc: "Our focus on quality, innovation, and reliability keeps our clients fully satisfied.",
  },
  {
    value: "24/7",
    label: "Support Available",
    desc: "Our team is always ready to assist you anytime, ensuring seamless operations.",
  },
];



  return (
    <InView threshold={0.5} triggerOnce>
      {({ inView, ref }) => (
        <section ref={ref} className="py-20  text-white mt-10 m-5">
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
              We only deliver results
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
              Numbers that showcase our growth, innovation, and commitment to
              excellence.
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold  bg-gray-700 bg-clip-text text-transparent flex mt-10 mb-5">
                    {typeof stat.value === "number" ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={
                          stat.label === "Client Satisfaction" ? "%" : "+"
                        }
                        start={inView ? 0 : undefined}
                        separator=","
                        decimals={stat.label === "Client Satisfaction" ? 0 : 0}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut",
                    }}
                    className="text-gray-700 font-semibold flex justify-start text-left "
                  >
                    {stat.label}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut",
                    }}
                    className="text-gray-700 mt-2 flex justify-start text-left font-light "
                  >
                    {stat.desc}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}

export default Stats;
