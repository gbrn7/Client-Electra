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

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';

let debouncedFetchBestSelling = debounce(getData, 1000);

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


export const startFetchingDashboardBestSelling = () => {
  return {
    type: START_FETCHING_DASHBOARD_BESTSELLING,
  };
}

export const successFetchingDashboardBestSelling = ({ bestSelling }) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD_BESTSELLING,
    bestSelling: bestSelling
  };
}

export const errorFetchingDashboardBestSelling = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD_BESTSELLING,
  };
}

export const fetchDashboardBestSelling = () => {
  return async (dispatch) => {
    dispatch(startFetchingDashboardBestSelling());

    try {

      let res = await debouncedFetchBestSelling('/transactions/readHighestSalesProduct');

      dispatch(successFetchingDashboardBestSelling({
        bestSelling: res.data.data,
      }));
    } catch (err) {
      dispatch(errorFetchingDashboardBestSelling);
    }
  }
}


export const startFetchingDashboardWorstSelling = () => {
  return {
    type: START_FETCHING_DASHBOARD_WORSTSELLING,
  };
}

export const successFetchingDashboardWorstSelling = ({ worstSelling }) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD_WORSTSELLING,
    worstSelling: worstSelling
  };
}

export const errorFetchingDashboardWorstSelling = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD_WORSTSELLING,
  };
}

export const fetchDashboardWorstSelling = () => {
  return async (dispatch) => {
    dispatch(startFetchingDashboardWorstSelling());

    try {

      let res = await getData('/transactions/readLowestSalesProduct');

      dispatch(successFetchingDashboardWorstSelling({
        worstSelling: res.data.data,
      }));
    } catch (err) {
      dispatch(errorFetchingDashboardWorstSelling);
    }
  }
}


export const startFetchingDashboardSchedule = () => {
  return {
    type: START_FETCHING_DASHBOARD_SCHEDULE,
  };
}

export const successFetchingDashboardSchedule = ({ schedule }) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD_SCHEDULE,
    schedule: schedule
  };
}

export const errorFetchingDashboardSchedule = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD_SCHEDULE,
  };
}

export const fetchDashboardSchedule = () => {
  return async (dispatch) => {
    dispatch(startFetchingDashboardSchedule());

    try {
      const params = {
        "transaction_status": "success",
        "shipment_status": "pending",
        "limit": 5,
        "page": 1,
      }

      let res = await getData('/transactions', params);

      dispatch(successFetchingDashboardSchedule({
        schedule: res.data.data,
      }));
    } catch (err) {
      dispatch(errorFetchingDashboardSchedule);
    }
  }
}