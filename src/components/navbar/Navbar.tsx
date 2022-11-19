import React, { useState, useRef } from "react";
import images from "../../assets/index";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const burgers = useRef();
  const nav_handler = () => {
    setShowMenu(!showMenu);
    burgers.current.classList.toggle("active");
  };
  return (
    <header>
      <nav className="py-3 md:py-0 px-0 md:px-20 lg:px-32 bg-transparent">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex items-center justify-between px-9 pb-6 md:pb-0">
            <button
              ref={burgers}
              className="hamburger block md:hidden"
              onClick={nav_handler}
            >
              <span className="line"></span>
              <span className="line"></span>
            </button>

            <div>
              <NavLink to="/">
                <img className=" w-12" src={images.Logo} alt="Crygames logo" />
              </NavLink>
            </div>
          </div>
          <div>
            <div
              className={`${
                showMenu ? "block" : "hidden"
              } md:flex flex-col md:flex-row`}
            >
              <NavLink className="nav-btn" to="/topup">
                Topup
              </NavLink>
              <NavLink className="nav-btn" to="/voucher">
                Voucher
              </NavLink>
              <NavLink className="nav-btn" to="/pulsa">
                Pulsa
              </NavLink>
              <NavLink className="nav-btn" to="/pulsa">
                Cara kerja
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
