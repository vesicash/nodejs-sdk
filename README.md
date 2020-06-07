# Vesicash Node.js sdk

> Nodejs API wrapper for [Vesicash](https://vesicash.com)


[![NPM](https://nodei.co/npm/vesicash-nodejs-sdk.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/vesicash-nodejs-sdk)


## Documentation

Take a look at the [API Docs here](https://docs.vesicash.com/)

## Installation

Install the package from [npm](https://www.npmjs.com/package/vesicash-nodejs-sdk) by running 

```bash
npm install vesicash-nodejs-sdk
```
 or
 
 ```
 yarn add vesicash-nodejs-sdk
 ```

## Usage

```javascript
const Vesicash = require('vesicash-nodejs-sdk');

const credentials = {
    publicKey: 'VESICASH-PUBLIC-KEY',
    privateKey: 'VESICASH-PRIVATE-KEY'
}

const isSandbox = true; // for Sandbox, defaults to false 

// Initialize the class passing the config
const vesicash = new Vesicash(credentials, isSandbox);

// Create a transaction 
try {
  const transaction = await vesicash.transactions.create({
   ...
  })
  // do somthing with transaction response
}catch (error) {
  // AxiosError
}

```

## Resources

#### Note:
All method returns a promise that resolves into an axios response in this format
```json
{
  "data": Object,
  "status": Number,
  "statusText": String,
  "headers": any,
  "request": any
}
```

### `Auth`
- `vesicash.auth.login()` login into vesicash
    
    ```javascript
    ...
  
    try {
          const response = await vesicash.auth.login({ 
              email_address: '',
              password: ''
          });
        // do something with response
    }
    catch (e) {
      //
    }
    ```

- `vesicash.auth.signup()` Signup a new user
    
    ```javascript
    ...
  
    try {
          const response = await vesicash.auth.signup({ 
              email_address: '',
              password: ''
          });
        // do something with response
    }
    catch (e) {
      //
    }
    ```
    
   [Learn more](https://docs.vesicash.com/api-documentation/user-management/onboarding) about authentication transaction.

### `Transactions`
- `vesicash.transaction.create()` create a transaction by passing the required payload

    ```javascript
    ...

    const payload = {
          title: "Design a house plan",
          type: "oneoff",
          quantity: 1,
          amount: 700000,
          description: "An architectural design of a 3 bedroom apartment in lekki",
          parties: {
              buyer : 'BUYER-ACCOUNT-ID',
              charge_bearer: 'CHARGE-BEARER-ACCOUNT-ID',
              sender: 'SENDER-ACCOUNT-ID',
              seller: 'SELLER-ACCOUNT-ID',
              recipient: 'RECIPIENT-ACCOUNT-ID'
          },
          due_date: "2/12/2020",
          inspection_period: 1,
          currency: "NGN",
    };

    try {
      const response = await vesicash.transactions.create(payload);
      // do something with response
    }
    catch (e) {
     //
    }
    ```
    [Learn more](https://docs.vesicash.com/api-documentation/transactions/create-a-product-transaction) about transactions and how to creat different types of transactions.


- `vesicash.transaction.sendTransaction()` Send a transaction to involved parties.

    ```javascript
    ...
     
    try {
      const payload = {
         transaction_id: "F2SUkXINIJ6ALjDmt3cT" // your the transaction-id
      };
      const response = await vesicash.transactions.sendTransaction(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
    [Learn more](https://docs.vesicash.com/api-documentation/transactions/send-transaction) about sending transactions.


- `vesicash.transaction.partiesUpdate()` Update the parties involved in a transaction.

    ```javascript
    ...
     
    try {
      const payload = {
          	transaction_id:"F2SUkXINIJ6ALjDmt3cT", // your the transaction-id
            parties: {
                recipient: {
                    account_id: 3881795242
                 }
            }
      };
      const response = await vesicash.transactions.partiesUpdate(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
    [Learn more](https://docs.vesicash.com/api-documentation/transactions/transaction-parties) about transaction parties.


- `vesicash.transaction.acceptTransaction()` Agree to transaction

    ```javascript
    ...
     
    try {
      const payload = {
          	transaction_id:"F2SUkXINIJ6ALjDmt3cT", // your the transaction-id
      };
      const response = await vesicash.transactions.acceptTransaction(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
    [Learn more](https://docs.vesicash.com/api-documentation/transactions/agree-to-transaction) about agreeing to a transaction.
