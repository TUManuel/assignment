import "../index.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    props.removeTodo(props.id);
  };

  const toggleHandler = () => {
    props.toggleHandler(props.id);
  };
  if (!props.completed) {
    return (
      <li className={classes.item}>
        <input
          type="checkbox"
          defaultChecked={props.completed}
          onChange={toggleHandler}
          className={classes.checkboxTodo}
    >
    </input>
        <span className={classes.noneStrike}>
          {props.title}
        </span>
        <RiDeleteBin6Line size="1.5em"
          onClick={onClickHandler}
          className={classes.deleteBtn}
        ></RiDeleteBin6Line>
      </li>
    );
  }
};

export default TodoItem;
