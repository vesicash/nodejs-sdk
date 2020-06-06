/* eslint-disable no-undef */
const { AxiosError } = require('axios');
const vesicash = require('./setup');


describe('All methods are defined', () => {
  test('that create method exists', () => {
    expect(vesicash.transactions.create).toBeDefined();
  });

  test('that partiesUpdate method exists', () => {
    expect(vesicash.transactions.partiesUpdate).toBeDefined();
  });

  test('that sendTransaction method exists', () => {
    expect(vesicash.transactions.sendTransaction).toBeDefined();
  });

  test('that acceptTransaction method exists', () => {
    expect(vesicash.transactions.acceptTransaction).toBeDefined();
  });

  test('that rejectTransaction method exists', () => {
    expect(vesicash.transactions.rejectTransaction).toBeDefined();
  });

  test('that listById method exists', () => {
    expect(vesicash.transactions.listById).toBeDefined();
  });

  test('that listByBusiness method exists', () => {
    expect(vesicash.transactions.listByBusiness).toBeDefined();
  });

  test('that extendDueDate method exists', () => {
    expect(vesicash.transactions.extendDueDate).toBeDefined();
  });

  test('that delivered method exists', () => {
    expect(vesicash.transactions.delivered).toBeDefined();
  });

  test('that acceptDelivery method exists', () => {
    expect(vesicash.transactions.acceptDelivery).toBeDefined();
  });

  test('that rejectDelivery method exists', () => {
    expect(vesicash.transactions.rejectDelivery).toBeDefined();
  });
});

describe('Transaction resource test', () => {
  test('create fails when no payload is passed', () => expect(vesicash.transactions.create({}))
    .rejects.toThrow(AxiosError));

  test('partiesUpdate fails when no payload is passed', () => expect(vesicash.transactions
    .partiesUpdate({}))
    .rejects.toThrow(AxiosError));

  test('sendTransaction fails when no payload is passed', () => expect(vesicash.transactions
    .sendTransaction({}))
    .rejects.toThrow(AxiosError));

  test('acceptTransaction fails when no payload is passed', () => expect(vesicash.transactions
    .acceptTransaction({}))
    .rejects.toThrow(AxiosError));

  test('rejectTransaction fails when no payload is passed', () => expect(vesicash.transactions
    .rejectTransaction({}))
    .rejects.toThrow(AxiosError));

  test('listById fails when no payload is passed', () => expect(vesicash.transactions
    .listById({}))
    .rejects.toThrow(AxiosError));

  test('listByBusiness fails when no payload is passed', () => expect(vesicash.transactions
    .listByBusiness({}))
    .rejects.toThrow(AxiosError));

  test('extendDueDate fails when no payload is passed', () => expect(vesicash.transactions
    .extendDueDate({}))
    .rejects.toThrow(AxiosError));

  test('delivered fails when no payload is passed', () => expect(vesicash.transactions
    .delivered({}))
    .rejects.toThrow(AxiosError));

  test('acceptDelivery fails when no payload is passed', () => expect(vesicash.transactions
    .acceptDelivery({}))
    .rejects.toThrow(AxiosError));

  test('rejectDelivery fails when no payload is passed', () => expect(vesicash.transactions
    .rejectDelivery({}))
    .rejects.toThrow(AxiosError));
});
