import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Introduction } from "../components/Introduction";

export const Header = () => {
  return (
    <div className="flex flex-col gap-5   bg-orange-500">
      <div className="flex flex-row justify-between items-center bg-white text-orange-600 p-4 fixed top-0 right-0 left-0">
        <div>
          <Link to={"/"} className="font-bold text-2xl">
            MERN Stack Developer
          </Link>
        </div>
        <FontAwesomeIcon icon={faBars} className="md:hidden" />
        <div className="hidden md:flex flex-row gap-4">
          <Link to={"#"} className="font-semibold text-xl">
            About
          </Link>
          <Link to={"#"} className="font-semibold text-xl">
            Skills
          </Link>
          <Link to={"#"} className="font-semibold text-xl">
            Experience
          </Link>
          <Link to={"#"} className="font-semibold text-xl">
            Work
          </Link>
          <Link to={"#"} className="font-semibold text-xl">
            Contact
          </Link>
        </div>
      </div>
      <div className="hidden gap-4">
        <Link to={"#"}>About</Link>
        <Link to={"#"}>Skills</Link>
        <Link to={"#"}>Experience</Link>
        <Link to={"#"}>Work</Link>
        <Link to={"#"}>Contact</Link>
      </div>
      <Introduction />
    </div>
  );
};
