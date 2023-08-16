import debounce from 'debounce-promise';
import {
  START_FETCHING_PRODUCTS,
  SUCCESS_FETCHING_PRODUCTS,
  ERROR_FETCHING_PRODUCTS,
  SET_KEYWORD,
  SET_PAGE,
} from './constans';
import { getData } from '../../utils/fetch';
import { clearNotif } from '../notif/actions';

let debouncedFetchProducts = debounce(getData, 200);

export const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCTS,
  };
}

export const successFetchingProducts = ({ products, pages, page }) => {
  return {
    type: SUCCESS_FETCHING_PRODUCTS,
    products: products,
    pages: pages,
    page: page
  };
}

export const errorFetchingProducts = () => {
  return {
    type: ERROR_FETCHING_PRODUCTS,
  };
}

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProducts());

    try {

      setTimeout(() => {
        dispatch(clearNotif());
      }, 3000)

      let params = {
        page: getState().products?.page || 1,
        limit: getState().products?.limit || 5,
        keyword: getState().products?.keyword || '',
      }

      let res = await debouncedFetchProducts('/products', params);

      dispatch(successFetchingProducts({
        products: res.data.data.products,
        pages: res.data.data.pages,
        page: res.data.data.page,
      }));
    } catch (err) {
      dispatch(errorFetchingProducts());
    }

  }
}


export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword: keyword,
  };
}

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    keyword: page,
  };
}