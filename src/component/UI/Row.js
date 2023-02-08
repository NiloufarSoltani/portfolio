import classes from "./Row.module.css";

const Row = (props) => {
  return (
    <div
      className={
        props.className ? `${classes.row} ${props.className}` : `${classes.row}`
      }
    >
      {props.children}
    </div>
  );
};
export default Row;
