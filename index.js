const { applyMiddleware, compose, createStore } = require('redux');
const createSagaMiddleware =require('redux-saga').default;
const rootSaga = require('./sagas');
const { createRootReducer } = require('./reducers');

/*
class SagaMonitor {
    rootSagaStarted() {
        console.log('rootSagaStarted', arguments);
    }

    effectTriggered() {
        //console.log('effectTriggered', arguments);
    }

    effectResolved(effectId, result) {
        console.log('SM effectResolved', result);
        if (result.name === 'stepCallService') {
            result.done.then(() => {
                console.log('FINE ---------------------------------->');
            })
        }
    }    

    effectRejected(effectId, error) {
        console.log('SM effectRejected', error);
    }     
}

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: new SagaMonitor()});

const store = createStore(
  createRootReducer(),
  applyMiddleware(sagaMiddleware)
);

const rootTask = sagaMiddleware.run(rootSaga);


const ret = store.dispatch({ type: 'CALL_SERVICE', msg:'ciao'});

rootTask.done.then(() => {
    console.log('SAGA END');
})
.catch((err) => {
    console.log('SAGA ERROR', err.message);
});

*/


async function* call(promise) {
    yield promise;
}


async function test() {
    for await (msg of call(Promise.resolve('CIAO'))) {
        console.log('TEST', msg);
    }
}
test();


console.log('TEST', call(Promise.resolve('CIAO')));