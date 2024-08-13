import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Prefooter = () => {
  return (
    <>
      <div className=" text-gray-300 sm:px-5 lg:px-10 lg:pt-10 sm:pt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 lg:py-10">
          {/* Left Side: Image and Description */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <div className="w-32">
                <img src="imgs/Serenity190.png" alt="serenity" />
              </div>
              <p className="text-[14px] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="flex gap-4">
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-3 px-6 rounded-full bg-gray-100 text-gray-500"
                />
                <button className="ml-2 px-6 py-3 rounded-full border border-transparent bg-[#048d6d] text-white font-bold hover:bg-[#f95008] hover:opacity-90 transition duration-300 ease-in-out">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Quick Links, Services, and Address */}
          <div className="flex flex-col lg:flex-row gap-16 lg:w-2/3 mt-5">
            <div className="flex flex-col">
              <h2 className="font-bold text-xl text-white">Quick Links</h2>
              <div className="flex flex-col gap-4 mt-4">
                {[
                  "Home",
                  "About Us",
                  "Our Services",
                  "Our Blog",
                  "Contact Us",
                ].map((link, index) => (
                  <div
                    className="flex items-center whitespace-nowrap"
                    key={index}
                  >
                    <IoMdArrowDropright className="text-xl text-[#048d6d]" />
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="ml-2 hover:text-[#048d6d] text-[15px]"
                    >
                      {link}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-xl text-white">Our Services</h2>
              <div className="flex flex-col gap-4 mt-4">
                {[
                  "Mental Illness",
                  "Mental Health",
                  "Live Coach",
                  "Consulting",
                  "Mental Development",
                ].map((service, index) => (
                  <div
                    className="flex items-center whitespace-nowrap"
                    key={index}
                  >
                    <IoMdArrowDropright className="text-xl text-[#048d6d]" />
                    <Link
                      to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="ml-2 hover:text-[#048d6d] text-[15px]"
                    >
                      {service}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:ml-auto">
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl text-white">
                  Head Office Address
                </h2>
                <p className="lg:w-[85%] text-[15px]">
                  Lumbung Hidup St 425 East Java Madiun City Block ABC 123
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl text-white">Days Open</h2>
                <p className="text-[15px]">Monday - Saturday: 9am - 10pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[2rem]">
        <hr className="my-9 border-t border-dashed border-gray-300 opacity-50" />
      </div>
    </>
  );
};

export default Prefooter;
