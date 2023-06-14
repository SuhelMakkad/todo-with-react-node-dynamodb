import { markDone, markPending, removeTodo } from "@/store/feature/todoList/todoListSlice";
import { useDispatch } from "react-redux";

import { Trash2Icon } from "lucide-react";

import { Todo } from "@/store/feature/todoList/todoListSlice";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export type TodoProps = {
  todo: Todo;
};

const formatDate = (date: Date) => {
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  const dateStr = `${da} ${mo}, ${ye}`;

  return dateStr;
};

const TodoItem = ({ todo }: TodoProps) => {
  const dispatch = useDispatch();

  const handleCheckChange = (isChecked: boolean) => {
    const id = todo.id;

    if (isChecked) {
      dispatch(markDone(id));
      return;
    }

    dispatch(markPending(id));
  };

  return (
    <div>
      <div className="flex gap-2 items-baseline">
        <Checkbox id={todo.id} checked={todo.isDone} onCheckedChange={handleCheckChange} />
        <label
          htmlFor={todo.id}
          className={cn(
            todo.isDone && "line-through",
            "text-xl font-medium capitalize cursor-pointer"
          )}
        >
          {todo.title}
        </label>
        <span className="text-sm italic">{formatDate(new Date(todo.createdAt))}</span>

        <button className="ml-auto" onClick={() => dispatch(removeTodo(todo.id))}>
          <Trash2Icon className="text-destructive w-4" />
        </button>
      </div>
      <p className="text-secondary-foreground">{todo.description}</p>
      <Separator className="my-4" />
    </div>
  );
};

export default TodoItem;
