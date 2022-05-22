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