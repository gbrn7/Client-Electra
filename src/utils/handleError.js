import axios from "axios";
import { configs } from '../configs';

const handleError = (err) => {
  const originaReq = err.config;
  if (err.response.data.msg === `jwt expired`) {
    originaReq._retry = true;
    const session = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    return axios
      .get(`${configs.api_host_dev}/cms/refresh-token/${session.refreshToken}/${session.email}`)
      .then((res) => {
        console.log('res')
        console.log(res)

        localStorage.setItem(
          'auth',
          JSON.stringify({
            ...session,
            token: res.data.data.token,
          })
        );

        originaReq.headers.Authorization = `Bearer ${res.data.data.token}`;

        return axios(originaReq);
      })
      .catch((err) => {
        window.location.href = `/signin`;
        localStorage.removeItem('auth');
      })
  }

  throw err;
  // return err;
}

export default handleError;