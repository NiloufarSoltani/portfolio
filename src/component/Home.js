import { useEffect, useRef } from "react";

import Row from "./UI/Row";
import classes from "./Home.module.css";

const Home = () => {
  const homeRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let homeWidth = homeRef.current.getBoundingClientRect().width + 5;
      if (1025 < homeWidth) {
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * 0.5 - 250 + "px";
      } else if (768 < homeWidth && homeWidth < 1025) {
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * 0.23 + "px";
      } else if (homeWidth < 769) {
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * -0.5 + "px";
      } else {
        homeRef.current.style.backgroundPositionY =
          homeRef.current.getBoundingClientRect().top * 0.5 + "px";
      }
    });
  }, []);
  const scrollToMore = () => {
    const screenWidth = window.innerWidth;
    const homeHeight = document.getElementById("home").clientHeight;
    if (screenWidth > 768) {
      window.scrollTo({ top: homeHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: homeHeight - 72, behavior: "smooth" });
    }
  };
  return (
    <div className={classes.home} id="home" ref={homeRef}>
      <Row className={classes["home-content"]}>
        <div className={classes.img} ref={profileRef}></div>
        <div className={classes.info}>
          <div className={classes["job-title"]}>Front-end Developer</div>
          <div className={classes.name}>
            <span className={classes["first-name"]}>Niloufar </span>
            <span className={classes["last-name"]}>Soltani</span>
          </div>
          <div className={classes.descrption}>
            Hi, I’m Niloufar, a Frontend Developer with a background in QA,
            passionate about crafting polished, accessible, and user-friendly
            interfaces. My journey into frontend began after several years in
            quality assurance, where I developed a sharp eye for usability and
            functionality. Today, I build robust, modern web applications using
            React, TypeScript, and thoughtful UI/UX practices, grounded in that
            same attention to detail. I’m especially energized by fast-paced,
            collaborative environments where design and development work hand in
            hand to deliver great digital experiences. Adaptable and quick to
            grasp new concepts, I’ve successfully contributed to diverse
            projects at both startups and large-scale SaaS companies.
          </div>
          <button className={classes.more} onClick={scrollToMore}>
            More Info
          </button>
        </div>
      </Row>
    </div>
  );
};
export default Home;
