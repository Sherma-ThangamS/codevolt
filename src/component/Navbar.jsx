import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex w-[100px] items-center">
        <img
          className="h-[5vh] w-[3vw] mr-[5px] max-sm:h-[3.5vh]"
          src="./icons/Icon.png"
          alt=""
        />
        <span className="text-[3vw] font-semibold max-sm:text-[4vh]">
          Positivus
        </span>
      </div>
      <div className="flex flex-1 text-[1vw] max-w-[70%] justify-around">
        <button>About us</button>
        <button>Service</button>
        <button>Use Cases</button>
        <button>Pricing</button>
        <button>Blog</button>
        <button className="px-[20px] py-[10px] rounded-[10px] border-black border border-solid">
          Request a quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
