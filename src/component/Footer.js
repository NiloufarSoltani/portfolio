import { FaCaretUp } from "react-icons/fa";

import Row from "./UI/Row";
import classes from "./Footer.module.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }; 
  return (
    <div className={classes.footer}>
      <Row>
        <p>© 2023 owned by Niloufar - All rights reserved.</p>
        <p className={classes.update}>Last Updated February 2023</p>
      </Row>
      <button onClick={scrollTop} className={classes["scroll-top"]}>
        <FaCaretUp />
      </button>
    </div>
  );
};
export default Footer;
