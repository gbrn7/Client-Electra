import thunk from 'redux-thunk';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from 'redux';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import authReducer from './auth/reducer';
import dashboardReducer from './dashboard/reducer';
import productsReducer from './products/reducer';
import notifReducer from './notif/reducer';


const rootReducers = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  products: productsReducer,
  notif: notifReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
)

export default store;
