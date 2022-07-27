import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return <section className={classes.main}>{props.children}</section>;
};
export default Wrapper;
