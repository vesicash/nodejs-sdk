/* eslint-disable no-undef */
const { AxiosError } = require('axios');
const vesicash = require('./setup');

describe('All methods are defined', () => {
  test('that addBank method exists', () => {
    expect(vesicash.admin.addBank).toBeDefined();
  });

  test('that walletBalance method exists', () => {
    expect(vesicash.admin.walletBalance).toBeDefined();
  });
});

describe('Admin resource test', () => {
  test('AddBank fails when no payload is passed', () => expect(vesicash.admin.addBank({}))
    .rejects.toThrow(AxiosError));

  test('WalletBalance fails when no payload is passed', () => expect(vesicash.admin
    .walletBalance({}))
    .rejects.toThrow(AxiosError));
});
