import Row from "./UI/Row";
import classes from "./Portfolio.module.css";
import ProjectItem from "./ProjectItem";
import projectImg from "../assets/img/Mockup.jpg";
import projectImg2 from "../assets/img/Mockup2.jpg";
import Title from "./UI/Title";

const Portfolio = () => {
  return (
    <div className={classes.portfolio} id="portfolio">
      <Row>
        <Title firstTitle='portfolio' secondTitle='Personal Projects' thirdTitle='My' dark={true} />
        <div className={classes.projects}>
          <ProjectItem
            image={projectImg}
            href="https://niloufarsoltani.github.io/english-learning-app/"
            name={<>English learning<span> app</span></>}
            description="Experience the ultimate language learning tool with this React-based app, combining React Router, Redux, CSS modules and Firebase authentication. Search word definitions, improve listening skills with captivating stories, and track vocabulary with flashcards. Perfect for language learners and educators alike."
          />
          <ProjectItem
            image={projectImg2}
            href="https://react-foodorder-3cdbe.web.app/"
            name={<><span>basic </span>food order<span> app</span></>}
            description="Get a taste of convenience with this mock food ordering app built with React. Featuring custom hooks and React Context, this app offers a basic simulation of the ordering process. Explore its user-friendly interface and experience how it would feel to order food with ease, all without the need for a server. Perfect for learning and exploring the possibilities of React."
          />
        </div>
      </Row>
    </div>
  );
};

export default Portfolio;
