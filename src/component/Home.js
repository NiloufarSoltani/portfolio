import { useEffect, useRef } from "react";

import Row from "./UI/Row";
import classes from "./Home.module.css";

const Home = () => {
  const homeRef = useRef();
  const profileRef = useRef();
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let homeWidth = homeRef.current.getBoundingClientRect().width + 5;
      console.log(homeWidth);
      if (1025 < homeWidth) {
        console.log("large");
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * 0.5 - 250 + "px";
      } else if (768 < homeWidth && homeWidth < 1025) {
        console.log("small");
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * 0.23 + "px";
      } else if (homeWidth < 769) {
        console.log("ipad");
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * -0.5  + "px";
      } else {
        console.log('large');
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * 0.5 + "px";
      }
    });
  }, []);

  return (
    <div className={classes.home} id="home" ref={homeRef}>
      <Row className={classes["home-content"]}>
        <div className={classes.img} ref={profileRef}></div>
        <div className={classes.info}>
          <div className={classes["job-title"]}>Junior Front-end Developer</div>
          <div className={classes.name}>
            <span className={classes["first-name"]}>Niloufar </span>
            <span className={classes["last-name"]}>Soltani</span>
          </div>
          <div className={classes.descrption}>
            My experience as a web developer and test specialist have provided
            me with the opportunity to work on multiple projects simultaneously,
            and to work closely with cross-functional teams.
          </div>
          <button className={classes.more}>More Info</button>
        </div>
      </Row>
    </div>
  );
};
export default Home;
