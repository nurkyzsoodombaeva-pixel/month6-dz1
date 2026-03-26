import React from "react";
import { UseTodoStore } from "../Store/TodoStore";

const Todo = ({todo}) => {
    const toggleTodo = UseTodoStore((state) => state.toggleTodo)
    const deleteTodo = UseTodoStore((state) => state.removeTodo)

  return (
    <div>
      <span style={{
        cursor: "pointer",
        textDecoration: todo.isCompleted ? "line-through" : "none"
      }} onClick={()=>toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={()=>deleteTodo(todo.id)}>delete</button>
    </div>
  );
};

export default Todo;
