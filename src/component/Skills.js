import { useEffect, useState } from "react";

import Row from "./UI/Row";
import Sphere from "./UI/Sphere";
import classes from "./Skills.module.css";
import Title from "./UI/Title";

const Skills = () => {
  const [screenSize, setScreenSize] = useState("medium");
  useEffect(() => {
    if (window.innerWidth < 768) {
      setScreenSize("small");
    }
    if (window.innerWidth > 1200) {
      setScreenSize("large");
    }
  }, []);

  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      setScreenSize("large");
    } else if (screenWidth < 769) {
      setScreenSize("small");
    } else {
      setScreenSize("medium");
    }
  });

  return (
    <div className={classes.skills} id="skills">
      <Row>
        <div className={classes.header}>
          <Title
            firstTitle="skills"
            secondTitle="I Know"
            thirdTitle="What"
            first={false}
            dark={false}
          />
          <div className={classes.content}>
            I specialize in building user-facing applications with clean
            architecture and strong attention to detail. My core stack includes
            <b> JavaScript, React, TypeScript, and Next.js</b>, and I’ve used them to ship real
            features in production environments — from building new UI
            components to integrating complex APIs and refining the user
            experience. Working closely with backend developers and designers, I
            take ownership of the frontend — from translating designs into
            functional interfaces to managing state, handling edge cases, and
            ensuring performance and accessibility. I’m comfortable working in
            agile environments, reviewing pull requests, breaking down tasks,
            and continuously improving the codebase as part of a team. Beyond
            the technical side, I care about building interfaces that feel
            intuitive, maintainable, and responsive — both for the users and for
            the developers who work on them after me. I stay current with modern
            frontend practices, but more importantly, I focus on applying them
            in a way that creates real value.
          </div>
        </div>
        <div className={classes.graph}>
          <Sphere
            size={screenSize === "small" ? "88" : "117"}
            text="HTML"
            color="rgba(10, 10, 255, 0.3)"
            top={
              screenSize === "small"
                ? "69px"
                : screenSize === "medium"
                ? "94px"
                : "84px"
            }
            left={
              screenSize === "small"
                ? "175px"
                : screenSize === "medium"
                ? "206px"
                : "518px"
            }
          />
          <Sphere
            size={"175"}
            text="React"
            color="rgba(70, 130, 180, 0.3)"
            top="50%"
            left="50%"
          />
          <Sphere
            size={
              screenSize === "small"
                ? "107"
                : screenSize === "medium"
                ? "140"
                : "150"
            }
            text="TypeScript"
            color="rgba(255, 192, 203, 0.3)"
            top={
              screenSize === "small"
                ? "546px"
                : screenSize === "medium"
                ? "101px"
                : "128px"
            }
            left={
              screenSize === "small"
                ? "135px"
                : screenSize === "medium"
                ? "339px"
                : "386px"
            }
          />
          <Sphere
            size={
              screenSize === "small"
                ? "95"
                : screenSize === "medium"
                ? "133"
                : "143"
            }
            text="Next.js"
            color="rgba(255, 99, 71, 0.3)"
            top={
              screenSize === "small"
                ? "740px"
                : screenSize === "medium"
                ? "169px"
                : "370px"
            }
            left={
              screenSize === "small"
                ? "155px"
                : screenSize === "medium"
                ? "101px"
                : "-15px"
            }
          />
          <Sphere
            size={
              screenSize === "small"
                ? "110"
                : screenSize === "medium"
                ? "145"
                : "150"
            }
            text="JavaScript"
            color="rgba(255, 255, 0, 0.3)"
            top={
              screenSize === "small"
                ? "263px"
                : screenSize === "medium"
                ? "224px"
                : "236px"
            }
            left={
              screenSize === "small"
                ? "193px"
                : screenSize === "medium"
                ? "424px"
                : "68px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "97" : "130"}
            text="Jest"
            color="rgba(255, 215, 0, 0.3)"
            top={
              screenSize === "small"
                ? "642px"
                : screenSize === "medium"
                ? "393px"
                : "273px"
            }
            left={
              screenSize === "small"
                ? "181px"
                : screenSize === "medium"
                ? "159px"
                : "415px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "62" : "95"}
            text="Bootstrap"
            color="rgba(255, 127, 80, 0.3)"
            top={
              screenSize === "small"
                ? "128px"
                : screenSize === "medium"
                ? "425px"
                : "148px"
            }
            left={
              screenSize === "small"
                ? "229px"
                : screenSize === "medium"
                ? "402px"
                : "611px"
            }
          />
          <Sphere
            size={
              screenSize === "small"
                ? "98"
                : screenSize === "medium"
                ? "120"
                : "130"
            }
            text="Responsive Web Design"
            color="rgba(0, 255, 255, 0.3)"
            top={
              screenSize === "small"
                ? "164px"
                : screenSize === "medium"
                ? "409px"
                : "368px"
            }
            left={
              screenSize === "small"
                ? "150px"
                : screenSize === "medium"
                ? "290px"
                : "129px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "66" : "105"}
            text="REST API"
            color="rgba(245, 245, 220, 0.3)"
            top={
              screenSize === "small"
                ? "632px"
                : screenSize === "medium"
                ? "377px"
                : "128px"
            }
            left={
              screenSize === "small"
                ? "93px"
                : screenSize === "medium"
                ? "37px"
                : "153px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "66" : "100"}
            text="Sass"
            color="rgba(0, 255, 255, 0.3)"
            top={
              screenSize === "small"
                ? "569px"
                : screenSize === "medium"
                ? "291px"
                : "442px"
            }
            left={
              screenSize === "small"
                ? "225px"
                : screenSize === "medium"
                ? "101px"
                : "-120px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "59" : "80"}
            text="Scrum"
            color="rgba(220, 20, 60, 0.3)"
            top={
              screenSize === "small"
                ? "232px"
                : screenSize === "medium"
                ? "111px"
                : "55px"
            }
            left={
              screenSize === "small"
                ? "106px"
                : screenSize === "medium"
                ? "454px"
                : "617px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "60" : "90"}
            text="Redux"
            color="rgba(123, 10, 15, 0.3)"
            top={
              screenSize === "small"
                ? "291px"
                : screenSize === "medium"
                ? "333px"
                : "376px"
            }
            left={
              screenSize === "small"
                ? "84px"
                : screenSize === "medium"
                ? "370px"
                : "330px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "69" : "110"}
            text="agile"
            color="rgba(123, 10, 15, 0.3)"
            top={
              screenSize === "small"
                ? "498px"
                : screenSize === "medium"
                ? "345px"
                : "199px"
            }
            left={
              screenSize === "small"
                ? "228px"
                : screenSize === "medium"
                ? "476px"
                : "518px"
            }
          />
          <Sphere
            size={
              screenSize === "small"
                ? "60"
                : screenSize === "medium"
                ? "90"
                : "100"
            }
            text="CSS"
            color="rgba(255, 165, 0, 0.3)"
            top={
              screenSize === "small"
                ? "494px"
                : screenSize === "medium"
                ? "245px"
                : "97px"
            }
            left={
              screenSize === "small"
                ? "64px"
                : screenSize === "medium"
                ? "12px"
                : "258px"
            }
          />
          <Sphere
            size={screenSize === "small" ? "58" : "80"}
            text="Github"
            color="rgba(154, 205, 50, 0.3)"
            top={
              screenSize === "small"
                ? "187px"
                : screenSize === "medium"
                ? "488px"
                : "28px"
            }
            left={
              screenSize === "small"
                ? "238px"
                : screenSize === "medium"
                ? "219px"
                : "700px"
            }
          />
          <Sphere
            size={
              screenSize === "small"
                ? "50"
                : screenSize === "medium"
                ? "70"
                : "75"
            }
            text="CSS Module"
            color="rgba(128, 0, 128, 0.3)"
            top={
              screenSize === "small"
                ? "330px"
                : screenSize === "medium"
                ? "63px"
                : "390px"
            }
            left={
              screenSize === "small"
                ? "244px"
                : screenSize === "medium"
                ? "110px"
                : "238px"
            }
          />
          <Sphere
            size={
              screenSize === "small"
                ? "50"
                : screenSize === "medium"
                ? "65"
                : "65"
            }
            text="Web Development"
            color="rgba(36, 89, 83, 0.3)"
            top={
              screenSize === "small"
                ? "439px"
                : screenSize === "medium"
                ? "40px"
                : "100PX"
            }
            left={
              screenSize === "small"
                ? "40px"
                : screenSize === "medium"
                ? "426px"
                : "679px"
            }
          />
        </div>
      </Row>
    </div>
  );
};

export default Skills;
