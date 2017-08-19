import {
  applyMiddleware,
  createStore
} from 'redux';
import reducers from '../Reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);


export default store;
