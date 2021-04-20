import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { LoginAPI } from '../api/API';


function* LoginFlow(action) {
    try {
		const response = yield LoginAPI(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: LOGIN_SUCCESS, data: response
			});
		} else {
			yield put({
				type: LOGIN_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: LOGIN_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchLogin() {
    yield takeEvery(LOGIN, LoginFlow);
}