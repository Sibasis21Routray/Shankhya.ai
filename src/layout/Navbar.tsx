import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", url: "/" },
    { id: "about", label: "About", url: "/about" },
    { id: "producs", label: "Products", url: "/products" },
    { id: "contact", label: "Contact", url: "/contact" },
  ];

  // Update active link based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const matchingItem = navItems.find((item) => currentPath === item.url);
    setActiveLink(matchingItem ? matchingItem.id : null);
  }, [location.pathname]);

  const handleNavigate = (url, id) => {
    setActiveLink(id);
    navigate(url);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setActiveLink("home");
  };

  return (
    <motion.nav
      className="fixed w-full z-50 px-4 sm:px-6 py-3 bg-white shadow-lg backdrop-blur-sm bg-opacity-95 border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogoClick}
        >
          <img
            src="/Shankhya.png"
            className="h-12 w-full"
            alt="Shankhya AI Logo"
          />
          <img
            src="/text.png"
            className="h-5 w-full"
            alt="Shankhya AI Logo"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`relative px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeLink === item.id
                  ? "text-white"
                  : "text-gray-700 hover:text-[#034778]"
              }`}
              onClick={() => handleNavigate(item.url, item.id)}
            >
              {activeLink === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#034778] to-[#021f67] rounded-full shadow-lg" />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-[#034778] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
                  activeLink === item.id
                    ? "bg-gradient-to-r from-[#034778] to-[#021f67] text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#034778]"
                }`}
                onClick={() => handleNavigate(item.url, item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
