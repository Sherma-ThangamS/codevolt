import React from "react";

const Footer = () => {
  return (
    <div className="mt-[4vh] bg-black text-white text-[1vw] rounded-t-[4vh] px-[5vw] py-[4vh]">
      <div className="flex justify-between">
        <div className="flex w-[15vw] items-center">
          <img
            className="h-[35px] w-[35px] mr-[5px]"
            src="./icons/Icon-white.png"
            alt=""
          />
          <span className="text-[37px] font-semibold">Positivus</span>
        </div>
        <div className="flex flex-1 text-[1vw] max-w-[50%] justify-around underline">
          <button>About us</button>
          <button>Service</button>
          <button>Use Cases</button>
          <button>Pricing</button>
          <button>Blog</button>
          <button className="px-[20px] py-[10px] rounded-[10px] border-black border border-solid">
            Request a quote
          </button>
        </div>
        <div className="flex justify-around w-[13vw]">
          <button>
            <img src="./images/linkedin.png" alt="" />
          </button>
          <button>
            <img src="./images/facebook.png" alt="" />
          </button>
          <button className="bg-white w-[2vw] h-[4vh] rounded-full my-auto">
            <img
              className="mx-auto my-auto w-[60%] h-[60%] object-center"
              src="./images/twitter.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="flex mt-[6vh]">
        <div className="flex-1">
          <span className="bg-[#B9FF66] rounded-[1vh] text-black font-semibold px-[.5vh]">
            Contact us:
          </span>
          <br />
          <p className="mt-[2vh]">Email: info@positivus.com</p>
          <p className="mt-[2vh]">Phone: 555-567-8901</p>
          <p className="mt-[2vh]">
            Address: 1234 Main St Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="flex-1 ml-[4vh] px-[2vw] py-[6vh] bg-[rgb(41,42,50)]">
          <input
            className="w-[45%] mr-[2vw] bg-inherit h-[7vh] px-[2vw] border border-white rounded-[1vh]"
            placeholder="Email"
            type="text"
            name=""
            id=""
          />
          <button
            className="h-[7vh] text-[1vw] text-black w-[45%] bg-[#B9FF66] rounded-[1vh]"
            type="button"
          >
            Subscribe to news
          </button>
        </div>
      </div>
      <div className="mt-[5vh] border-[.1vh] border-white"></div>
      <div className="mt-[5vh]">
        <span className="mr-[2vw]">
          &#169; 2023 Positivus. All Rights Reserved.
        </span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
