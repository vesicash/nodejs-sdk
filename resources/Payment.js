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
}

module.exports = new Payment();
