
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  ArrowUp,
  Circle,
  CircleDot,
} from "lucide-react";

const Subscribe = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Shankhya.ai2.png"
                alt="Shankhya Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SHANKHYA.AI
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Transforming ideas into intelligent software solutions through
              cutting-edge AI and modern technology stack.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                { icon: Github, href: "#", color: "hover:text-gray-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "Products", href: "#products" },
                { name: "Process", href: "#process" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <CircleDot className="w-3 h-3 rotate-45" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "AI & Machine Learning",
                "Blockchain Development",
                "Cloud Solutions",
                "Mobile Development",
                "Game Development",
                "Quantum Computing",
              ].map((service, index) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>contact@shankhya.ai</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Phone className="w-5 h-5 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-slate-300"
              >
                <MapPin className="w-5 h-5 text-red-400 mt-0.5" />
                <span>
                  123 Tech Park Drive
                  <br />
                  San Francisco, CA 94107
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Shankhya AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <motion.a
                href="#"
                whileHover={{ color: "#fff" }}
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#fff" }}
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#fff" }}
                className="transition-colors hover:text-white"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Subscribe;
