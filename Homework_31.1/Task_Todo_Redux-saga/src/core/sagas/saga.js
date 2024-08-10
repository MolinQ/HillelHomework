import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS, setTodos } from '../actions/todoActions.js';
function* fetchTodosSaga() {
    const todos = yield call(() => new Promise((resolve) => {
        setTimeout(() => resolve([]), 1000);
    }));

    yield put(setTodos(todos));
}
export function* rootSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodosSaga);
}