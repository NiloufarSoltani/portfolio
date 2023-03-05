import { GoCalendar } from "react-icons/go";
import { MdRadioButtonChecked } from "react-icons/md";

import classes from "./Experience.module.css";

const Experience = (props) => {
  return (
    <div className={classes.experience}>
        <MdRadioButtonChecked />
      <span className={classes.duration}>
        <GoCalendar />
        {props.duration}
      </span>
      <h3 className={classes.title}>{props.title}</h3>
      <h4 className={classes.location}>{props.location}</h4>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};
export default Experience;
