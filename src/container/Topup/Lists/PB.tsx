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
      <div className=" flex justify-center items-center flex-col antialiased mt-12 space-y-5">
        <section className="flex space-x-3 p-2 cursor-pointer bg-white rounded-md">
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
        <div className="bg-white w-80 h-44 p-3 rounded-md  ">
          <div className="grid grid-cols-2 py-5 px-3 gap-6 text-center">
            <div className=" flex py-2 items-center justify-center gap-1 border-2 border-gray-500 rounded-md font-cg_font_primary_bold text-cg_color_primary antialiased hover:ring hover:ring-[#4E04E0] cursor-pointer">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1875 5.04688C15.1875 6.85029 12.417 8.3125 9 8.3125C5.583 8.3125 2.8125 6.85029 2.8125 5.04688M15.1875 5.04688C15.1875 3.24346 12.417 1.78125 9 1.78125C5.583 1.78125 2.8125 3.24346 2.8125 5.04688M15.1875 5.04688V13.9531C15.1875 15.7565 12.417 17.2188 9 17.2188C5.583 17.2188 2.8125 15.7565 2.8125 13.9531V5.04688M15.1875 5.04688V8.01563M2.8125 5.04688V8.01563M15.1875 8.01563V10.9844C15.1875 12.7878 12.417 14.25 9 14.25C5.583 14.25 2.8125 12.7878 2.8125 10.9844V8.01563M15.1875 8.01563C15.1875 9.81904 12.417 11.2813 9 11.2813C5.583 11.2813 2.8125 9.81904 2.8125 8.01563"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2 className="">1200 Cash</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PB;
