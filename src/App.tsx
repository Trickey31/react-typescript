import useTodos from "./hooks/useTodos";

const Heading = ({ title }: { title: String }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};

const App = () => {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos([]);
  return (
    <div>
      <Heading title="Todo App"></Heading>
      <div className="max-w-sm">
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border border-slate-200 rounded-lg outline-none"
            ref={inputRef}
          />
          <button
            onClick={onAddTodo}
            className="p-4 bg-blue-500 text-white rounded-lg"
          >
            Add
          </button>
        </div>
        {todos.map((todo) => (
          <div className="mt-5 flex items-center gap-x-5">
            <span>{todo.text}</span>
            <button
              onClick={() => onRemoveTodo(todo.id)}
              className="text-white bg-red-500 rounded-lg p-2 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
