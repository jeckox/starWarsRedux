import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchEpisodes(action) {
    const { error, data } = yield call(API.getFilms);
    if (error) {
        yield cancel();
        return;
    }
    yield put({ type: actions.FILMS_RECEIVED, data });
}

function* watchAppLoad() {
    yield all([
        takeEvery(actions.FETCH_FILMS, watchEpisodes),
    ]);
}

export default [watchAppLoad];