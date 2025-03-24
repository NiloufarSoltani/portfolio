import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";

import MenuButton from "./MenuButton";
import Logo from '../../assets/img/logo.png';
import classes from "./Navbar.module.css";

const Navbar = () => {
  const isSmall = window.innerWidth < 768;
  const [smallScreen, setSmallScreen] = useState(isSmall);
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 769) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  });

  useEffect(() => {
    if (smallScreen) {
      document.getElementById("home").style.paddingTop = "72px";
    } else {
      document.getElementById("home").style.paddingTop = "unset";
    }
  }, [smallScreen]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "unset";
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return !smallScreen ? (
    <div className={classes.navbar}>
      <MenuButton title="home" icon={<FaHome />} />
      <MenuButton title="about" icon={<BsFillPersonFill />} />
      <MenuButton title="skills" icon={<HiWrenchScrewdriver />} />
      <MenuButton title="portfolio" icon={<BsBriefcaseFill />} />
      <MenuButton title="contact" icon={<MdPermContactCalendar />} />
    </div>
  ) : (
    <div className={classes["full-page-navbar"]}>
      <div
        className={classes["menu-nav"]}
        onClick={() => {
          setShowMenu((prevState) => !prevState);
        }}
      >
        {showMenu ? (
          <MdOutlineClose />
        ) : (
          <>
            <img className={classes.logo} src={Logo} alt='logo' />
            <div className={classes["nav-icon"]}>
              <span className={classes.lines} />
              <span className={classes.lines} />
              <span className={classes.lines} />
            </div>
          </>
        )}
      </div>
      {showMenu && (
        <div className={classes.menu}>
          <MenuButton
            title="home"
            func={() => setShowMenu(false)}
            topNav={smallScreen}
          />
          <MenuButton
            title="about"
            func={() => setShowMenu(false)}
            topNav={smallScreen}
          />
          <MenuButton
            title="skills"
            func={() => setShowMenu(false)}
            topNav={smallScreen}
          />
          <MenuButton
            title="portfolio"
            func={() => setShowMenu(false)}
            topNav={smallScreen}
          />
          <MenuButton
            title="contact"
            func={() => setShowMenu(false)}
            topNav={smallScreen}
          />
        </div>
      )}
    </div>
  );
};
export default Navbar;
