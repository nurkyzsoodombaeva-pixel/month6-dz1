
import Todo from "../components/Todo";
import { UseTodoStore } from "../Store/TodoStore";


export const TodoList = () => {
  const todos = UseTodoStore((state) => state.todos);

  return (
    <div>
      {todos.length === 0 && <p>Нет задач</p>}

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
