import React from "react";

const Testimonials = () => {
  return (
    <div className="mt-[8vh] h-[100vh]">
      <div className="flex w-[60vw] max-sm:text-center">
        <span className="bg-[#B9FF66] px-[.7vw] rounded-[1vh] text-[2vw] font-semibold mr-[3vw] text-center max-sm:block">
          Testimonials
        </span>
        <div className="text-[1vw] max-sm:text-center">
          <p>Hear from Our Satisfied Clients: Read Our Testimonials </p>
          <p>to Learn More about Our Digital Marketing Services</p>
        </div>
      </div>
      <div className="bg-black mt-[8vh] h-[80vh] rounded-[4vh] text-white py-[1vh]">
        <div className="mt-[8vh] flex gap-[2vw]">
          <div className="mx-auto">
            <div className="w-[35vw] h-[35vh] p-[2vw] border border-[#B9FF66] overflow-scroll rounded-[4vh]">
              <p className="text-[1.2vw]">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
            <div className="ml-[4vw] mt-[4vh]">
              <p className="text-[#B9FF66]">John Smith</p>
              <p>Marketing Director at XYZ Corp</p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="w-[35vw] h-[35vh] p-[2vw] border border-[#B9FF66] overflow-scroll rounded-[4vh]">
              <p className="text-[1.2vw]">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
            <div className="ml-[4vw] mt-[4vh]">
              <p className="text-[#B9FF66]">John Smith</p>
              <p>Marketing Director at XYZ Corp</p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="w-[35vw] h-[35vh] p-[2vw] border border-[#B9FF66] overflow-scroll rounded-[4vh]">
              <p className="text-[1.2vw]">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
            <div className="ml-[4vw] mt-[4vh]">
              <p className="text-[#B9FF66]">John Smith</p>
              <p>Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </div>
        <div className="flex mt-[8vh] text-[2vw] justify-center">
          <button className="mr-[10vw]">&#x2190;</button>
          <div className="gap-[1vw]">
            <button className="ml-[1vw]">&#x2022;</button>
            <button className="ml-[1vw]">&#x2022;</button>
            <button className="ml-[1vw]">&#x2022;</button>
            <button className="ml-[1vw]">&#x2022;</button>
          </div>
          <button className="ml-[10vw]">&#x2192;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
