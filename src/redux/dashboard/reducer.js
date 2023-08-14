import {
  START_FETCHING_DASHBOARD_REVENUE,
  SUCCESS_FETCHING_DASHBOARD_REVENUE,
  ERROR_FETCHING_DASHBOARD_REVENUE,
  START_FETCHING_DASHBOARD_TOTALORDER,
  SUCCESS_FETCHING_DASHBOARD_TOTALORDER,
  ERROR_FETCHING_DASHBOARD_TOTALORDER,
  START_FETCHING_DASHBOARD_NEWORDER,
  SUCCESS_FETCHING_DASHBOARD_NEWORDER,
  ERROR_FETCHING_DASHBOARD_NEWORDER,
} from './constants';

const statusFetch = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

const initialState = {
  revenue: 0,
  statusRevenue: statusFetch.idle,
  totalOrder: 0,
  statusTotalOrder: statusFetch.idle,
  newOrder: 0,
  statusNewOrder: statusFetch.idle,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_DASHBOARD_REVENUE:
      return { ...state, statusRevenue: statusFetch.idle };

    case ERROR_FETCHING_DASHBOARD_REVENUE:
      return { ...state, statusRevenue: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_REVENUE:
      return {
        ...state,
        statusRevenue: statusFetch.success,
        revenue: action.revenue,
      };

    case START_FETCHING_DASHBOARD_TOTALORDER:
      return { ...state, statusTotalOrder: statusFetch.idle };

    case ERROR_FETCHING_DASHBOARD_TOTALORDER:
      return { ...state, statusTotalOrder: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_TOTALORDER:
      return {
        ...state,
        statusTotalOrder: statusFetch.success,
        totalOrder: action.totalOrder,
      };

    case START_FETCHING_DASHBOARD_NEWORDER:
      return { ...state, statusNewOrder: statusFetch.idle };

    case ERROR_FETCHING_DASHBOARD_NEWORDER:
      return { ...state, statusNewOrder: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_NEWORDER:
      return {
        ...state,
        statusNewOrder: statusFetch.success,
        newOrder: action.newOrder,
      };

    default:
      return state;
  }
}