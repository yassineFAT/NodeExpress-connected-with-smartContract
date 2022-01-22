const express = require('express')
const Web3 = require('web3');
const app = express()
const port = 3000
const ABI = require("./config/abi.json");
function connectingtoAcontract(){
    var provider = 'https://eth-ropsten.alchemyapi.io/v2/px4RbbpYK7a9gWXsgsCDCQjSpxB5qqUA';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
var YourContract= new web3.eth.Contract(ABI.abi, ABI.contractAdress);
console.log(YourContract)
}
app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))
app.listen(port, () => {console.log(`App listening on port ${port}!`)
connectingtoAcontract()
})