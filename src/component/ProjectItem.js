import { useEffect } from "react";
import { BsLink } from "react-icons/bs";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <div className={classes["project-item"]}>
      <div className={classes.image}>
        <img src={props.image} alt="project" />
      </div>
      <div className={props.href ? classes["item-info"] : classes["info"] }>
        <h3 className={classes["project-name"]}>{props.name}</h3>
        <div className={classes["project-description"]}>
          {props.description}
        </div>
        {props.href && <a href={props.href}>
          <BsLink />
          &nbsp;&nbsp;&nbsp;Link
        </a>}
      </div>
    </div>
  );
};

export default ProjectItem;
