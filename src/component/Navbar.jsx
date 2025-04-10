import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex w-[100px] items-center">
        <img
          className="h-[5vh] w-[3vw] mr-[5px] max-sm:h-[20px] max-sm:w-[20px]"
          src="./icons/Icon.png"
          alt=""
        />
        <span className="text-[3vw] font-semibold max-sm:text-[30px]">
          Positivus
        </span>
      </div>
      <div className="flex flex-1 text-[1vw] max-w-[70%] justify-around max-sm:hidden">
        <button>About us</button>
        <button>Service</button>
        <button>Use Cases</button>
        <button>Pricing</button>
        <button>Blog</button>
        <button className="px-[20px] py-[10px] rounded-[10px] border-black border border-solid">
          Request a quote
        </button>
      </div>
      <img
        className="md:hidden w-[20px] h-[20px] cursor-pointer"
        src="./icons/burger-icon.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
