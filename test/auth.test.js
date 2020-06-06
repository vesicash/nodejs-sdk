/* eslint-disable no-undef */
const { AxiosError } = require('axios');
const vesicash = require('./setup');

describe('All methods are defined', () => {
  test('that login method exists', () => {
    expect(vesicash.auth.login).toBeDefined();
  });

  test('that signup method exists', () => {
    expect(vesicash.auth.signup).toBeDefined();
  });
});

describe('Auth resource test', () => {
  test('Login fails when no payload is passed', () => expect(vesicash.auth.login({}))
    .rejects.toThrow(AxiosError));

  test('Signup fails when no payload is passed', () => expect(vesicash.auth
    .signup({}))
    .rejects.toThrow(AxiosError));
});
