# Node Review Automation Script
## By Plugin

This script help you to check if your oracle address has setfullfillment done and alarmclock executed fine. Please note, this will simply through the transaction status & the method that get invoked by respective transaction.

## How to Run
## Installation

[Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/GoPlugin/NodeReviewScript.git
cd NodeReviewScript
npm i
node server.js
```
Make sure to pass your contract address like below, this will bring all the transaction for the respective contract and result the method invocation status

```
node server.js xdc9072328cce4B1F5e9CFb6d0D15b588B33DD4bE21
```

Result should be something like below...

```
node server.js xdc9072328cce4B1F5e9CFb6d0D15b588B33DD4bE21
xxxxxxxxxxxxxxxx  getTotalTxn START   xxxxxxxxxxxxxxxxxxxxxxxx
getTotalTxn [
  '0x1aa2a12403bc95668c5a5bc89d68cabd9991775f882ad43ab18d387fe8fd81ee',
  '0xf3c37398e03f868b388457058cf11be35fa61d6c8339c941f4bff0624732b9e4',
  '0xff913c9a925f95f68d718a4e47138b42ffc6ead3d673ed2d923f9e44e808703d'
]
xxxxxxxxxxxxxxxx  getTotalTxn END   xxxxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx
Txn Hash is , 0x1aa2a12403bc95668c5a5bc89d68cabd9991775f882ad43ab18d387fe8fd81ee
Method invocation fulfillOracleRequest is, true
xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx
Txn Hash is , 0xff913c9a925f95f68d718a4e47138b42ffc6ead3d673ed2d923f9e44e808703d
Method invocation null is, true
xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx
Txn Hash is , 0xf3c37398e03f868b388457058cf11be35fa61d6c8339c941f4bff0624732b9e4
Method invocation setFulfillmentPermission is, true
xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx
```