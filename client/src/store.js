import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



const middleware = [thunk]; // array of thunk
const store = createStore(
    rootReducer,
     {}, 
     compose (
         applyMiddleware(...middleware), // compose all enhancements together
         //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
     ); // 3 params; 1st set of reducers(reducers write to store), 2nd intialization, 3rd extension 
export default store;