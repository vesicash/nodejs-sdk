const axios = require('axios');

/**
 * @description
 */
class Auth {
  /**
     * @description
     */
  constructor () {
    this._endpoint = '/auth';
  }

  /**
     * @description Login
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  login (payload) {
    return axios.post(`${this._endpoint}/login`, payload);
  }

  /**
     * @description Signup
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  signup (payload) {
    return axios.post(`${this._endpoint}/signup`, payload);
  }
}

module.exports = new Auth();
