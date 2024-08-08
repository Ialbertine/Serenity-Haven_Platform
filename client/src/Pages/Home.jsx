import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { ImCheckmark } from "react-icons/im";
import { IoMdPlay } from "react-icons/io";

const Home = () => {
  // video interactivity

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
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

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen sm:py-6 sm:px-[1rem] lg:px-[3rem]">
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

      <div className="bg-[#085a44] w-full h-[30vh]">
        <div>
          {/* <Carousel /> */}
        </div>
      </div>

      {/* Services section overview and Video player*/}

      {/* <VideoPlayer /> */}

      <div className="relative bg-fixed bg-center bg-cover bg-no-repeat h-screen" style={{ backgroundImage: "url('/imgs/fixedback.jpg')" }}>
      <div className="flex flex-col justify-start items-center h-full">
        {!isPlaying ? (
          <div className="relative w-[80%] h-[60vh]">
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
    </div>
    </>
  );
};

export default Home;
