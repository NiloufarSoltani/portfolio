import { FaCaretUp } from "react-icons/fa";

import classes from "./Footer.module.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }; 
  return (
    <div className={classes.footer}>
        <p>© 2023 owned by Niloufar - All rights reserved.</p>
        <p className={classes.update}>Last Updated March 2025</p>
      <button onClick={scrollTop} className={classes["scroll-top"]}>
        <FaCaretUp />
      </button>
    </div>
  );
};
export default Footer;
