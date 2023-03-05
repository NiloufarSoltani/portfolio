import classes from "./Title.module.css";

const Title = (props) => {
  let className =props.align === "left" ? `${classes.title} ${classes["left"]}` : `${classes.title}`;
  
  return (
    <div className={className} style={{textAlign: props.align ? props.align : 'center'}}>
      <div className={classes["first-title"]} style={{WebkitTextStroke: props.dark ? '1px rgba(var(--font-color-rgb), 0.3)' : '1px rgba(var(--font-color-rgb), 0.2)'}}>{props.firstTitle}</div>
      <div
        className={classes["second-title"]}
        style={{
          display: "flex",
          flexFlow: props.first ? "row" : "row-reverse",
        }}
      >
        <span>{props.secondTitle}&nbsp;</span>
        <span className={classes["not-bold"]}>
          {props.thirdTitle && props.thirdTitle}&nbsp;
        </span>
      </div>
    </div>
  );
};
export default Title;
