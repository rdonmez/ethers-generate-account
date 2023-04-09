const hre = require("hardhat");
const path = require("path");
const csvWriter = require('csv-writer');

async function main() { 

    let addrs = [];
   
 
    const writer = csvWriter.createObjectCsvWriter({
        path: path.resolve(__dirname, 'eth_addrs.csv'),
        header: [
          { id: 'address', title: 'Address' },
          { id: 'private_key', title: 'Private Key' },
          { id: 'seed', title: 'Seed' }
        ],
    }); 

    for(var i = 0; i < 999; i++) {

        let entropy = (await getEntropy()).toString();
        let wallet = hre.ethers.Wallet.createRandom([entropy]);

        addrs.push({ address: wallet.address, private_key: wallet.privateKey, seed: wallet.mnemonic.phrase });
    }

    

    writer.writeRecords(addrs).then(() => {
        console.log('Done!');
    });
}
 
async function getEntropy() {
    return Math.floor(
        Math.random() * (9999999 - 1) + 1
      );
}
 
main().catch((err)=> {
    console.error(err);
    process.exitCode = 1;
});