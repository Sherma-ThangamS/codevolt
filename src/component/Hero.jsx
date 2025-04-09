import React from "react";

const Hero = () => {
  return (
    <>
      <div className="md:flex justify-between mt-[7vh]">
        <div className="md:w-[40vw]">
          <p className="font-semibold text-[4.9vw] md:leading-[12vh] mb-[4vh] max-md:text-[10vw] max-sm:leading-[10vh] ">
            Navigating the digital landscape for success
          </p>
          <p className="text-[1.3vw] my-[4vh] max-sm:text-[3vh] max-sm:mt-[70vh]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-[1.3vw] py-[2vh] border-none rounded-[10px] px-[1.7vw] text-white mt-[3vh] max-sm:w-[100%] max-sm:text-[4vh]">
            Book a consultation
          </button>
        </div>
        <div className="w-[45vw] h-[30vh] max-sm:absolute max-sm:top-[50vh] max-sm:w-[80vh]">
          <img
            className="ml-auto h-[70vh] w-[40vw] mr-[3vh] max-sm:w-[80vh]"
            src="./images/Hero.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between mt-[5vh] flex-wrap">
        <img className="mr-[3vh]" src="./images/Logo-6.png" alt="" />
        <img className="mr-[1vh]" src="./images/Logo-5.png" alt="" />
        <img className="mr-[1vh]" src="./images/Logo-4.png" alt="" />
        <img src="./images/Logo-3.png" alt="" />
        <img src="./images/Logo-2.png" alt="" />
        <img src="./images/Logo-1.png" alt="" />
      </div>
    </>
  );
};

export default Hero;
