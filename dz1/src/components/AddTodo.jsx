import { useState } from "react";
import { UseTodoStore } from "../Store/TodoStore";


export const AddTodo = () => {
  const [text, setText] = useState("");
  const addTodo = UseTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
};
