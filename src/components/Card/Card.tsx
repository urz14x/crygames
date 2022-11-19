import React from "react";
import { NavLink } from "react-router-dom";

type TLists = {
  name: string;
  image: string;
  publisher: string;
  platform: string;
  link: string;
};

const Card = (props: TLists) => {
  return (
    <NavLink to={props.link}>
      <section className="flex space-x-3 bg-white rounded-md shadow-md px-2 py-2 hover:ring-4 hover:ring-[#4E04E0] transition-all cursor-pointer">
        <img
          className=" w-20 h-20"
          src={props.image}
          alt="Top up Point blank"
        />
        <div className="flex flex-col">
          <h1 className=" text-cg_color_primary font-cg_font_primary_bold">
            {props.name}
          </h1>
          <p className=" font-cg_font_primary_regular text-[#838383] mb-1">
            {props.publisher}
          </p>
          {props.platform == "Mobile" ? (
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
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          ) : (
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
          )}
        </div>
      </section>
    </NavLink>
  );
};

export default Card;
