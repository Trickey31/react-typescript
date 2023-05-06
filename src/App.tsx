import useTodos from "./hooks/useTodos";
import React from "react";

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
        <RenderList
          keyExtractor={(todo) => todo.id}
          items={todos}
          render={(todo) => (
            <div className="mt-5 flex items-center gap-x-5">
              <span>{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="text-white bg-red-500 rounded-lg p-2 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          )}
        ></RenderList>
        <View as="button" type="button">
          This is heading2
        </View>
        {/* {todos.map((todo) => (
          <div className="mt-5 flex items-center gap-x-5">
            <span>{todo.text}</span>
            <button
              onClick={() => onRemoveTodo(todo.id)}
              className="text-white bg-red-500 rounded-lg p-2 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        ))} */}
      </div>
    </div>
  );
};

const RenderList = <T,>({
  items,
  render,
  keyExtractor,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number;
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </ul>
  );
};

type ViewProps<T extends keyof JSX.IntrinsicElements> = {
  as: T;
  children: React.ReactNode;
} & JSX.IntrinsicElements[T];
const View = <T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...rest
}: ViewProps<T>) => {
  return React.createElement(as, { ...rest }, children);
};

export default App;
