import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";

import MenuButton from "./MenuButton";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <ul className={classes.navbar}>
      <li><MenuButton title="home" icon={<FaHome />} /></li>
      <li><MenuButton title="about" icon={<BsFillPersonFill />} /></li>
      <li><MenuButton title="skills" icon={<HiWrenchScrewdriver />} /></li>
      <li><MenuButton title="portfolio" icon={<BsBriefcaseFill />} /></li>
      <li><MenuButton title="contact" icon={<MdPermContactCalendar />} /></li>
    </ul>
  );
};
export default Navbar;
