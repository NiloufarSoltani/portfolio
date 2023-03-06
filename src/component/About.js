import Row from "./UI/Row";
import Information from "./Information";
import classes from "./About.module.css";
import Experience from "./Experience";
import Title from "./UI/Title";
import CV from '../assets/files/NiloufarSoltani_CV.pdf';

const About = () => {
  return (
    <div className={classes.about} id="about">
      <Row>
        <Title firstTitle='story' secondTitle='Professional ' thirdTitle='Profile' align='left' first={true} dark={true} />
        <div className={classes.content}>
          <div className={classes.description}>
            My journey to becoming a junior front-end developer began as a QA
            specialist, where I developed an eye for detail and a passion for
            delivering high-quality software. As I worked with developers, I
            became increasingly interested in front-end development and was
            inspired by the possibilities of creating intuitive and visually
            appealing user interfaces.
            <br /> Driven by this newfound passion, I decided to take the leap
            and leave my job to pursue my dream of becoming a front-end
            developer. Through rigorous self-study, personal projects, and
            professional work, I have developed a strong foundation in front-end
            development and have acquired expertise in various technologies and
            frameworks.
            <br /> My goal is to continue to grow my skills and knowledge, and
            to create engaging and user-friendly web applications that provide
            value to both clients and end-users. I am excited to be a part of
            this dynamic field and am dedicated to delivering high-quality work
            that meets the needs of the ever-changing web landscape.
          </div>
        </div>
        <div className={classes["personal-information"]}>
          <Information info="age" detail="28" />
          <Information info="gender" detail="Female" />
          <Information info="language" detail="English, Persian" />
          <a className={classes.cv}  href={CV} download="NiloufarSoltani_CV.pdf">Download My CV</a>
        </div>
        <div className={classes.expertise}>
          <div>
            <h2 className={classes['inner-title']}>Work <span>Experience</span></h2>
            <div className={classes['experience-column']}>
            <Experience
              title="Quality Assurance Specialist"
              location="Fanap"
              duration="Sept 2019 - Dec 2020"
              description="As a QA specialist at Fanap, I was responsible for ensuring the quality of three different products by writing comprehensive test scenarios and test cases, conducting unit tests and integration tests, and acting as a liaison between the development team, project managers, and business analysts."
            />
            <Experience
              title="Front-end developer"
              location="Rasha Communications Development"
              duration="Jan 2018 - Aug 2019"
              description='At Rasha, a startup company, I started as a UI intern, designing and implementing UI components, creating a Storybook, and migrating the project from CSS modules to Styled Components. I continued with Rasha as a full-time UI developer after completing my 4-month internship, gaining valuable experience with Scrum and effective team collaboration.'
            />
            </div>
          </div>
          <div>
            <h2 className={classes['inner-title']}>Education<span> & Diplomas</span></h2>
            <div className={classes['experience-column']}>
            <Experience
              title="Bachelor of Architecture"
              location="University of Bonab"
              duration="Sept 2011 - May 2015"
              description="I hold a Bachelor's degree in Architecture, which honed my creativity and critical thinking skills. Although my current career in IT may seem unrelated, my attention to detail and problem-solving abilities have been invaluable in software development and testing. My design skills have also been useful in creating user-friendly interfaces."
            />
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default About;
