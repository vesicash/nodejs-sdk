const axios = require('axios');
const transactions = require('./resources/Transactions');
const payments = require('./resources/Payment');
const auth = require('./resources/Auth');
const admin = require('./resources/Admin');

/**
 * @description
 */
class Vesicash {
  /**
     * @description
     * @param {String} publicKey
     * @param {Boolean} sandbox
     * @param {String} privateKey
     */
  constructor ({ publicKey, privateKey }, sandbox = false) {
    if (!publicKey || !privateKey) throw new Error('Please provide your public and private key.');

    const SANDBOX_BASE_URL = 'https://sandbox.api.vesicash.com/v1/';
    const LIVE_BASE_URL = 'https://api.vesicash.com/v1/';

    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers['V-PRIVATE-KEY'] = privateKey;
    axios.defaults.headers['V-PUBLIC-KEY'] = publicKey;
    axios.defaults.baseURL = sandbox ? SANDBOX_BASE_URL : LIVE_BASE_URL;

    this.transactions = transactions;
    this.payment = payments;
    this.auth = auth;
    this.admin = admin;
  }
}

module.exports = Vesicash;
