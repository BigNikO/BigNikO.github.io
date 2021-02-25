import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_TODO_LIST,
  RENDER_TODO_LIST,
  ToDoTypes,
} from '../store/toDo/types';

export function* fetchToDoList() {
  const endpoint =
    'https://dummy.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put<ToDoTypes>({ type: RENDER_TODO_LIST, payload: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
