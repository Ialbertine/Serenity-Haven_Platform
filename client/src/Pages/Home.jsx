import React from 'react';

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(/imgs/Homeimage.jpg)` }} // Ensure the path is correct
      className="bg-cover bg-transparent bg-center h-screen w-full flex flex-col justify-center items-center text-white relative"
    >
      <div className="absolute inset-0 bg-[#507368] opacity-30 z-10"></div>

      <div className="relative z-10 text-center sm:pt-[2rem] lg:pt-[3rem]">
        <h3 className="text-[#28b588] font-semibold">Find Support and Healing</h3>
        <h1 className="text-[#f6f6f6] text-4xl lg:text-5xl font-bold mt-2 mb-4">Guide you on your journey</h1>
        <h1 className='text-[#f6f6f6] text-4xl lg:text-5xl font-bold mt-2 mb-4'>towards mental wellness.</h1>
        <p className="text-xl mb-6 lg:w-[700px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="flex gap-4 mt-4 relative z-10">
        <button className="bg-[#28b588] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">Our Services</button>
        <button className="bg-[#ea4949] text-white px-10 py-[16px] rounded-[2rem] uppercase font-medium text-[13px]">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
