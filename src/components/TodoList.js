import TodoItem from "./TodoItem";
import TodoItemDone from "./TodoItemDone";
import classes from "./TodoList.module.css";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  return (
    <div className={classes.divContainer}>
      <ul className={classes.listNotCompleted}>
      <TodoForm addTodo = {props.addTodo} />
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            removeTodo={props.removeTodo}
            toggleHandler={props.toggleHandler}
          />
        ))}
      </ul>
      <ul className={classes.listCompleted}>
        <h2 className={classes.h2Completed}>Completed</h2>
        {props.todos.map((todo) => (
          <TodoItemDone
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            removeTodo={props.removeTodo}
            toggleHandler={props.toggleHandler}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
