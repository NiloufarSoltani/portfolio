import { BsLink } from "react-icons/bs";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <div className={classes["project-item"]}>
      <div className={classes.image}>
        <img src={props.image} alt="project" />
      </div>
      <div className={classes["item-info"]}>
        <h3 className={classes["project-name"]}>{props.name}</h3>
        <div className={classes["project-description"]}>
          {props.description}
        </div>
        {props.href && <a href={props.href}>
          <BsLink />
          &nbsp;&nbsp;&nbsp;Link To Project
        </a>}
      </div>
    </div>
  );
};

export default ProjectItem;
