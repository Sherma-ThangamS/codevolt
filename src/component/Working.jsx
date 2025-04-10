import React from "react";

const Working = () => {
  return (
    <div className="mt-[8vh]">
      <div className="md:flex md:w-[60vw]">
        <p className="text-[2vw] font-semibold md:mr-[3vw] text-center max-sm:text-[9.7vw] max-sm:leading-[10vh] ">
          <span className="md:bg-[#B9FF66] inline-block px-[.7vw] rounded-l-[2vh]  max-sm:py-0">
            <span className="bg-[#B9FF66] max-sm:px-[.7vw] max-sm:rounded-[10px]">
              Our Working
            </span>
          </span>
          <p className="md:bg-[#B9FF66]  md:ml-[-2vh] max-sm:mt-[-39px] md:inline-block px-[.7vw]  rounded-r-[2vh]">
            <span className="bg-[#B9FF66] px-[.7vw] max-sm:rounded-[10px]">
              Process
            </span>
          </p>
        </p>
        <div className="text-[1vw] max-sm:text-center max-sm:text-[20px] max-sm:mt-[20px]">
          <p className="max-sm:inline-block">Step-by-Step Guide to Achieving</p>
          <p className="">Your Business Goals</p>
        </div>
      </div>
      <div className="bg-[#B9FF66] mt-[8vh] mr-[2vw] p-[2vw] border border-black rounded-[1.3vw] md:h-[25vh] shadow-[0.1px_.7vh_1px_rgba(0,0,0,1)] max-sm:bg-[#F3F3F3] max-sm:rounded-[15vh] max-sm:h-[100px] max-sm:p-[30px] ">
        <div className="md:mb-[2vh] max-sm:hidden border border-black"></div>
        <p className="text-[1vw] max-sm:hidden">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
        <div className="flex max-sm:items-center md:mt-[3vh] justify-between">
          <div className="">
            <span className="font-semibold align-middle text-[2vw] mr-[1vw] max-sm:text-[30px]">
              01
            </span>
            <span className="font-semibold align-middle text-[1.3vw] max-sm:text-[20px] max-sm:ml-[25px]">
              Consultation
            </span>
          </div>
          <img
            className="cursor-pointer w-[3vw] h-[3vw] max-sm:hidden"
            src="./images/Minus.png"
            alt=""
          />
          <img
            className="cursor-pointer w-[3vw] h-[3vw] max-sm:w-[30px] max-sm:h-[30px] max-sm:mt[55px] md:hidden"
            src="./images/Plus.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3] mt-[8vh] mr-[2vw] p-[2vw] border border-black rounded-[1.3vw] md:h-[15vh] shadow-[0.1px_.7vh_1px_rgba(0,0,0,1)] flex justify-between max-sm:bg-[#F3F3F3] max-sm:h-[100px] max-sm:rounded-[15vh] max-sm:p-[20px] max-sm:items-center">
        <div className="max-sm:flex">
          <span className="font-semibold align-middle text-[2vw] mr-[1vw] max-sm:text-[30px] max-sm:h-[100%]">
            02
          </span>
          <span className="font-semibold align-middle text-[1.3vw] max-sm:text-[20px] max-sm:ml-[25px]">
            Research and Strategy Development
          </span>
        </div>
        <img
          className="cursor-pointer w-[3vw] h-[3vw] max-sm:w-[30px] max-sm:h-[30px] max-sm:mt[55px]"
          src="./images/Plus.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Working;
