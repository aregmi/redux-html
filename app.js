const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const reducer = (state = {count: 0}, action) => {
    switch(action.type){
        case INCREMENT: 
            return {...state, count: state.count + 1};
        case DECREMENT: 
            return {...state, count: state.count - 1};
        default:
            return state;
    }

}

const resultElement = document.getElementById("count");
const createReduxStore = () => Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createReduxStore();

const increment = () => {
    store.dispatch({type: INCREMENT})
}

const decrement = () => {
    store.dispatch({type: DECREMENT})
}

store.subscribe(() => {
    resultElement.innerHTML = store.getState().count;
});

store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: DECREMENT})