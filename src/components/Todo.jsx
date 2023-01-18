import { useEffect, useState } from "react";
import ListTodo from "./ListTodo";
import CreateTodo from "./CreateTodo";

const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
        <CreateTodo setTodos={setTodos} />
      <ListTodo todos={todos} />
    </div>
  );
};

export default Todo;
