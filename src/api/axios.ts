import axios from 'axios';
import { apiBaseUrl } from 'lib/constants';

axios.defaults.withCredentials = false;

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export default axiosInstance;
