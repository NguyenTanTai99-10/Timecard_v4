import {COMPANYMEMBER,COMPANYMEMBER_SUCCESS,COMPANYMEMBER_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { CompanyMemberAPI } from '../api/API';


function* CompanyMemberFlow(action) {
    try {
		const response = yield CompanyMemberAPI(action.input);
		// console.log('response - CompanyMemberAPI: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: COMPANYMEMBER_SUCCESS, data: response
			});
		} else {
			yield put({
				type: COMPANYMEMBER_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: COMPANYMEMBER_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchCompanyMember() {
    yield takeEvery(COMPANYMEMBER, CompanyMemberFlow);
}