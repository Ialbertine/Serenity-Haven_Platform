import React from 'react';
import { FaLinkedinIn, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white pb-3 lg:px-[2rem]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>Copyright © 2022. All Rights Reserved.</p>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 ">
          <a href="#" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 bg-[#048d6d] rounded-full hover:bg-[#0597e6] hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <FaLinkedinIn className="text-white text-xl" />
          </a>
          <a href="#" aria-label="Pinterest" className="flex items-center justify-center w-9 h-9 bg-[#048d6d] rounded-full hover:bg-[#E60023] hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <FaPinterestP className="text-white text-xl" />
          </a>
          <a href="#" aria-label="Twitter" className="flex items-center justify-center w-9 h-9 bg-[#048d6d] rounded-full hover:bg-[#1DA1F2] hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <FaTwitter className="text-white text-xl" />
          </a>
          <a href="#" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 bg-[#048d6d] rounded-full hover:bg-[#de2d2d] hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <FaInstagram className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
