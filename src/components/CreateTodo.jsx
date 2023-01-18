import { useState } from "react";

const CreateTodo = (props) => {
  const { setTodos } = props;
  const [newTodo, setNewTodos] = useState("");

  const generateID = () => {
    return new Date(), getTime();
  };

  const onClickHandler = () => {
    const newTodoObj = {
      userId: 1,
      id: generateID(),
      title: newTodo,
      completed: false,
    };

    setTodos((todos) => [...todos, newTodoObj]);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onCange={(e) => {
          setNewTodos(e.target.value);
        }}
      />
      <button onClick={onClickHandler}>CreateTodo</button>
    </div>
  );
};

export default CreateTodo;
