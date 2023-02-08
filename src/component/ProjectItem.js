import { BsLink } from 'react-icons/bs'

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <div
      className={classes["project-item"]}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className={classes["item-info"]}>
        <h4 className={classes["project-name"]}>{props.name}</h4>
        <div className={classes["project-des"]}>{props.description}</div>
        <a href={props.href}><BsLink /></a>
      </div>
    </div>
  );
};

export default ProjectItem;
