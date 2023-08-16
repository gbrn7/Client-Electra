import {
  START_FETCHING_PRODUCTS,
  SUCCESS_FETCHING_PRODUCTS,
  ERROR_FETCHING_PRODUCTS,
  SET_KEYWORD,
  SET_PAGE,
} from './constans';

const statusFetch = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

const initialState = {
  data: [],
  keyword: '',
  page: 1,
  limit: 5,
  pages: 1,
  status: statusFetch.idle,
}

export default (state = initialState, action) => {

  switch (action.type) {
    case START_FETCHING_PRODUCTS:
      return { ...state, status: statusFetch.process };

    case ERROR_FETCHING_PRODUCTS:
      return { ...state, status: statusFetch.error };

    case SUCCESS_FETCHING_PRODUCTS:
      return {
        ...state,
        status: statusFetch.success,
        data: action.products,
        pages: action.pages,
        page: action.page,
      };

    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;

  }
}
