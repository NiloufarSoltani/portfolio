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
            As a junior front-end developer, I am constantly learning and
            expanding my skill set through personal projects, self-study. While
            I may not have extensive IT experience, I am dedicated to honing my
            craft and delivering high-quality work. Through my self-study and
            personal projects, I have gained practical experience with various
            technologies and frameworks, allowing me to build a solid foundation
            in front-end development. Additionally, my professional work has
            given me valuable exposure to real-world projects, where I have
            collaborated with more experienced developers and improved my skills
            in a team setting.
          </div>
        </div>
        <div className={classes.graph}>
          <Sphere
            size={screenSize==='small' ? "88" : "117"}
            text="HTML"
            color="rgba(10, 10, 255, 0.3)"
            top={screenSize==='small' ? "69px" : screenSize==='medium' ? "94px" : '84px'}
            left={screenSize==='small' ? "175px" : screenSize==='medium' ? "206px" : '518px'}
          />
          <Sphere
            size={"175"}
            text="JavaScript"
            color="rgba(70, 130, 180, 0.3)"
            top="50%"
            left="50%"
          />
          <Sphere
          size={screenSize==='small' ? "107" : screenSize==='medium' ? "140" : '150'}
            text="CSS"
            color="rgba(255, 192, 203, 0.3)"
            top={screenSize==='small' ? "546px" : screenSize==='medium' ? "101px" : '128px'}
            left={screenSize==='small' ? "135px" : screenSize==='medium' ? "339px" : '386px'}
          />
          <Sphere
            size={screenSize==='small' ? "95" : screenSize==='medium' ? "133" : '143'}
            text="CSS Module"
            color="rgba(255, 99, 71, 0.3)"
            top={screenSize==='small' ? "740px" : screenSize==='medium' ? "169px" : '370px'}
            left={screenSize==='small' ? "155px" : screenSize==='medium' ? "101px" : '-15px'}
          />
          <Sphere
            size={screenSize==='small' ? "110" : screenSize==='medium' ? "145" : '150'}
            text="React"
            color="rgba(255, 255, 0, 0.3)"
            top={screenSize==='small' ? "263px" : screenSize==='medium' ? "224px" : '236px'}
            left={screenSize==='small' ? "193px" : screenSize==='medium' ? "424px" : '68px'}
          />
          <Sphere
            size={screenSize==='small' ? "97" : "130"}
            text="Web Development"
            color="rgba(255, 215, 0, 0.3)"
            top={screenSize==='small' ? "642px" : screenSize==='medium' ? "393px" : '273px'}
            left={screenSize==='small' ? "181px" : screenSize==='medium' ? "159px" : '415px'}
          />
          <Sphere
            size={screenSize==='small' ? "62" : "95"}
            text="Bootstrap"
            color="rgba(255, 127, 80, 0.3)"
            top={screenSize==='small' ? "128px" : screenSize==='medium' ? "425px" : '148px'}
            left={screenSize==='small' ? "229px" : screenSize==='medium' ? "402px" : '611px'}
          />
          <Sphere
            size={screenSize==='small' ? "98" : screenSize==='medium' ? "120" : '130'}
            text="Responsive Web Design"
            color="rgba(0, 255, 255, 0.3)"
            top={screenSize==='small' ? "164px" : screenSize==='medium' ? "409px" : '368px'}
            left={screenSize==='small' ? "150px" : screenSize==='medium' ? "290px" : '129px'}
          
          />
          <Sphere
            size={screenSize==='small' ? "66" : "105"}
            text="scrum"
            color="rgba(245, 245, 220, 0.3)"
            top={screenSize==='small' ? "632px" : screenSize==='medium' ? "377px" : '128px'}
            left={screenSize==='small' ? "93px" : screenSize==='medium' ? "37px" : '153px'}
          />
          <Sphere
            size={screenSize==='small' ? "66" : "100"}
            text="Sass"
            color="rgba(0, 255, 255, 0.3)"
            top={screenSize==='small' ? "569px" : screenSize==='medium' ? "291px" : '442px'}
            left={screenSize==='small' ? "225px" : screenSize==='medium' ? "101px" : '-120px'}
          />
          <Sphere
            size={screenSize==='small' ? "59" : "80"}
            text="REST API"
            color="rgba(220, 20, 60, 0.3)"
            top={screenSize==='small' ? "232px" : screenSize==='medium' ? "111px" : '55px'}
            left={screenSize==='small' ? "106px" : screenSize==='medium' ? "454px" : '617px'}
          />
          <Sphere
            size={screenSize==='small' ? "60" : "90"}
            text="Redux"
            color="rgba(123, 10, 15, 0.3)"
            top={screenSize==='small' ? "291px" : screenSize==='medium' ? "333px" : '376px'}
            left={screenSize==='small' ? "84px" : screenSize==='medium' ? "370px" : '330px'}
          />
          <Sphere
            size={screenSize==='small' ? "69" : "110"}
            text="agile"
            color="rgba(123, 10, 15, 0.3)"
            top={screenSize==='small' ? "498px" : screenSize==='medium' ? "345px" : '199px'}
            left={screenSize==='small' ? "228px" : screenSize==='medium' ? "476px" : '518px'}
          />
          <Sphere
            size={screenSize==='small' ? "60" : screenSize==='medium' ? "90" : '100'}
            text="React Hooks"
            color="rgba(255, 165, 0, 0.3)"
            top={screenSize==='small' ? "494px" : screenSize==='medium' ? "245px" : '97px'}
            left={screenSize==='small' ? "64px" : screenSize==='medium' ? "12px" : '258px'}
          />
          <Sphere
            size={screenSize==='small' ? "58" : "80"}
            text="Github"
            color="rgba(154, 205, 50, 0.3)"
            top={screenSize==='small' ? "187px" : screenSize==='medium' ? "488px" : '28px'}
            left={screenSize==='small' ? "238px" : screenSize==='medium' ? "219px" : '700px'}
          />
          <Sphere
            size={screenSize==='small' ? "50" : screenSize==='medium' ? "70" : '75'}
            text="Gitlab"
            color="rgba(128, 0, 128, 0.3)"
            top={screenSize==='small' ? "330px" : screenSize==='medium' ? "63px" : '390px'}
            left={screenSize==='small' ? "244px" : screenSize==='medium' ? "110px" : '238px'}
          />
        </div>
      </Row>
    </div>
  );
};

export default Skills;
