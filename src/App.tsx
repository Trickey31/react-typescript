import React, { useReducer, useRef } from "react";

const Heading = ({ title }: { title: String }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
interface iTodo {
  id: number;
  text: string;
}
const todoReducer = (state: iTodo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length, text: action.text }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error();
  }
};
const initialState: iTodo[] = [];
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const onAddTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
  };
  const onRemoveTodo = (todoId: number) => {
    dispatch({
      type: "REMOVE",
      id: todoId,
    });
  };
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
