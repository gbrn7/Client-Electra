import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from 'redux';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
)

export default store;
