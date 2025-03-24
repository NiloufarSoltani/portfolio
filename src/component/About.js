import Row from "./UI/Row";
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
            My path into frontend development wasn’t linear — but it was driven
            by curiosity, creativity, and a desire to build things people
            actually use.
            <br />
            I got my start in tech by exploring HTML and CSS at a small startup,
            where I discovered how exciting it is to bring interfaces to life in
            the browser. That early experience quickly grew into a passion for
            frontend development, and I soon found myself diving deeper into
            JavaScript, React, and the entire modern frontend ecosystem. <br />
            Along the way, I also gained hands-on experience in software
            testing, which helped me understand how products behave under
            real-world conditions. But while testing gave me a strong eye for
            quality, my heart was always in building — so I made a full
            transition to frontend development. <br />
            As a developer at Rasha, I worked on React-based applications,
            improving both the codebase and the user experience. I learned how
            to collaborate across design, QA, and backend teams, and I built
            real features used by real people. <br />
            In 2022, after moving to Canada, I continued working remotely with
            Rasha before joining Saichologist, a Denmark-based mental wellness
            startup, as a Frontend Developer. In this role, I’ve helped shape
            the UI from scratch, implementing new features, collaborating on UX
            decisions, and focusing on performance, scalability, and clean
            architecture. <br />
            Now, I’m fully focused on frontend — bringing together creativity,
            problem-solving, and a deep respect for users. With a diverse skill
            set, an unwavering work ethic, and a burning passion for front-end
            development, I am ready to take on new challenges, contribute to
            innovative projects, and immerse myself in the dynamic tech
            landscape of Toronto. I eagerly await the opportunity to connect
            with like-minded professionals, whether it be in a remote or on-site
            capacity. <br />
            This is the story of my journey so far, and I am excited to see what
            the future holds as I continue to pursue my dream career in
            front-end development.
          </div>
        </div>
        {/* <div className={classes["personal-information"]}> */}
        <ul className={classes.more}>
          <li>Based in Toronto 🇨🇦 (open to hybrid or remote)</li>
          <li>4+ years experience in tech (frontend-focused)</li>
          <li>Tech stack: React, TypeScript, Next.js, Redux, Git, Jest</li>
          <li>Worked with teams across 🇮🇷 Iran, 🇩🇰 Denmark, and 🇨🇦 Canada</li>
        </ul>
        <a className={classes.cv} href={CV} download="NiloufarSoltani_CV.pdf">
          Download My CV
        </a>
        {/* </div> */}
        <div className={classes.expertise}>
          <div>
            <h2 className={classes["inner-title"]}>
              Work <span>Experience</span>
            </h2>
            <div className={classes["experience-column"]}>
              <Experience
                title="Front-end Developer"
                location="Saichologist"
                duration="May 2024 - present"
                description={[
                  "Building a mental wellness platform using Next.js, React, and TypeScript",
                  "Integrating with backend services through REST APIs, ensuring seamless data flow",
                  "Collaborating closely with designers and backend developers to create clean, scalable components",
                  "Focused on performance, accessibility, and delivering features users love",
                ]}
              />
              <Experience
                title="Front-end Developer"
                location="Rasha Communications Development"
                duration="Nov 2021 - May 2024"
                description={[
                  "Led the migration from CSS Modules to Styled Components, improving consistency and maintainability",
                  "Designed and built reusable React components across multiple projects",
                  "Contributed to UI architecture and worked closely with QA to ensure testability",
                  "Used tools like Git, Jira, and Figma in a fully remote, async-friendly team",
                ]}
              />
              <Experience
                title="Quality Assurance Analyst"
                location="Fanap ICT Co"
                duration="Sept 2019 - Oct 2021"
                description={[
                  "Tested SaaS-based financial applications across web and mobile platforms",
                  "Designed and executed test plans for regression, integration, and UI testing",
                  "Worked closely with developers and product managers to catch bugs early and improve product quality",
                  "Provided UX feedback and helped streamline the QA process",
                ]}
              />
              <Experience
                title="Quality Assurance Specialist"
                location="Rasha Communications Development"
                duration="Jan 2018 - Aug 2019"
                description={[
                  "Verified and validated bug fixes in collaboration with the dev team",
                  "Helped coordinate team-wide QA efforts through test case documentation and feedback loops",
                  "Ran exploratory testing to uncover hidden issues before release",
                  "Gained foundational experience in software quality that later informed my frontend development work",
                ]}
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
