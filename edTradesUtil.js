
// var paras={
//     module:"account",
//     action:"txlist",
//     address:"0x7e42396e2fe49d6ad86710fb40dbe99143a6d6ba",
//     startblock:0,
//     endblock:99999999,
//     sort:"desc",
//     apikey:"8VS7KBP65Q7TQE4NGNUDEF69M6M6TH4BRS"
// }


const request = require('request');
const abiDecoder = require('abi-decoder'); // NodeJS



const KNC_ABI = [{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"amount","type":"uint256"}],"name":"trade","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"order","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orderFills","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"amountFilled","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeMake_","type":"uint256"}],"name":"changeFeeMake","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeMake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeRebate_","type":"uint256"}],"name":"changeFeeRebate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"amount","type":"uint256"},{"name":"sender","type":"address"}],"name":"testTrade","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeAccount_","type":"address"}],"name":"changeFeeAccount","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeRebate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeTake_","type":"uint256"}],"name":"changeFeeTake","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"admin_","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orders","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeTake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"accountLevelsAddr_","type":"address"}],"name":"changeAccountLevelsAddr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"accountLevelsAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"availableVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"admin_","type":"address"},{"name":"feeAccount_","type":"address"},{"name":"accountLevelsAddr_","type":"address"},{"name":"feeMake_","type":"uint256"},{"name":"feeTake_","type":"uint256"},{"name":"feeRebate_","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"},{"indexed":false,"name":"user","type":"address"}],"name":"Order","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"v","type":"uint8"},{"indexed":false,"name":"r","type":"bytes32"},{"indexed":false,"name":"s","type":"bytes32"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"get","type":"address"},{"indexed":false,"name":"give","type":"address"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Withdraw","type":"event"}];
const token_map={
  "0xdd974d5c2e2928dea5f71b9825b8b646686bd200":'KNC',
  "0x0000000000000000000000000000000000000000":'ETH'

}


let eth_address="0x7e42396e2fe49d6ad86710fb40dbe99143a6d6ba";
let apiKey="8VS7KBP65Q7TQE4NGNUDEF69M6M6TH4BRS";

function decoder(abi,input){
  abiDecoder.addABI(abi);

  return abiDecoder.decodeMethod(input);

}

function toEther(x){
  return x*Math.pow(10,-18)

}
function parseSell(trade){
  // console.log(trade);
  let fee=toEther(trade[10]['value'])*0.003;
  let targetToken=token_map[trade[0]['value']];
  return {
    target_token:targetToken,
    target_move:-(toEther(trade[10]['value'])+fee),

    base_token:token_map[trade[2]['value']],
    base_move:toEther(trade[3]['value']/trade[1]['value']*trade[10]['value']),
    feeAsset:targetToken,
    fee:fee


  }

}

function parseBuy(trade){
  // console.log(trade);
  let fee=toEther(trade[10]['value'])*0.003;
  let baseToken=token_map[trade[0]['value']];
  return {
    target_token:token_map[trade[2]['value']],
    target_move:toEther(trade[3]['value']/trade[1]['value']*trade[10]['value']),
   
    base_token:baseToken,
    base_move:-(toEther(trade[10]['value'])+fee),
    feeAsset:baseToken,
    fee:fee

  }

}

function parseWithdraw(withdraw){
  return {
    asset:'ETH',
    amount:toEther(withdraw[0]['value'])
  }

}

function parseTransfer(transfer,isTransferOut){
  return {
    asset:'ETH',
    amount:isTransferOut?-toEther(transfer['value']):toEther(transfer['value'])
  }

}

function parseTokenMovement(withdrawToken,isWithdrawal){
  return{
    asset:token_map[withdrawToken[0]['value']],
    amount:isWithdrawal?toEther(withdrawToken[1]['value']):-toEther(withdrawToken[1]['value'])
  }
}

request('http://api.etherscan.io/api?module=account&action=txlist&address='+eth_address+'&startblock=0&endblock=99999999&sort=asc&apikey='+apiKey, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
  let trades=body['result'];
  let totalTrades=trades.length;
  console.log('there are total trades of '+totalTrades);
  for(let i=0;i<totalTrades;i++){

    let trade=trades[i];
    let txHash=trade['hash'];
    let input=trade['input'];

    if(input!='0x'){  // interacting wiht smartcontract
      decoded_res=decoder(KNC_ABI,input);

      //a trade, take order
      if(decoded_res && decoded_res['name']==='trade'){

        if(decoded_res['params'][2].value==='0x0000000000000000000000000000000000000000'){
          console.log('the transaction with hash ID: '+txHash+" is a sell trade");
          output=parseSell(decoded_res['params']);
        }else if(decoded_res['params'][0].value==='0x0000000000000000000000000000000000000000'){
          console.log('the transaction with hash ID: '+txHash+" is a buy trade");
          output=parseBuy(decoded_res['params']);

        }
        console.log(output);

      }

      //a withdraw
      if(decoded_res && decoded_res['name']==='withdraw'){
        console.log('the transaction with hash ID: '+txHash+" is a withdraw from EtherDelta");
        output=parseWithdraw(decoded_res['params']);
        console.log(output);
      }

      //a deposit
      if(decoded_res && decoded_res['name']==='deposit'){
        console.log('the transaction with hash ID: '+txHash+" is a deposit to EtherDelta");
        output=parseTransfer(trade,true);
        console.log(output);
      }

      //a withDrawlToken
      if(decoded_res && decoded_res['name']==='withdrawToken'){
        console.log('the transaction with hash ID: '+txHash+" is a withdrawToken from EtherDelta");
        output=parseTokenMovement(decoded_res['params'],true);
        console.log(output);
      }

       //a DepositToken
      if(decoded_res && decoded_res['name']==='depositToken'){
        console.log('the transaction with hash ID: '+txHash+" is a depositToken to EtherDelta");
        output=parseTokenMovement(decoded_res['params'],false);
        console.log(output);
      }

    }else{  
      //a transfer
      console.log('the transaction with hash ID: '+txHash+" is a transfer");
      if(trade['from']===eth_address){
        output=parseTransfer(trade,true);
        console.log(output);
      }else{
        output=parseTransfer(trade,false);
        console.log(output);
      }
      

    }

      
  }
});

