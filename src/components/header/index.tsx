"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  link: string;
  dropdown: boolean;
  items?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { label: "Home", link: "/", dropdown: false },
  { label: "About Us", link: "/about-us", dropdown: false },
  { label: "Expertise", link: "/expertise", dropdown: false },
  { label: "Media & Blogs", link: "/media-and-blogs", dropdown: false },
  { label: "Contact Us", link: "/contact-us", dropdown: false },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const isActive = (link: string) => {
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  return (
    <header className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#47a8a8]">Dr. Upinder Kaur</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-700">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div
                  className={`flex items-center gap-1 cursor-pointer transition-colors ${
                    isActive(item.link)
                      ? "text-[#47a8a8] font-bold"
                      : "hover:text-[#47a8a8]"
                  }`}
                >
                  <Link href={item.link}>{item.label}</Link>
                  <IoMdArrowDropdown
                    className={`text-lg transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      className="absolute top-10 left-0 w-56 bg-white text-gray-700 shadow-xl border border-gray-200 rounded-2xl p-3 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.items?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`block px-4 py-1.5 rounded-lg transition-all duration-200 hover:text-[#47a8a8] ${
                            pathname === link.href
                              ? "text-[#47a8a8] font-semibold"
                              : ""
                          }`}
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.link}
                className={`transition-colors ${
                  isActive(item.link)
                    ? "text-[#47a8a8] font-bold"
                    : "hover:text-[#47a8a8]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="tel:+91 8800007740"
            className="ml-3 border border-[#47a8a8] text-[#47a8a8] px-5 py-2.5 rounded-md font-semibold transition-all hover:bg-[#47a8a8] hover:text-white"
          >
            Request A Call
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden text-gray-700 text-2xl"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white text-gray-700 px-5 py-4 space-y-3 shadow-inner"
          >
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`w-full flex justify-between items-center py-2 text-left font-semibold ${
                      isActive(item.link) ? "text-[#47a8a8]" : ""
                    }`}
                  >
                    {item.label}
                    <IoMdArrowDropdown
                      className={`transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="ml-3 mt-2 space-y-1"
                      >
                        {item.items?.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className={`block py-1 transition hover:text-[#47a8a8] ${
                              pathname === link.href
                                ? "text-[#47a8a8] font-semibold"
                                : ""
                            }`}
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.link}
                  className={`block py-2 transition hover:text-[#47a8a8] ${
                    isActive(item.link) ? "text-[#47a8a8] font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="tel:+91 8800007740"
              className="block w-full text-center border border-[#47a8a8] text-[#47a8a8] py-2 rounded-xl font-semibold hover:bg-[#47a8a8] hover:text-white"
              onClick={handleLinkClick}
            >
              Request A Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
