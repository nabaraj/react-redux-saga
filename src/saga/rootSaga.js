import { all } from 'redux-saga/effects';
import {
    getUserWatcher
    // import other watchers from this file
} from './userWatcher';
// import watchers from other files
export default function* rootSaga() {
    yield all([
        getUserWatcher()
        // add other watchers to the array
    ]);
}