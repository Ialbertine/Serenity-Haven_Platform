import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiPlusThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      <section className="flex items-center justify-between py-2 sm:px-[2rem]">
        <div className="w-[25vh] lg:w-[25vh]">
          <img src="imgs/Serenity190.png" alt="serenity" />
        </div>
        <nav className="hidden lg:flex gap-4 items-center">
          <div className="flex space-x-6 uppercase lg:font-medium ">
            <Link to="/">Home</Link>
            <div className="flex items-center mr-1 gap-1">
              <FlyoutLink to="#" FlyoutContent={AboutContent}>
                About
              </FlyoutLink>
              <PiPlusThin />
            </div>
            <div className="flex items-center gap-1 ">
              <FlyoutLink to="#" FlyoutContent={ServicesContent}>
                Services
              </FlyoutLink>
              <PiPlusThin />
            </div>
            <div className="flex items-center gap-1">
              <FlyoutLink to="#" FlyoutContent={PagesContent}>
                Pages
              </FlyoutLink>
              <PiPlusThin />
            </div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="h-[9vh] border-[1px] border-black mx-4"></div>
          <div className="flex space-x-4">
            <div className="p-2 border-[1px] border-black rounded-full">
              <IoCallOutline className="text-2xl"/>
            </div>
            <div className="p-2 border-[1px] border-black rounded-full">
              <CiSearch className="text-2xl"/>
            </div>
          </div>
        </nav>
        <div className="lg:hidden">
          <AiOutlineMenu className="text-5xl"/>
        </div>
      </section>
    </header>
  );
};

const FlyoutLink = ({ children, to, FlyoutContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showFlyout = FlyoutContent && isOpen;

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={to} className="relative text-black">
        {children}
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black shadow-lg"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="flex flex-col bg-white p-4 shadow-lg space-y-4 w-64">
      <Link to="/about" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        About Us
      </Link>
      <Link to="/team" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Our Team
      </Link>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="flex flex-col  p-4 shadow-lg space-y-4 w-64">
      <Link to="/services" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Services
      </Link>
      <Link to="/details" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Service Details
      </Link>
      <Link to="/pricing" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Pricing
      </Link>
      <Link to="/case" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Case
      </Link>
      <Link to="/case-details" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Case Details
      </Link>
    </div>
  );
};

const PagesContent = () => {
  return (
    <div className="flex flex-col bg-white p-4 shadow-lg space-y-4 w-64">
      <Link to="/faqs" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        FAQs
      </Link>
      <Link to="/blog" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Our Blog
      </Link>
      <Link to="/reviews" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Reviews
      </Link>
      <Link to="/help" className="block uppercase hover:text-[#e02b2b] duration-300 transition ease-in-out">
        Help Center
      </Link>
    </div>
  );
};

export default Header;
