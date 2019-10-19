const {Blockchain, Transaction} = require("./blockchain");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('6664b0ea7a119c24c266bb7ae4a0ce564d91a9235af9a6d091266f5c1b8c1ea6');
const myWalletAddress = myKey.getPublic('hex');

let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'Public Key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log("\n Starting miner...");
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of sourabh is ", savjeeCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', savjeeCoin.isChainValid());


/*
console.log("Mining block...1");
savjeeCoin.addBlock(new Block(1, "10/07/2109", {amount: 4}));

console.log("Mining block...2");
savjeeCoin.addBlock(new Block(2, "12/07/2109", {amount: 40}));
*/

/*
savjeeCoin.addBlock(new Block(1, "10/07/2109", {amount: 4}));
savjeeCoin.addBlock(new Block(2, "12/07/2109", {amount: 40}));

console.log('Is blockcain valid? '+ savjeeCoin.isChainValid());

savjeeCoin.chain[1].data = { amount: 100 };
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();

console.log('Is blockcain valid? '+ savjeeCoin.isChainValid());
*/

//console.log(JSON.stringify(savjeeCoin, null, 4));