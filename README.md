# Vesicash Node.js sdk

> Nodejs API wrapper for [Vesicash](https://vesicash.com)


[![NPM](https://nodei.co/npm/vesicash-nodejs-sdk.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/vesicash-nodejs-sdk)

## Table of content
* [Documentation](#documentation)
* [Installation](#installation)
* [Usage](#usage)
* [Resources](#resources)
    - [Note](#note)
    + [Auth](#auth)
      * [`vesicash.auth.login()` login into vesicash](#vesicashauthlogin-login-into-vesicash)
      * [`vesicash.auth.signup()` Signup a new user](#vesicashauthsignup-signup-a-new-user)
    + [Transactions](#transactions)
      * [`vesicash.transaction.create()` create a transaction by passing the required payload](#vesicashtransactioncreate-create-a-transaction-by-passing-the-required-payload)
      * [`vesicash.transaction.sendTransaction()` Send a transaction to involved parties.](#vesicashtransactionsendtransaction-send-a-transaction-to-involved-parties)
      * [`vesicash.transaction.partiesUpdate()` Update the parties involved in a transaction.](#vesicashtransactionpartiesupdate-update-the-parties-involved-in-a-transaction)
      * [`vesicash.transaction.acceptTransaction()` Agree to transaction](#vesicashtransactionaccepttransaction-agree-to-transaction)
      * [`vesicash.transaction.rejectTransaction()` Reject a transaction](#vesicashtransactionrejecttransaction-reject-a-transaction)
      * [`vesicash.transaction.listById()` Fetch transaction details](#vesicashtransactionlistbyid-fetch-transaction-details)
      * [`vesicash.transaction.listByBusiness()` List all the transaction belonging to you business or your customers](#vesicashtransactionlistbybusiness-list-all-the-transaction-belonging-to-you-business-or-your-customers)
      * [`vesicash.transaction.listByUser()` List all the transactions that belongs to a specific customer](#vesicashtransactionlistbyuser-list-all-the-transactions-that-belongs-to-a-specific-customer)
      * [`vesicash.transaction.requestExtendDueDate()` Request transaction due date extension](#vesicashtransactionrequestextendduedate-request-transaction-due-date-extension)
      * [`vesicash.transaction.approveExtendDueDate()` Approve a transaction due date extension request](#vesicashtransactionapproveextendduedate-approve-a-transaction-due-date-extension-request)
      * [`vesicash.transaction.delivered()` Mark transaction as shipped](#vesicashtransactiondelivered-mark-transaction-as-shipped)
      * [`vesicash.transaction.acceptDelivery()` Accept a shipped transaction](#vesicashtransactionacceptdelivery-accept-a-shipped-transaction)
      * [`vesicash.transaction.rejectDelivery()` Reject shipped transaction](#vesicashtransactionrejectdelivery-reject-shipped-transaction)
    + [Payment](#payment)
    - [`vesicash.payment.fundTransaction()` Fund a transaction](#vesicashpaymentfundtransaction-fund-a-transaction)
    - [`vesicash.payment.initiateDisbursement()` Initiate a manual disbursement](#vesicashpaymentinitiatedisbursement-initiate-a-manual-disbursement)
    + [Admin](#admin)
    - [`vesicash.admin.addBank()` Adding Bank or Mobile Money Details](#vesicashadminaddbank-adding-bank-or-mobile-money-details)
    - [`vesicash.admin.walletBalance()` Check wallet balance](#vesicashadminwalletbalance-check-wallet-balance)
    + [Upload](#upload)
    - [`vesicash.upload.uploadFile()` upload a file.](#vesicashuploaduploadfile-upload-a-file)
* [Development](#development)
    - [Contributing](#contributing)
    - [Tests](#tests)
* [Issues](#issues)


## Documentation

Take a look at the [API Docs here](https://docs.vesicash.com/)

## Installation

Install the package from [npm](https://www.npmjs.com/package/vesicash-nodejs-sdk) by running 

```bash
$ npm install vesicash-nodejs-sdk
```
 or
 
```bash
$ yarn add vesicash-nodejs-sdk
```

## Usage
To use this sdk you need to first generate your API keys by registering as a business on Vesicash.

**Sandbox** API key by registering via https://sandbox.vesicash.com/signup

**Live** API key by registering via https://vesicash.com/signup
 

```javascript
const Vesicash = require('vesicash-nodejs-sdk');

const credentials = {
    publicKey: 'VESICASH-PUBLIC-KEY', // replace with your generated PUBLIC Key
    privateKey: 'VESICASH-PRIVATE-KEY' // replace with your generated PRIVATE Key
};

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

### Auth
- ##### `vesicash.auth.login()` login into vesicash
    
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

- ##### `vesicash.auth.signup()` Signup a new user
    
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
    
[Learn more](https://docs.vesicash.com/api-documentation/user-management/onboarding) about authentication

### Transactions

- ##### `vesicash.transaction.create()` create a transaction by passing the required payload

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


- ##### `vesicash.transaction.sendTransaction()` Send a transaction to involved parties.

    ```javascript
    ...
     
    try {
      const payload = {
         transaction_id: "F2SUkXINIJ6ALjDmt3cT" // the transaction-id
      };
      const response = await vesicash.transactions.sendTransaction(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/send-transaction) about sending transactions.


- ##### `vesicash.transaction.partiesUpdate()` Update the parties involved in a transaction.

    ```javascript
    ...
     
    try {
      const payload = {
          	transaction_id:"F2SUkXINIJ6ALjDmt3cT", // the transaction-id
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


- ##### `vesicash.transaction.acceptTransaction()` Agree to transaction

    ```javascript
    ...
     
    try {
      const payload = {
          	transaction_id:"F2SUkXINIJ6ALjDmt3cT", // the transaction-id
      };
      const response = await vesicash.transactions.acceptTransaction(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/agree-to-transaction) about agreeing to a transaction.

- ##### `vesicash.transaction.rejectTransaction()` Reject a transaction

    ```javascript
    ...
     
    try {
      const payload = {
          "transaction_id": "F2SUkXINIJ6ALjDmt3cT", // the transaction id 
          "reason": "I am rejecting this transaction because the amount stated is not what we discussed"
      };
      const response = await vesicash.transactions.rejectTransaction(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/reject-a-transaction) about rejecting a transaction.


- ##### `vesicash.transaction.listById()` Fetch transaction details

    ```javascript
    ...
     
    try {
      const payload = "F2SUkXINIJ6ALjDmt3cT"; // the transaction id
      const response = await vesicash.transactions.listById(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/fetch-transaction-details) about fetching a transaction.

- ##### `vesicash.transaction.listByBusiness()` List all the transaction belonging to you business or your customers

    ```javascript
    ...
     
    try {
      const payload = {
          "business_id": "ACCOUNT-ID" // the business account id
      };
      const response = await vesicash.transactions.listByBusiness(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/listing-your-transactions) about listing transactions.

- ##### `vesicash.transaction.listByUser()` List all the transactions that belongs to a specific customer

    ```javascript
    ...
     
    try {
      const payload = {
          "account_id": "ACCOUNT-ID" // the account id
      };
      const response = await vesicash.transactions.listByUser(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/listing-your-transactions) about listing transactions.

- ##### `vesicash.transaction.requestExtendDueDate()` Request transaction due date extension

    ```javascript
    ...
     
    try {
      const payload = {
          transaction_id: "F2SUkXINIJ6ALjDmt3cT", // the transaction id
          due_date:"12/2/2020"
      };
      const response = await vesicash.transactions.requestExtendDueDate(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/due-date-extension) about due date extension.

- ##### `vesicash.transaction.approveExtendDueDate()` Approve a transaction due date extension request

    ```javascript
    ...
     
    try {
      const payload = {
          transaction_id: "F2SUkXINIJ6ALjDmt3cT", // the transaction id
          due_date:"12/2/2020"
      };
      const response = await vesicash.transactions.approveExtendDueDate(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/due-date-extension) about due date extension.

- ##### `vesicash.transaction.delivered()` Mark transaction as shipped

    ```javascript
    ...
    
    try {
      const payload = {
          transaction_id: "F2SUkXINIJ6ALjDmt3cT", // the transaction id
      };
      const response = await vesicash.transactions.delivered(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/indicate-transaction-delivery) about transaction delivery.

- ##### `vesicash.transaction.acceptDelivery()` Accept a shipped transaction

    ```javascript
    ...
    
    try {
      const payload = {
          transaction_id: "F2SUkXINIJ6ALjDmt3cT", // the transaction id
      };
      const response = await vesicash.transactions.acceptDelivery(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/accept-transaction-delivery) accepting a shipped transaction.

- ##### `vesicash.transaction.rejectDelivery()` Reject shipped transaction

    ```javascript
    ...
    
    try {
      const payload = {
          transaction_id: "F2SUkXINIJ6ALjDmt3cT", // the transaction id
          reason: "Rejection reasons"
      };
      const response = await vesicash.transactions.rejectDelivery(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/accept-transaction-delivery) rejecting a shipped transaction.

### Payment

- #### `vesicash.payment.fundTransaction()` Fund a transaction

    ```javascript
    ...
        
    try {
      const payload = {
        transaction_id: "F2SUkXINIJ6ALjDmt3cT", // the transaction id
        success_page: "https://website.com/payment/success" // A URL where you want the payer to be directed after payment - optional field
      };
      const response = await vesicash.payment.fundTransaction(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/transactions/funding-a-transaction) funding a transaction.

- #### `vesicash.payment.initiateDisbursement()` Initiate a manual disbursement

    ```javascript
    ...
        
    try {
      const payload = {
          recipient_id: 'ACCOUNT-ID', // your recipient account ID
          amount: 1000,
          currency: "NGN",
          debit_currency: "NGN"
      };
      const response = await vesicash.payment.initiateDisbursement(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/disbursement/initiate-disbursement) initiating a manual disbursement.

### Admin

- #### `vesicash.admin.addBank()` Adding Bank or Mobile Money Details
    
    ```javascript
    ...
    
    try {
      const payload = {
        account_id : 6751951308, // your account id
        updates: {
          bank_id : 23,
          account_name : "John Doe",
          account_no : "3012364609",
          mobile_money_operator: "Tigo" // (this field is only required when saving a mobile money details)
        }
      };
      const response = await vesicash.admin.addBank(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/disbursement/bank-details) adding Bank or Mobile Money Details.

- #### `vesicash.admin.walletBalance()` Check wallet balance
    
    ```javascript
    ...
            
    try {
      const payload = {
        account_id : 'ACCOUNT-ID', // your account id
      };
      const response = await vesicash.admin.walletBalance(payload);
      // do something with response
    }
    catch (e) {
      //
    }
    ```
[Learn more](https://docs.vesicash.com/api-documentation/disbursement/initiate-disbursement) about wallet balance.

### Upload

- #### `vesicash.upload.uploadFile()` upload a file.

  This method expects a formdata
  
  ```javascript
  ...

  try {
     const FormData = require('form-data');
     const fs = require('fs');
    
     const files = [
       fs.createReadStream('/foo/bar1.jpg'),
       fs.createReadStream('/foo/bar2.jpg'),
       fs.createReadStream('/foo/bar3.jpg'),
     ];
    
     // Add all the uploaded file to form data
     for (let i = 0; i < files.length; i++) {
       FormData.append(`files[${i}]`, files[i]);
     }
    
     const response = await vesicash.upload.uploadFile(payload);
     // do something with response
  }catch(e){
   //
  }

  ```
[Learn more](https://docs.vesicash.com/api-documentation/disbursement/initiate-disbursement) about wallet balance.

## Development

#### Contributing
  - clone the project
    ```bash
    $ git clone https://github.com/03balogun/vesicash-nodejs-sdk.git
    ```
  - install dependencies
    ```bash
    $ npm install
    ```

  - Env
  - Get your sandbox API keys via https://sandbox.vesicash.com 
  - Rename `.env.example` to `.env` and update the API keys  
  - Please follow the eslint rules to ensure consistent code style
  
#### Tests
To run all tests
```bash
$ npm run test
```

## Issues
If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/03balogun/vesicash-nodejs-sdk/issues)
