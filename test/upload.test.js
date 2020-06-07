/* eslint-disable no-undef */
const { AxiosError } = require('axios');
const vesicash = require('./setup');

describe('All methods are defined', () => {
  test('that uploadFile method exists', () => {
    expect(vesicash.upload.uploadFile).toBeDefined();
  });
});

describe('Upload resource test', () => {
  test('uploadFile fails when no payload is passed', () => expect(vesicash.upload
    .uploadFile({}))
    .rejects.toThrow(AxiosError));
});
