import classes from './Information.module.css';

const Information = (props) => {
  return (
    <div className={classes.information}>
      <span className={classes.info}>{props.info}:</span>
      <span className={classes.detail}>{props.detail}</span>
    </div>
  );
};
export default Information;
