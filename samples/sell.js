//blockNumber: 4840067
//timestamp: 1514872291
//transaction hash: 0x24172847988fc028cadf03ca73ab3f1a11a4399d43b331388de2054bc40b47f6
//taker sell 0.6 knc at 0.003999
[
  { 
    name: 'tokenGet',
    value: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    type: 'address' 
  },
  { 
    name: 'amountGet',
    value: '500000000000000000000',
    type: 'uint256' 
  },
  { 
    name: 'tokenGive',
    value: '0x0000000000000000000000000000000000000000',
    type: 'address' 
  },
     
  { 
    name: 'amountGive',
    value: '1999500000000000000',
    type: 'uint256' 
  },
  { 
    name: 'expires', 
    value: '4848300', 
    type: 'uint256' 
  },
  { name: 'nonce', value: '1124484782', type: 'uint256' },
  { name: 'user',
    value: '0x3badd3c52c93e96c28b4e7b2bbf268305ebe00d0',
    type: 'address' },
  { name: 'v', value: '28', type: 'uint8' },
  { name: 'r',
    value: '0x638316ca9a8c9d3e258b0a3b257866751a9b9770fc385fb84b50b9b3e449867b',
    type: 'bytes32' },
  { name: 's',
    value: '0x4f7dd69792fc614296374f88dbe4532d9c66704b39236cb719d9e3a88550588e',
    type: 'bytes32' },
  { name: 'amount', value: '600000000000000000', type: 'uint256' 
} 
]


//Maker sell 0.3 knc at 0.003843







// uint feeMakeXfer = safeMul(amount, feeMake) / (1 ether);
// tokens[tokenGet][msg.sender] = safeSub(tokens[tokenGet][msg.sender], safeAdd(amount, feeTakeXfer));
// tokens[tokenGive][msg.sender] = safeAdd(tokens[tokenGive][msg.sender], safeMul(amountGive, amount) / amountGet);

// feeTakeXfer=0.6*0.003=0.0018
// KNC=KNC_0-(0.6+0.0018)=KNC_0-0.6018
// ETH=ETH_0+1999500000000000000*600000000000000000/500000000000000000000=ETH_0+2.3994*10^15

