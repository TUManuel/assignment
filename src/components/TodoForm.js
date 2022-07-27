import { useState } from "react";
import "../index.css";
import {RiAddLine} from "react-icons/ri";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={submitHandler} className={classes.inputForm}>
      <input
        className={classes.input}
        value={userInput}
        type="text"
        maxLength="200"
        placeholder="Add new task"
        onChange={changeHandler}
      ></input>
      <RiAddLine size= "1.5em" className={classes.addBtn} onClick={submitHandler}/>
    </form>
  );
};
export default TodoForm;
