import axios from 'axios';
import { updateUsers } from "./../actions/actionCreators";
import { takeLatest, call, put } from 'redux-saga/effects';
/** function that returns an axios call */
function getUserRequest() {
    return axios.request({
        method: 'get',
        url: 'https://api.jsonbin.io/b/5ea16a891299b9374234b321'
    });
}
/** saga worker that is responsible for the side effects */
function* loginEffectSaga() {
    try {
        // data is obtained after axios call is resolved
        let { data } = yield call(getUserRequest);
        console.log(data);
        yield put(updateUsers(data));
    } catch (e) {
        console.log('error', e);
    }
}
/**
 * saga watcher that is triggered when dispatching action of type
 * 'GET_USER'
 */
export function* getUserWatcher() {
    console.log('ttt');

    yield takeLatest('GET_USER', loginEffectSaga);
}