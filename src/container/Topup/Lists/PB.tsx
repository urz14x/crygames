import React from "react";
import images from "../../../assets";
const PB: React.FC = () => {
  return (
    <section className=" pt-10 min-h-screen">
      <div className=" w-full absolute flex justify-center -z-50">
        <div className="absolute -top-14 w-[380px] h-[380px] bg-[#882AE2] rounded-full filter blur-3xl opacity-30"></div>
        <div className=" relative top-44 w-72 h-72  bg-[#D65A4A] rounded-full filter blur-3xl opacity-30"></div>
        <div className="relative top-24 w-72 h-72 bg-[#23459C] rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className=" flex justify-center items-center flex-col antialiased mt-12">
        <section className="flex space-x-3 px-2 py-2 cursor-pointer">
          <img
            className=" w-20 h-20"
            src={images.PB}
            alt="Top up Point blank"
          />
          <div className="flex flex-col">
            <h1 className=" text-cg_color_primary font-cg_font_primary_bold">
              Poin Blank Cash
            </h1>
            <p className=" font-cg_font_primary_regular text-[#838383] mb-1">
              Zeppeto
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PB;
