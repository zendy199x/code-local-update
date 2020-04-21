import { fork } from 'redux-saga/effects'

function* watchFetchListTaskAction() {
    console.log('watching fetch list task action')
}

function* watchCreateTaskAction() {
    console.log('watch create task action')
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;