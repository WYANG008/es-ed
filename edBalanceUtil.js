const Web3 = require('web3');
const provider="https://mainnet.infura.io/Ky03pelFIxoZdAUsr82w";
web3 = new Web3(new Web3.providers.HttpProvider(provider));
const ABIEtherDelta = require('./contracts/etherdelta.json');
const addressEtherDelta="0x8d12a197cb00d4747a1fe03395095ce2a5cc6819";

let contractEtherDelta=new web3.eth.Contract(ABIEtherDelta,addressEtherDelta);

userAddress="0x7e42396e2fe49d6ad86710fb40dbe99143a6d6ba";
// tokenAddress="0xdd974d5c2e2928dea5f71b9825b8b646686bd200";

let token={
    "ETH":"0x0000000000000000000000000000000000000000",
    "KNC":"0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
}


let tokenAddress=token['KNC'];
contractEtherDelta.methods.balanceOf(tokenAddress,userAddress).call()
.then(res=>{console.log("your ether balance: "+res)});
   
// contractEtherDelta.events.Order({}, { fromBlock: 0, toBlock: 'latest' }).call((error, eventResult) => {
//     if (error)
//       console.log('Error in myEvent event handler: ' + error);
//     else
//       console.log('myEvent: ' + JSON.stringify(eventResult.args));
//   });


// var subscription = web3.eth.subscribe('logs', {
//     address: addressEtherDelta,
//     topics: [null]
// }, function(error, result){
//     if (!error)
//         console.log(log);
// })
// .on("data", function(log){
// })
// .on("changed", function(log){
// });