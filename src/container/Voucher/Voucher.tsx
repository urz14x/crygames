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
const Voucher: React.FC = () => {
  const lists: TLists[] = [
    {
      name: "Garena Shell",
      image: images.GarenaShell,
      publisher: "Garena",
      platform: "PC",
      link: "garenashell",
    },
    {
      name: "Google Play",
      image: images.GooglePlay,
      publisher: "Google Inc.",
      platform: "Mobile",
      link: "googleplay",
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
          Mau Voucher apa?
        </h1>
        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {lists.map((list: TLists, id: number) => {
            return (
              <Card
                key={id}
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

export default Voucher;
