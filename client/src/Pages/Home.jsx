import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { ImCheckmark } from "react-icons/im";
import { IoMdPlay } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {
  // video interactivity

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // services container
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const variants = {
    initial: { y: 0 },
    hover: {
      y: -10,
      backgroundColor: "#053c2d",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(/imgs/Homeimage.jpg)` }}
        className="bg-cover bg-transparent bg-center h-screen w-full flex flex-col justify-center items-center text-white relative"
      >
        <div className="absolute inset-x-0 top-0 h-[90vh] opacity-80 bg-gradient-to-b from-[#566c65] to-transparent z-10"></div>

        <div className="relative z-10 text-center sm:pt-[3rem] lg:pt-[13vh]">
          <h3 className="text-[#28b588] font-semibold">
            Find Support and Healing
          </h3>
          <h1 className="text-[#f6f6f6] text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Guide you on your journey
          </h1>
          <h1 className="text-[#f6f6f6] text-4xl lg:text-5xl font-bold mt-2 mb-4">
            towards mental wellness.
          </h1>
          <p className="text-xl mb-6 lg:w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex gap-4 mt-4 relative z-10">
          <button className="bg-[#28b588] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">
            Our Services
          </button>
          <button className="bg-[#ea4949] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">
            Learn More
          </button>
        </div>
      </div>

      {/* About section overview */}

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen sm:py-[2rem] lg:py-[3rem] sm:px-[1rem] lg:px-[3rem]">
        {/* Image Section */}
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <img
            src="/imgs/Aboutus.jpg"
            alt="blackgirls"
            className="object-cover w-full h-[70vh] lg:h-[85vh] rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start lg:w-1/2">
          <h3 className="text-[#ea4949] font-semibold mb-4 lg:mb-6 uppercase text-[12px]">
            Empowering Mental Wellness
          </h3>
          <p className="text-3xl lg:text-[2.5rem] leading-normal lg:leading-[3.5rem] line-clamp-3 mb-4 lg:mb-6 font-bold">
            At Our Business Company We Believe In The Power Of Mental Wellness.
          </p>
          <p className="text-base lg:text-lg mb-3 text-[grey]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-col gap-4 mt-3">
            <div className="flex items-center gap-2">
              <ImCheckmark className="text-[#ea4949] text-2xl" />
              <p className="text-[grey]">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ImCheckmark className="text-[#ea4949] text-2xl" />
              <p className="text-[grey]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button className="flex items-center gap-2 bg-[#28b588] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">
              Learn More <CgArrowLongRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* categories */}

      <div className="bg-[#053c2d] w-full h-[30vh]">
        <div>{/* <Carousel /> */}</div>
      </div>

      {/* Services section overview and Video player*/}

      {/* <VideoPlayer /> */}

      <div
        className="relative bg-fixed bg-center bg-cover bg-no-repeat min-h-screen flex flex-col sm:px-[1rem] lg:px-[3rem]"
        style={{ backgroundImage: "url('/imgs/fixedback.jpg')" }}
      >
        <div className="flex flex-col justify-start items-center h-full mb-12 ">
          {!isPlaying ? (
            <div className="relative w-[100%] h-[60vh]">
              <img
                src="/imgs/videoplay.jpg"
                alt="video"
                className="rounded-xl w-full h-full object-cover"
              />
              <button
                onClick={handlePlay}
                className="absolute inset-0 m-auto w-20 h-20 bg-white text-red-600 rounded-full flex justify-center items-center animate-pulse hover:scale-110 transition-transform"
              >
                <IoMdPlay size={32} />
              </button>
            </div>
          ) : (
            <div className="relative w-[80%] h-[70vh]">
              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-8 ">
          <div>
            <h3 className="text-[#ea4949] font-semibold mb-4 uppercase text-[12px]">
              Our Services
            </h3>
            <p className="text-3xl lg:text-[2.5rem] leading-normal lg:leading-[3.5rem] mb-4 lg:mb-6 font-bold lg:w-[80vh]">
              Transformative Mental Health Service
            </p>
          </div>
          <div>
            <p className="text-base lg:text-lg mb-3 text-[grey]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="mt-4">
              <button className="flex items-center gap-2 bg-[#28b588] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">
                Discover All <CgArrowLongRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {/* sample services */}
        <div className="flex flex-col lg:flex-row gap-8 mt-5 pb-[2rem]">
          {/* Individual Therapy */}
          <motion.div
            className="flex flex-col bg-[#053c2d] px-6 py-8 gap-4 rounded-[30px]"
            initial="initial"
            animate={hoveredDiv === 1 ? "hover" : "initial"}
            variants={variants}
            onMouseEnter={() => setHoveredDiv(1)}
            onMouseLeave={() => setHoveredDiv(null)}
          >
            <img
              src="/imgs/individualtherapy.png"
              alt="single"
              className="w-10"
            />
            <h2 className="font-bold text-2xl text-gray-100">
              Individual Therapy
            </h2>
            <p className="text-[18px] lg:text-lg text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <span
                className="uppercase text-[14px] text-[#28b588] mr-1 font-semibold"
                style={{
                  color: hoveredDiv === 1 ? "#8B4513" : "#28b588",
                  fontWeight: "bold",
                }}
              >
                Learn More
              </span>
              <BsArrowRight
                className="text-xl"
                style={{ color: hoveredDiv === 1 ? "#8B4513" : "#28b588" }}
              />
            </div>
          </motion.div>

          {/* Group Therapy */}
          <motion.div
            className="flex flex-col bg-[#e7e7e7] px-6 py-8 gap-4 rounded-[30px]"
            initial="initial"
            animate={hoveredDiv === 2 ? "hover" : "initial"}
            variants={variants}
            onMouseEnter={() => setHoveredDiv(2)}
            onMouseLeave={() => setHoveredDiv(null)}
          >
            <img src="/imgs/grouptherapy.png" alt="group" className="w-10" />
            <h2
              className="font-bold text-2xl"
              style={{ color: hoveredDiv === 2 ? "white" : "black" }}
            >
              Group Therapy
            </h2>
            <p className="text-[18px] lg:text-lg text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <span
                className="uppercase text-[14px] text-[#28b588] mr-1 font-semibold"
                style={{
                  color: hoveredDiv === 2 ? "#8B4513" : "#28b588",
                  fontWeight: "bold",
                }}
              >
                Learn More
              </span>
              <BsArrowRight
                className="text-xl"
                style={{ color: hoveredDiv === 2 ? "#8B4513" : "#28b588" }}
              />
            </div>
          </motion.div>

          {/* Couple Therapy */}
          <motion.div
            className="flex flex-col bg-[#e7e7e7] px-6 py-8 gap-4 rounded-[30px]"
            initial="initial"
            animate={hoveredDiv === 3 ? "hover" : "initial"}
            variants={variants}
            onMouseEnter={() => setHoveredDiv(3)}
            onMouseLeave={() => setHoveredDiv(null)}
          >
            <img src="/imgs/Couple01.png" alt="couple" className="w-10" />
            <h2
              className="font-bold text-2xl"
              style={{ color: hoveredDiv === 3 ? "white" : "black" }}
            >
              Couple Therapy
            </h2>
            <p className="text-[18px] lg:text-lg text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <span
                className="uppercase text-[14px] text-[#28b588] mr-1 font-semibold"
                style={{
                  color: hoveredDiv === 3 ? "#8B4513" : "#28b588",
                  fontWeight: "bold",
                }}
              >
                Learn More
              </span>
              <BsArrowRight
                className="text-xl"
                style={{ color: hoveredDiv === 3 ? "#8B4513" : "#28b588" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* conditions we treat */}

      <div className="min-h-screen flex flex-col sm:px-[1rem] lg:px-[3rem] sm:py-[2rem] lg:py-[3rem]">
        <div className="flex justify-between items-center py-[2rem]">
          <div>
            <h3 className="text-[#ea4949] font-semibold mb-4 uppercase text-[12px]">
              Conditions We Treat
            </h3>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-[#28b588] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">
              View More <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <p className="text-3xl lg:text-[2.5rem] leading-normal lg:leading-[3.5rem] mb-4 lg:mb-6 font-bold lg:w-[80vh]">
              Transformative Mental Health Service
            </p>
            <div className="border rounded p-4">
              <div className="flex items-center gap-3">
                <ImCheckmark className="text-[#ea4949] text-2xl" />
                <h1 className="sm:text-2xl font-bold">Depression</h1>
              </div>
              <p>
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>
            <div className="border rounded p-4">
              <div className="flex items-center gap-3">
                <ImCheckmark className="text-[#ea4949] text-2xl" />
                <h1 className="">Anxiety Disorders</h1>
              </div>
              <p>
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>
            <div className="border rounded p-4">
              <div className="flex items-center gap-3">
                <ImCheckmark className="text-[#ea4949] text-2xl" />
                <h1 className="">Childhood Trauma</h1>
              </div>
              <p>
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-1">
              <img
                src="/imgs/condition.jpg"
                alt="condition"
                className="object-cover w-full h-[35vh] rounded-xl"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="/imgs/childhood.jpg"
                alt="Photo 2"
                className="object-cover w-full h-[35vh] rounded-xl"
              />
            </div>
            <div className="col-span-2 row-span-1 relative sm:-top-5 lg:-top-10">
              {!isPlaying ? (
                <>
                  <img
                    src="/imgs/depression.jpg"
                    alt="Depression"
                    className="object-cover w-full h-[40vh] rounded-xl"
                  />
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 m-auto w-16 h-16 bg-white text-red-600 rounded-full flex justify-center items-center lg:-top-12 animate-pulse hover:scale-110 transition-transform"
                  >
                    <IoMdPlay size={32} />
                  </button>
                </>
              ) : (
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
