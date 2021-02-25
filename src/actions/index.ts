import {
  ToDoItem,
  ADD_TODO,
  ToDoTypes,
  LOAD_TODO_LIST,
} from '../store/toDo/types';

export const addToDo = (toDoItem: ToDoItem): ToDoTypes => {
  return {
    type: ADD_TODO,
    payload: toDoItem,
  };
};

export const loadToDoList = (): ToDoTypes => {
  return {
    type: LOAD_TODO_LIST,
  };
};
