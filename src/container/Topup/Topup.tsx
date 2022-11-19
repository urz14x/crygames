import React from "react";
import { NavLink } from "react-router-dom";
import images from "../../assets/";
import Card from "../../components/Card/Card";

type TLists = {
  name: string;
  image: string;
  publisher: string;
  platform: string;
  link: string;
};
const Topup: React.FC = () => {
  const lists: TLists[] = [
    {
      name: "Point Blank",
      image: images.PB,
      publisher: "Zeppeto",
      platform: "PC",
      link: "pointblank",
    },
    {
      name: "Mobile Legends",
      image: images.ML,
      publisher: "Moonton",
      platform: "Mobile",
      link: "mobilelegends",
    },
    {
      name: "Free Fire",
      image: images.FF,
      publisher: "Garena",
      platform: "Mobile",
      link: "freefire",
    },
    {
      name: "Call of duty Mobile",
      image: images.COD,
      publisher: "Garena",
      platform: "Mobile",
      link: "callofduttymobile",
    },
  ];
  return (
    <section className=" pt-10 min-h-screen">
      <div className=" w-full absolute flex justify-center -z-50">
        <div className="absolute -top-14 w-[380px] h-[380px] bg-[#882AE2] rounded-full filter blur-3xl opacity-30"></div>
        <div className=" relative top-44 w-72 h-72  bg-[#D65A4A] rounded-full filter blur-3xl opacity-30"></div>
        <div className="relative top-24 w-72 h-72 bg-[#23459C] rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className=" flex justify-center items-center flex-col antialiased mt-12">
        <h1 className=" mb-16 text-cg_color_primary font-cg_font_primary_bold text-2xl md:text-5xl">
          Mau Top up apa?
        </h1>
        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {lists.map((list: TLists) => {
            return (
              <Card
                link={list.link}
                name={list.name}
                publisher={list.publisher}
                platform={list.platform}
                image={list.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Topup;
