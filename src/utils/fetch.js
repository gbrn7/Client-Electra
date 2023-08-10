import axios from "axios";
import { configs } from '../configs'
import handleError from "./handleError";

export async function getData(url, params) {
  try {
    const { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    return await axios.get(`${configs.api_host_dev}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
  } catch (err) {
    return handleError(err);
  }
};

export async function postData(url, payload, formData) {
  try {
    const { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    return await axios.post(`${configs.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? 'multipart/form-data' : 'application/json'
      },
    });
  } catch (err) {
    return handleError(err);
  }
};

export async function putData(url, payload) {
  try {
    const { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    return await axios.put(`${configs.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return handleError(err);
  }
};

export async function deleteData(url) {
  try {
    const { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    return await axios.delete(`${configs.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return handleError(err);
  }
};

