import React, { useReducer, useRef } from "react";

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
export default function useTodos(initialState: iTodo[]): {
  todos: iTodo[];
  onAddTodo: () => void;
  onRemoveTodo: (todoId: number) => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
} {
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
  return {
    todos,
    onAddTodo,
    onRemoveTodo,
    inputRef,
  };
}
