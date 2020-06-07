const axios = require('axios');

/**
 * @description
 */
class Upload {
  /**
     * @description
     */
  constructor () {
    this._endpoint = '/upload';
  }

  /**
   * @description Upload a file
   * @param {FormData} formData
   * @return {Promise<AxiosResponse<T>>} Axios Response
   */
  uploadFile (formData) {
    return axios.post(`${this._endpoint}/file`, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}

module.exports = new Upload();
