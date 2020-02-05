import {takeEvery, call, put, cancel, all} from 'redux-saga/effects';
import API from '../api';
import * as actions from '../actions';

function *watchEpisodes(action) {
	const {error, data} = yield call(API.getFilms, action.id);
	const type = action.id ? actions.FILM_RECEIVED : actions.FILMS_RECEIVED;

	if (error) {
		yield cancel();
		return;
	}
	yield put({type,
		data});
}

function *watchAppLoad() {
	yield all([
		takeEvery(actions.FETCH_FILMS, watchEpisodes)
	]);
}

export default [watchAppLoad];
