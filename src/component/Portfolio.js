import Row from "./UI/Row";
import classes from "./Portfolio.module.css";
import ProjectItem from "./ProjectItem";
import project1 from "../assets/img/niloo.jpg";

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
            backgroundImage={project1}
            href='https://niloufarsoltani.github.io/english-learning-app/'
            name="English learning app"
            description="Experience the ultimate language learning tool with this React-based app, combining React Router, Redux, CSS modules and Firebase authentication. Search word definitions, improve listening skills with captivating stories, and track vocabulary with flashcards. Perfect for language learners and educators alike."
          />
          <ProjectItem backgroundImage={project1} name="x" description="g" />
        </div>
      </Row>
    </div>
  );
};

export default Portfolio;
