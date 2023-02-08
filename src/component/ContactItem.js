import classes from "./ContactItem.module.css";

const ContactOItem = (props) => {
  return (
    <div className={classes["content-item"]}>
      <div className={classes.item}>
        <div className={classes.icon}>{props.icon}</div>
        <div className={classes.info}>
          <h3 className={classes.title}>{props.title}:</h3>
          <span>{props.detail}</span>
        </div>
      </div>
    </div>
  );
};
export default ContactOItem;
