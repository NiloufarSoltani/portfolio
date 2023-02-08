import Row from "./UI/Row";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home} id='home'>
      <Row className={classes["home-content"]}>
        <div className={classes.img}></div>
        <div className={classes.info}>
          <div className={classes.name}>
            <span className={classes["first-name"]}>Niloufar </span>
            <span className={classes["last-name"]}>Soltani</span>
          </div>
          <div className={classes["job-title"]}>Junior Front-end Developer</div>
          <div className={classes.descrption}>
            My experience as a web developer and test specialist have provided
            me with the opportunity to work on multiple projects simultaneously,
            and to work closely with cross-functional teams.
          </div>
          <button className={classes.more}>More Info</button>
        </div>
      </Row>
    </div>
  );
};
export default Home;
