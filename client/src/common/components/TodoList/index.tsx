import { useSelector } from "react-redux";

import type { RootState } from "@/store/index";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <ul className="flex flex-col gap-3 max-w-3xl mx-auto">
      {todoList.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
