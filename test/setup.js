/* eslint-disable no-undef */
require('dotenv').config();
const Vesicash = require('../index');

const vesicash = new Vesicash({
  publicKey: process.env.VESICASH_PUBLIC_KEY,
  privateKey: process.env.VESICASH_PRIVATE_KEY
}, true);

module.exports = vesicash;
