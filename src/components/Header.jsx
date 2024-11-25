import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Introduction } from "../components/Introduction";
import { useState } from "react";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleClass = () => {
    if (showMobileMenu !== false) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-main min-h-52 md:min-h-96">
      <div className="border-t-8 border-main flex flex-row justify-between items-center bg-slate-100 text-gray-700 mx-5 p-4 fixed top-0 right-0 left-0">
        <div>
          <Link to={"/"} className="font-bold text-xl md:text-2xl">
            <span className="text-main">M</span>ERN{" "}
            <span className="text-main">S</span>tack
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="md:hidden text-main text-xl"
          onClick={toggleClass}
        />
        <div className="hidden md:flex flex-row gap-4">
          <Link to={"#"} className="text-xl hover:text-main">
            About
          </Link>
          <Link to={"#"} className="text-xl hover:text-main">
            Skills
          </Link>
          <Link to={"#"} className="text-xl hover:text-main">
            Experience
          </Link>
          <Link to={"#"} className="text-xl hover:text-main">
            Work
          </Link>
          <Link to={"#"} className="text-xl hover:text-main">
            Contact
          </Link>
        </div>
      </div>
      {showMobileMenu && (
        <ul className="flex flex-col fixed  top-20 right-5 bg-gray-300 items-center w-36 gap-4 rounded-xl p-6">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <a href="#contact">Contact</a>
          <li></li>
        </ul>
      )}
      <Introduction />
    </div>
  );
};
