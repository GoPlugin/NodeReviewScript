const Xdc3 = require("xdc3");
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(`./oracle.json`);
const axios = require('axios').default;

const xdc3 = new Xdc3(
    new Xdc3.providers.HttpProvider("https://rpc.xinfin.network")
);

async function getTotalTxn(contractadress) {
    const url = `https://explorer.xinfin.network/api/txs/listByAccount/${contractadress}?page=1&limit=20&tx_type=all`;
    const response = await axios.get(url);
    var txHashList = [];
    for (var i = 0; i < response.data.items.length; i++) {
        txHashList.push(response.data.items[i].hash);
    }
    console.log("xxxxxxxxxxxxxxxx  getTotalTxn START   xxxxxxxxxxxxxxxxxxxxxxxx");
    console.log("getTotalTxn", txHashList);
    console.log("xxxxxxxxxxxxxxxx  getTotalTxn END   xxxxxxxxxxxxxxxxxxxxxxxx");
    await invoke(txHashList);
}

async function txReceipt(txHash) {
    var txReceiptValue = await xdc3.eth.getTransactionReceipt(txHash, async (error, txResult) => {
        if (txResult.status) {
            const txValue = await xdc3.eth.getTransaction(`${txHash}`, async (error, txResult2) => {
                var result = await decoder.decodeData(txResult2.input);
                if (result.method === "fulfillOracleRequest" || result.method === "setFulfillmentPermission") {
                    console.log('\n');
                    console.log("xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx");
                    console.log("Txn Hash is ,", `${txHash}`);
                    console.log(`Method invocation ${result.method} is, ${txResult.status}`);
                    console.log("xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx");

                } else {
                    console.log('\n');
                    console.log("xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx");
                    console.log("Txn Hash is ,", `${txHash}`);
                    console.log(`Method invocation ${result.method} is, ${txResult.status}`);
                    console.log("xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx");
                }
            });
        } else {
            console.log('\n');
            console.log("xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx");
            console.log("Txn Hash is ,", `${txHash}`);
            console.log("Transaction is failed", txResult.status);
            console.log("xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx");

        }
    });
}

async function invoke(txHashList) {
    for (i = 0; i < txHashList.length; i++) {
        await txReceipt(txHashList[i])
    }
}

// getTotalTxn("xdc9072328cce4B1F5e9CFb6d0D15b588B33DD4bE21");
getTotalTxn("xdc049e5Fb7768db63700f2AEDEAc75E22d91054E80");

