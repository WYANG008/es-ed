const Web3 = require('web3');
const provider="http://localhost:8545";
web3 = new Web3(new Web3.providers.HttpProvider(provider));
// const ABIEtherDelta = require('./contracts/etherdelta.json');
// const addressEtherDelta="0x8d12a197cb00d4747a1fe03395095ce2a5cc6819";

// let contractEtherDelta=new web3.eth.Contract(ABIEtherDelta,addressEtherDelta);

userAddress="0x00b1AFB7DF303f0C3f922A22AaE1912F4E18aE4a";

web3.eth.getBalance(userAddress).then(balance=>{console.log(balance)});


var subscription = web3.eth.subscribe('logs', {
    address: userAddress
}, function(error, result){
    if (!error)
        console.log(log);
})
.on("data", function(log){
})
.on("changed", function(log){
});