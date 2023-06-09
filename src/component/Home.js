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
            Passionate front-end developer with expertise in QA engineering,
            driving innovation in web application development. Adaptable and
            quick to grasp new concepts, I have successfully managed diverse
            projects at both startup and large-scale SaaS companies. My focus is
            on creating immersive user experiences through clean and efficient
            code. With meticulous attention to detail, I ensure optimal quality
            and performance. I thrive in collaborative environments, fostering
            teamwork to deliver exceptional results. I constantly seek to
            enhance my skills and stay at the forefront of front-end
            development. Let's shape the future of digital experiences together.
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
