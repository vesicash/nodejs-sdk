/* eslint-disable no-undef */
const { AxiosError } = require('axios');
const vesicash = require('./setup');

describe('All methods are defined', () => {
  test('that fundTransaction method exists', () => {
    expect(vesicash.payment.fundTransaction).toBeDefined();
  });

  test('that initiateDisbursement method exists', () => {
    expect(vesicash.payment.initiateDisbursement).toBeDefined();
  });
});

describe('Payment resource test', () => {
  test('fundTransaction fails when no payload is passed', () => expect(vesicash.payment
    .fundTransaction({}))
    .rejects.toThrow(AxiosError));

  test('initiateDisbursement fails when no payload is passed', () => expect(vesicash.payment
    .initiateDisbursement({}))
    .rejects.toThrow(AxiosError));
});
