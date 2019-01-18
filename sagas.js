const { take, call, put, fork, takeEvery, all } = require('redux-saga/effects');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }

function* stepCallService() {
    try {
        console.log('CALL -----------------------------------'); // spdfza
        const expenses = yield call(() => new Promise((resolve, reject) => { 
            setTimeout(() => { 
                getRandomInt(0, 10) > 5 ? resolve('rx MSG') :  reject(new Error('rx error'))
            }, 1500)}));
        yield put({ type: 'RUN_ACTION', payload: expenses });
    } catch(err) {
        yield put({ type: 'ERROR_MESSAGE', payload: err.message });
    }

}

function* handleCallService() {
  yield takeEvery('CALL_SERVICE', stepCallService);
}

module.exports = function* rootSaga() {
    yield all([
        handleCallService()
        //fork(handleCallService)
        //fork(watchGetUserExpenses)
      ])    
 }
