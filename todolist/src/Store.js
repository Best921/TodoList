import { createStore, combineReducers } from 'redux';

import { Reducer as todos } from './todos/index';
import { Reducer as filter } from './filter/index';

const reducer = combineReducers({
  todos,
  filter
});

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;