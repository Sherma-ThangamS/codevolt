import React from "react";

const Service = () => {
  return (
    <div className="mt-[4vh]">
      <div className="md:flex w-[60vw] max-sm:w-[100%] max-sm:text-center">
        <span className="bg-[#B9FF66] px-[.7vw] rounded-[1vh] text-[2vw] font-semibold mr-[3vw] max-sm:text-[5vh] max-sm: ">
          Services
        </span>
        <p className="text-[1vw] w-[60%] max-sm:text-[2vh] max-sm:w-[100%] max-sm:mt-[4vw]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="mt-[8vh] md:flex">
        <div className="bg-[#F3F3F3] flex-1 mr-[2vw] p-[2vw] flex border border-black rounded-[5vh] md:h-[40vh] shadow-[0.1px_.7vh_1px_rgba(0,0,0,1)]">
          <div className="flex-1 max-sm:px-[35px] max-sm:py-[40px]">
            <span className="bg-[#B9FF66] rounded-[2vh] text-[2vw] mb-[4vh] p-[1vh] max-sm:text-[25px]">
              Search engine
            </span>
            <br />
            <span className="bg-[#B9FF66] rounded-[2vh] text-[2vw] mt-[1vh] pt-0 p-[1vh] max-sm:text-[25px]">
              Optimization
            </span>

            <div className="flex mt-[12vh] items-center">
              <img
                className="h-[2vw] w-[2vw] mr-[1vw] max-sm:w-[45px] max-sm:h-[45px] max-sm:mt-[0px]"
                src="./images/Ellipse.png"
                alt=""
              />
              <span className="text-[1vw] max-sm:hidden">Learn more</span>
            </div>
          </div>
          <div className="md:flex-1 max-sm:w-[30%] text-center max-sm:mt-[10px] relative">
            <img
              className="w-[80%] mt-[4vh] h-[80%] max-sm:w-[230px] max-sm:mt-[130px] max-sm:h-[150px] max-sm:mr-[105px] max-sm:absolute max-sm:left-[-80px]"
              src="./images/tokyo.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#B9FF66] ml-[1vw] flex-1 p-[2vw] flex border border-black rounded-[5vh] md:h-[40vh] shadow-[0.1px_.7vh_1px_rgba(0,0,0,1)] max-sm:mt-[3vh] max-sm:text-[25px">
          <div className="flex-1 max-sm:p-[20px]">
            <span className="bg-[#FFFFFF] rounded-[2vh] text-[2vw] mb-[4vh] p-[1vh] max-sm:text-[25px]">
              Pay-per-click
            </span>
            <br />
            <span className="bg-[#FFFFFF] rounded-[2vh] text-[2vw] mt-[1vh] pt-0 p-[1vh] max-sm:text-[25px]">
              advertising
            </span>

            <div className="flex mt-[12vh] items-center ">
              <img
                className="h-[2vw] w-[2vw] mr-[1vw] max-sm:w-[45px] max-sm:h-[45px] max-sm:mt-[10px]"
                src="./images/Ellipse.png"
                alt=""
              />
              <span className="text-[1vw] max-sm:hidden">Learn more</span>
            </div>
          </div>
          <div className="md:flex-1 max-sm:w-[30%] text-center">
            <img
              className="w-[80%] mt-[4vh] h-[80%] max-sm:w-[150px] max-sm:mt-[150px] max-sm:h-[120px] max-sm:mr-[105px] max-sm:absolute max-sm:left-[190px]"
              src="./images/tokyo-selecting.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
