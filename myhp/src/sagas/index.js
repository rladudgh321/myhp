import { all, fork } from 'redux-saga/effects';
import user from './user';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials= true;

function* rootSaga() {
    yield all([
        fork(user),
    ]);
}

export default rootSaga;