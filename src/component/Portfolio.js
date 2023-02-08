import Row from "./UI/Row";
import classes from "./Portfolio.module.css";
import ProjectItem from "./ProjectItem";
import projectImg from "../assets/img/Mockup.jpg";
import projectImg2 from "../assets/img/Mockup2.jpg";

const Portfolio = () => {
  return (
    <div className={classes.portfolio} id="portfolio">
      <Row>
        <div className={classes.title}>
          <h1 className={classes["portfolio-title"]}>My Portfolio</h1>
          <h6 className={classes.subtitle}>My Personal Projects</h6>
        </div>
        <div className={classes.projects}>
          <ProjectItem
            backgroundImage={projectImg}
            href="https://niloufarsoltani.github.io/english-learning-app/"
            name="English learning app"
            description="Experience the ultimate language learning tool with this React-based app, combining React Router, Redux, CSS modules and Firebase authentication. Search word definitions, improve listening skills with captivating stories, and track vocabulary with flashcards. Perfect for language learners and educators alike."
          />
          <ProjectItem
            backgroundImage={projectImg2}
            href="https://react-foodorder-3cdbe.web.app/"
            name="basic food order app"
            description="Get a taste of convenience with this mock food ordering app built with React. Featuring custom hooks and React Context, this app offers a basic simulation of the ordering process. Explore its user-friendly interface and experience how it would feel to order food with ease, all without the need for a server. Perfect for learning and exploring the possibilities of React."
          />
        </div>
      </Row>
    </div>
  );
};

export default Portfolio;
