import React from "react";
import { NavLink } from "react-router-dom";
import images from "../../assets";
const Landing: React.FC = () => {
  return (
    <section className="pt-28 min-h-screen">
      <div className=" w-full absolute flex justify-center -z-50">
        <div className="absolute -top-14 w-[380px] h-[380px] bg-[#882AE2] rounded-full filter blur-3xl opacity-30"></div>
        <div className=" relative top-44 w-72 h-72  bg-[#D65A4A] rounded-full filter blur-3xl opacity-30"></div>
        <div className="relative top-24 w-72 h-72 bg-[#23459C] rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className=" flex justify-center flex-col gap-12  md:flex-row p-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl text-center sm:text-justify font-cg_font_primary_bold md:font-cg_font_primary_semibold text-cg_color_primary ">
            👋Hallo, Selamat datang
          </h1>
          <h3 className="text-5xl pb-3 text-center sm:text-justify font-cg_font_primary_bold_italic text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#4A01E0]">
            Crygames
          </h3>
          <p className=" text-center sm:text-justify font-cg_font_primary_regular text-cg_color_primary">
            Topup - Voucher - Pulsa
          </p>

          <article className=" py-14 md:py-10 flex flex-col gap-4 text-center sm:text-justify">
            <p className="menu-list">🎮 Top-up diamond</p>
            <p className="menu-list">🎫 Voucher (Google play, Garena Shell)</p>
            <p className="menu-list">📱 Pulsa - All Operator</p>
          </article>
          <div className="flex flex-1 items-center w-auto mx-auto sm:mx-0 sm:w-2/6 md:w-2/3 lg:w-2/6 rounded-md  bg-gradient-to-r from-[#8A2BE2] to-[#4A01E0] font-cg_font_primary_regular  text-gray-50">
            <NavLink to="/topup" className=" px-5 py-3">
              Lihat List harga
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            className=" hidden md:block w-72 h-72 transform -rotate-12"
            src={images.AllShop}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
