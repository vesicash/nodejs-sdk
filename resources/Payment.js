const axios = require('axios');

/**
 * @description
 */
class Payment {
  /**
     * @description
     */
  constructor () {
    this._endpoint = '/payment';
  }

  /**
   * @description Fund a transaction
   * @param {Object} payload
   * @return {Promise<AxiosResponse<T>>} Axios Response
   */
  fundTransaction (payload) {
    return axios.post(`${this._endpoint}/pay`, payload);
  }

  /**
   * @description Initiate a manual disbursement
   * @param {Object} payload
   * @return {Promise<AxiosResponse<T>>} Axios Response
   */
  initiateDisbursement (payload) {
    return axios.post(`${this._endpoint}/disbursement/wallet/withdraw`, payload);
  }
}

module.exports = new Payment();
