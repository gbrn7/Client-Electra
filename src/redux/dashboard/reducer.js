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
  START_FETCHING_DASHBOARD_BESTSELLING,
  SUCCESS_FETCHING_DASHBOARD_BESTSELLING,
  ERROR_FETCHING_DASHBOARD_BESTSELLING,
  START_FETCHING_DASHBOARD_WORSTSELLING,
  SUCCESS_FETCHING_DASHBOARD_WORSTSELLING,
  ERROR_FETCHING_DASHBOARD_WORSTSELLING,
  START_FETCHING_DASHBOARD_SCHEDULE,
  SUCCESS_FETCHING_DASHBOARD_SCHEDULE,
  ERROR_FETCHING_DASHBOARD_SCHEDULE,
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
  bestSelling: [],
  statusBestSelling: statusFetch.idle,
  worstSelling: [],
  statusWorstSelling: statusFetch.idle,
  schedule: { transactions: [] },
  statusSchedule: statusFetch.idle,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_DASHBOARD_REVENUE:
      return { ...state, statusRevenue: statusFetch.process };

    case ERROR_FETCHING_DASHBOARD_REVENUE:
      return { ...state, statusRevenue: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_REVENUE:
      return {
        ...state,
        statusRevenue: statusFetch.success,
        revenue: action.revenue,
      };


    case START_FETCHING_DASHBOARD_TOTALORDER:
      return { ...state, statusTotalOrder: statusFetch.process };

    case ERROR_FETCHING_DASHBOARD_TOTALORDER:
      return { ...state, statusTotalOrder: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_TOTALORDER:
      return {
        ...state,
        statusTotalOrder: statusFetch.success,
        totalOrder: action.totalOrder,
      };


    case START_FETCHING_DASHBOARD_NEWORDER:
      return { ...state, statusNewOrder: statusFetch.process };

    case ERROR_FETCHING_DASHBOARD_NEWORDER:
      return { ...state, statusNewOrder: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_NEWORDER:
      return {
        ...state,
        statusNewOrder: statusFetch.success,
        newOrder: action.newOrder,
      };


    case START_FETCHING_DASHBOARD_BESTSELLING:
      return { ...state, statusBestSelling: statusFetch.process };

    case ERROR_FETCHING_DASHBOARD_BESTSELLING:
      return { ...state, statusBestSelling: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_BESTSELLING:
      return {
        ...state,
        statusBestSelling: statusFetch.success,
        bestSelling: action.bestSelling,
      };


    case START_FETCHING_DASHBOARD_WORSTSELLING:
      return { ...state, statusWorstSelling: statusFetch.process };

    case ERROR_FETCHING_DASHBOARD_WORSTSELLING:
      return { ...state, statusWorstSelling: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_WORSTSELLING:
      return {
        ...state,
        statusWorstSelling: statusFetch.success,
        worstSelling: action.worstSelling,
      };


    case START_FETCHING_DASHBOARD_SCHEDULE:
      return { ...state, statusSchedule: statusFetch.process };

    case ERROR_FETCHING_DASHBOARD_SCHEDULE:
      return { ...state, statusSchedule: statusFetch.error };

    case SUCCESS_FETCHING_DASHBOARD_SCHEDULE:
      return {
        ...state,
        statusSchedule: statusFetch.success,
        schedule: action.schedule,
      };

    default:
      return state;
  }
}