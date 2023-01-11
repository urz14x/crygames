import React, { useState, useRef, ReactEventHandler } from "react";
import images from "../../assets/index";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const hamburger_btn: any = useRef(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const hamburger = (event: React.MouseEvent<HTMLElement>) => {
    setShowMenu(!showMenu);
    hamburger_btn.current.classList.toggle("active");
  };
  return (
    <header>
      <nav className="py-3 md:py-0 px-0 md:px-20 lg:px-32 bg-transparent">
        <div className="flex flex-col justify-between md:flex-row">
          <header className="flex items-center justify-between px-9 pb-6 md:pb-0">
            <button
              className="hamburger md:hidden"
              ref={hamburger_btn}
              onClick={hamburger}
            >
              <span className="line"></span>
              <span className="line"></span>
            </button>

            <nav>
              <NavLink to="/">
                <img className=" w-12" src={images.Logo} alt="Crygames logo" />
              </NavLink>
            </nav>
          </header>
          <nav>
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
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
