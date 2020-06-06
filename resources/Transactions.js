const axios = require('axios');

/**
 * @description
 */
class Transactions {
  /**
     * @description
     */
  constructor () {
    this._endpoint = '/transactions';
  }

  /**
     * @description creates a transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  create (payload) {
    return axios.post(`${this._endpoint}/create`, payload);
  }

  /**
     * @description Update transaction party
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  partiesUpdate (payload) {
    return axios.post(`${this._endpoint}/parties/update`, payload);
  }

  /**
     * @description Send a draft transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  sendTransaction (payload) {
    return axios.post(`${this._endpoint}/send`, payload);
  }

  /**
     * @description Accept a transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  acceptTransaction (payload) {
    return axios.post(`${this._endpoint}/accept`, payload);
  }

  /**
     * @description Reject a transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  rejectTransaction (payload) {
    return axios.post(`${this._endpoint}/reject`, payload);
  }

  /**
     * @description Get a single transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  listById (payload) {
    return axios.post(`${this._endpoint}/${payload}`);
  }

  /**
   * @description List all the transaction belonging to a business or their customers
   * @param {Object} payload
   * @return {Promise<AxiosResponse<T>>} Axios Response
   */
  listByBusiness (payload) {
    return axios.post(`${this._endpoint}/listByBusiness`, payload);
  }

  /**
     * @description Extend a transaction due date
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  extendDueDate (payload) {
    return axios.post(`${this._endpoint}/request/due_date_extension`, payload);
  }

  /**
     * @description Mark a transaction as shipped
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  delivered (payload) {
    return axios.post(`${this._endpoint}/delivered`, payload);
  }

  /**
     * @description Accept a shipped transaction
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  acceptDelivery (payload) {
    return axios.post(`${this._endpoint}/satisfied`, payload);
  }

  /**
     * @description Reject a transaction as shipped
     * @param {Object} payload
     * @return {Promise<AxiosResponse<T>>} Axios Response
     */
  rejectDelivery (payload) {
    return axios.post(`${this._endpoint}/reject_delivery`, payload);
  }
}

module.exports = new Transactions();
