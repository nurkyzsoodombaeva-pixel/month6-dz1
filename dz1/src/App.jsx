import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./modules/TodoList";

function App() {
  return <>
   <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
</>;
}

export default App;
