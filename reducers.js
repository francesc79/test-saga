
function createRootReducer() {
    return (state, action) => {
        console.log('REDUCER ACTION', action);

        switch(action.type) {

        }
    };
}

module.exports = {
    createRootReducer
};