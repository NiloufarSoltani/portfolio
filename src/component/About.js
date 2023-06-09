import Row from "./UI/Row";
import Information from "./Information";
import classes from "./About.module.css";
import Experience from "./Experience";
import Title from "./UI/Title";
import CV from "../assets/files/NiloufarSoltani_CV.pdf";

const About = () => {
  return (
    <div className={classes.about} id="about">
      <Row>
        <Title
          firstTitle="story"
          secondTitle="Professional "
          thirdTitle="Profile"
          align="left"
          first={true}
          dark={true}
        />
        <div className={classes.content}>
          <div className={classes.description}>
            Once upon a time in Iran, I embarked on a journey to pursue my
            passion for architecture, graduating in 2015. However, after
            spending a couple of years in the field, I realized that it wasn't
            the right career path for me. Determined to find my true calling, I
            set out to explore different industries, ultimately finding my way
            to the exciting world of information technology.
            <br />
            My transition into the IT realm began as a front-end intern at
            Rasha, a dynamic startup. It was here that I first delved into the
            realm of HTML and CSS, laying the foundation for my future
            endeavors. However, my insatiable curiosity led me to venture beyond
            the boundaries of design, leading me to the intriguing realm of
            Quality Assurance.
            <br /> At Fanap Holding, I took on the role of a QA specialist
            expert, diving deep into the world of software testing. This
            experience allowed me to hone my attention to detail, ensuring the
            highest level of product quality. Yet, deep down, my heart yearned
            for a more creative outlet, and I knew that my true calling lied in
            the realm of front-end development.
            <br />
            Driven by my passion, I took a leap of faith and returned to my
            roots at Rasha, this time as a front-end developer. Eager to expand
            my skill set, I embraced JavaScript and embarked on a journey of
            continuous learning. With each passing day, I discovered new
            frameworks and libraries, mastering the likes of React, Next.js,
            Jest, and TypeScript.
            <br />A new chapter in my life unfolded when my husband and I made
            the bold decision to immigrate to Canada 1.5 years ago. Despite the
            physical distance, my commitment to Rasha remained unwavering,
            allowing me to continue contributing remotely. However, my desire
            for connection and collaboration has brought me to this point,
            seeking opportunities to work closely with the vibrant community in
            Toronto.
            <br />
            With a diverse skill set, an unwavering work ethic, and a burning
            passion for front-end development, I am ready to take on new
            challenges, contribute to innovative projects, and immerse myself in
            the dynamic tech landscape of Toronto. I eagerly await the
            opportunity to connect with like-minded professionals, whether it be
            in a remote or on-site capacity. <br />
            This is the story of my journey so far, and I am excited to see what
            the future holds as I continue to pursue my dream career in
            front-end development.
          </div>
        </div>
        <div className={classes["personal-information"]}>
          <Information info="age" detail="30" />
          <Information info="gender" detail="Female" />
          <Information info="language" detail="English, Persian" />
          <a className={classes.cv} href={CV} download="NiloufarSoltani_CV.pdf">
            Download My CV
          </a>
        </div>
        <div className={classes.expertise}>
          <div>
            <h2 className={classes["inner-title"]}>
              Work <span>Experience</span>
            </h2>
            <div className={classes["experience-column"]}>
              <Experience
                title="Front-end Developer"
                location="Rasha Communications Development"
                duration="Jan 2021 - present"
                description="As a Front-end developer at Rasha, I developed high-performance web applications using React and JavaScript. I collaborated with backend engineers to build efficient APIs and worked closely with cross-functional teams to deliver new features. I also contributed to creating bilingual components and styles, ensuring a seamless user experience across different languages. Overall, my commitment to excellence, attention to detail, and continuous learning allowed me to make significant contributions to the success of the projects I worked on."
              />
              <Experience
                title="Quality Assurance Specialist"
                location="Fanap ICT Co"
                duration="Sept 2019 - Dec 2020"
                description="As a QA specialist at Fanap, I was responsible for ensuring the quality of three different products by writing comprehensive test scenarios and test cases, conducting unit tests and integration tests, and acting as a liaison between the development team, project managers, and business analysts."
              />
              <Experience
                title="Front-end developer"
                location="Rasha Communications Development"
                duration="Jan 2018 - Aug 2019"
                description="At Rasha, a startup company, I started as a UI intern, styling UI components, creating a Storybook, and migrating the project from CSS modules to Styled Components. I continued with Rasha as a full-time UI developer after completing my 4-month internship, gaining valuable experience with Scrum and effective team collaboration."
              />
            </div>
          </div>
          <div>
            <h2 className={classes["inner-title"]}>
              Education<span> & Diplomas</span>
            </h2>
            <div className={classes["experience-column"]}>
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
