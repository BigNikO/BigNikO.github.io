export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';

export interface ToDoItem {
  _id: number;
  title: string;
}

export interface ToDoState {
  toDoList: Array<ToDoItem>;
}

interface AddToDoAction {
  type: typeof ADD_TODO;
  payload: ToDoItem;
}

interface LoadToDoListAction {
  type: typeof LOAD_TODO_LIST;
}

interface RenderToDoListAction {
  type: typeof RENDER_TODO_LIST;
  payload: Array<ToDoItem>;
}

export type ToDoTypes =
  | AddToDoAction
  | LoadToDoListAction
  | RenderToDoListAction;
