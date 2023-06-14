import NavBar from "@/components/NavBar";
import AddTodoDialog from "@/components/AddTodoDialog";

function App() {
  return (
    <>
      <NavBar />

      <main className="container">
        <div className="flex items-center justify-between mt-8">
          <h1 className="text-2xl font-medium mt-6">Your To-Do List</h1>
          <AddTodoDialog />
        </div>
      </main>
    </>
  );
}

export default App;
