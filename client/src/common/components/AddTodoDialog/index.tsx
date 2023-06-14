import type { FormEvent } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "@/store/feature/todoList/todoListSlice";

import { Plus, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AddTodoDialog = () => {
  const [isLoading, _setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDate = new FormData(e.target as HTMLFormElement);

    const title = formDate.get("title") as string;
    const description = formDate.get("description") as string;

    dispatch(
      addTodo({
        id: new Date().getTime().toString(),
        createdAt: new Date().getTime(),
        description,
        title,
      })
    );

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button size={"sm"} onClick={() => setIsOpen(true)} className="flex items-center gap-2">
        <span>Add Item</span>
        <Plus className="w-5 h-5" />
      </Button>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Buy more mangos 🥭"
              className="col-span-3"
              required
            />

            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              className="col-span-full"
              placeholder="Type your message here."
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              Save changes
              {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoDialog;
