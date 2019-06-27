import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchPeople(action) {
    const { id } = action;
    const { error, data } = yield call(API.getPeople,
        id);
    if (error) {
        yield cancel();
        return;
    }
    yield put({ type: actions.CHARACTERS_RECEIVED, data });
}

function* watchAppLoad() {
    yield all([
        takeEvery(actions.FETCH_CHARACTERS, watchPeople),
    ]);
}

export default [watchAppLoad];