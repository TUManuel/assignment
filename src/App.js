import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const todos = [];
        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };

          todos.push(todo);
        }

        setIsLoading(false);
        setLoadedTodos(todos);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading Todos ...</p>
      </section>
    );
  }
  const toggleHandler = (id) => {
    const helperTodo = loadedTodos.filter((todo) => id === todo.id);
    let helperTodos = loadedTodos.filter((todo) => id !== todo.id);
    helperTodos = [
      {
        id: helperTodo[0].id,
        userId: 1,
        title: helperTodo[0].title,
        completed: !helperTodo[0].completed,
      },
      ...helperTodos,
    ];
    setLoadedTodos(helperTodos);
  };

  const addTodo = (userInput) => {
    let helperId = 0;
    loadedTodos.forEach((element) => {
      helperId = helperId > element.id ? helperId : element.id;
    });
    let helper = [...loadedTodos];
    helper = [
      { id: helperId + 1, userId: 1, title: userInput, completed: false },
      ...helper,
    ];
    setLoadedTodos(helper);
  };

  const removeTodo = (id) => {
    const helper = loadedTodos.filter((todo) => id !== todo.id);
    setLoadedTodos(helper);
  };

  return (
    <Wrapper>
      <Header />
      <TodoList
        todos={loadedTodos}
        removeTodo={removeTodo}
        toggleHandler={toggleHandler}
        addTodo={addTodo}
      />
    </Wrapper>
  );
}

export default App;
