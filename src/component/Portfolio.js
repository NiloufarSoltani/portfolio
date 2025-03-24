import Row from "./UI/Row";
import classes from "./Portfolio.module.css";
import ProjectItem from "./ProjectItem";
import bss from "../assets/img/bss1.jpeg";
import projectImg from "../assets/img/Mockup.jpg";
import saichologist from "../assets/img/saichologist.jpg";
import Title from "./UI/Title";

const Portfolio = () => {
  return (
    <div className={classes.portfolio} id="portfolio">
      <Row>
        <Title
          firstTitle="portfolio"
          secondTitle="Personal Projects"
          thirdTitle="My"
          dark={true}
        />
        <div className={classes.projects}>
          <ProjectItem
            image={saichologist}
            href="https://saichologist.com"
            name={
              <>
                <span>Saichologist, </span>AI-Powered Mental Health Assistant
              </>
            }
            description="Saichologist is a web and mobile app that supports mental health professionals by simplifying scheduling, recording sessions, and offering AI-generated insights.
I work with Next.js, TypeScript, and Azure to build responsive UI components and integrate core features with backend services.
The app combines thoughtful design with intelligent functionality to improve how therapists prepare for and manage their sessions."
          />
          <ProjectItem
            image={projectImg}
            href="https://niloufarsoltani.github.io/english-learning-app/"
            name={
              <>
                English learning<span> app</span>
              </>
            }
            description="Experience the ultimate language learning tool with this React-based app, combining React Router, Redux, CSS modules and Firebase authentication. Search word definitions, improve listening skills with captivating stories, and track vocabulary with flashcards. Perfect for language learners and educators alike."
          />
          <ProjectItem
            image={bss}
            name={<>Business Support System</>}
            description="This was a large-scale internal system designed to support the operations of a telecom service provider — managing everything from customer onboarding to billing, user permissions, and ticketing workflows. I contributed as a frontend developer, focusing on building and maintaining reusable UI components, implementing responsive layouts, and integrating the frontend with backend APIs. The system involved complex form structures, role-based dashboards, and data-heavy views, which required thoughtful state management and API handling."
          />
        </div>
      </Row>
    </div>
  );
};

export default Portfolio;
