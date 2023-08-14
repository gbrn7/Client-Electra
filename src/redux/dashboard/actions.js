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

import { getData } from '../../utils/fetch';

export const startFetchingDashboardRevenue = () => {
  return {
    type: START_FETCHING_DASHBOARD_REVENUE,
  };
}

export const successFetchingDashboardRevenue = ({ revenue }) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD_REVENUE,
    revenue: revenue
  };
}

export const errorFetchingDashboardRevenue = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD_REVENUE,
  };
}

export const fetchDashboardRevenue = () => {
  return async (dispatch) => {
    dispatch(startFetchingDashboardRevenue());

    try {
      let res = await getData('/transactions/revenue');

      // console.log(res.data.data[0].grandTotal);

      dispatch(successFetchingDashboardRevenue({
        revenue: res.data.data[0].grandTotal,
      }));
    } catch (err) {
      dispatch(errorFetchingDashboardRevenue);
    }
  }
}


export const startFetchingDashboardTotalOrder = () => {
  return {
    type: START_FETCHING_DASHBOARD_TOTALORDER,
  };
}

export const successFetchingDashboardTotalOrder = ({ totalOrder }) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD_TOTALORDER,
    totalOrder: totalOrder
  };
}

export const errorFetchingDashboardTotalOrder = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD_TOTALORDER,
  };
}

export const fetchDashboardTotalOrder = () => {
  return async (dispatch) => {
    dispatch(startFetchingDashboardTotalOrder());

    try {

      const params = {
        "transaction_status": "success"
      }

      let res = await getData('/transactions/countTransByStatus', params);

      dispatch(successFetchingDashboardTotalOrder({
        totalOrder: res.data.data,
      }));
    } catch (err) {
      dispatch(errorFetchingDashboardTotalOrder);
    }
  }
}


export const startFetchingDashboardNewOrder = () => {
  return {
    type: START_FETCHING_DASHBOARD_NEWORDER,
  };
}

export const successFetchingDashboardNewOrder = ({ newOrder }) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD_NEWORDER,
    newOrder: newOrder
  };
}

export const errorFetchingDashboardNewOrder = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD_NEWORDER,
  };
}

export const fetchDashboardNewOrder = () => {
  return async (dispatch) => {
    dispatch(startFetchingDashboardNewOrder());

    try {
      const params = {
        "transaction_status": "success",
        "shipment_status": "pending"
      }

      let res = await getData('/transactions/countTransByStatus', params);

      dispatch(successFetchingDashboardNewOrder({
        newOrder: res.data.data,
      }));
    } catch (err) {
      dispatch(errorFetchingDashboardNewOrder);
    }
  }
}