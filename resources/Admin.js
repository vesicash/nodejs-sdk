const axios = require('axios');

/**
 * @description
 */
class Admin {
  /**
     * @description
     */
  constructor () {
    this._endpoint = '/admin';
  }

  /**
     * @description Fund a transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  addBank (payload) {
    return axios.post(`${this._endpoint}/user/update/bank`, payload);
  }

  /**
   * @description Wallet balance
   * @param {Object} payload
   * @return {Promise<AxiosResponse<T>>} Axios Response
   */
  walletBalance (payload) {
    return axios.post(`${this._endpoint}/account/wallet`, payload);
  }
}

module.exports = new Admin();
