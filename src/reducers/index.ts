import {
  ToDoState,
  ADD_TODO,
  ToDoTypes,
  RENDER_TODO_LIST,
} from '../store/toDo/types';

const initialState: ToDoState = {
  toDoList: [],
};

const toDoReducer = (state = initialState, action: ToDoTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, { ...action.payload }],
      };
    case RENDER_TODO_LIST:
      return { ...state, toDoList: action.payload };
    default:
      return initialState;
  }
};

export default toDoReducer;
