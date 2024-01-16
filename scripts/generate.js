const hre = require("hardhat");
const { Wallet } = require('ethers');
const { utils } = require('ethers');
const ethers = require('ethers')

async function main() { 

    //const wallet = Wallet.fromMnemonic(utils.entropyToMnemonic(utils.randomBytes(32)) )
    //let wallet = hre.ethers.Wallet.createRandom([ethers.utils.randomBytes(32)]);
 
    //console.info("Address:", wallet.address);
    //console.info("Private Key:", wallet.privateKey);
    //console.info("Mnemonic:", wallet.mnemonic.phrase); 

    await getFromMnemonic();
}

async function getRandomNumber() {
    return Math.floor(
        Math.random() * (9999999 - 1) + 1
      );
}

async function getFromMnemonic() {
   
    const wallet = Wallet.fromMnemonic(
        utils.entropyToMnemonic(utils.randomBytes(32))
      )
      
      console.log('wallet.address:', wallet.address)
      console.log('wallet.mnemonic.phrase:', wallet.mnemonic.phrase)
      console.log('wallet.privateKey:', wallet.privateKey)
}

main().catch((err)=> {
    console.error(err);
    process.exitCode = 1;
});