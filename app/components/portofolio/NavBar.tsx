import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function NavBar({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}: {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-end items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              whileHover={{ scale: 1.1 }}
              className="relative group hover:text-gray-600 transition"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 space-y-4"
        >
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-gray-500 transition"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
