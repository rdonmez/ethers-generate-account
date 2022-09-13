const hre = require("hardhat");

const { ACCOUNT_MNEMONIC } = process.env;

async function main() {
    const accounts = await hre.ethers.getSigners();

    // second account
    //let path = "m/44'/60'/0'/0/0";
    //let mnemonicWallet = await ethers.Wallet.fromMnemonic(ACCOUNT_MNEMONIC, path);

    const basePath = "m/44'/60'/0'/0/";
    const hdNode = ethers.utils.HDNode.fromMnemonic(ACCOUNT_MNEMONIC)
    //console.log(accounts.map(t=> t.address));
    for(let i = 0; i < accounts.length; i ++) {
        const account = accounts[i];
        console.info(`Account[${i+1}] Address:`, account.address);
        console.info(`Account[${i+1}] PrivateKey:`, hdNode.derivePath(basePath + i.toString()).privateKey);
    }
}

main().catch((err)=> {
    console.error(err);
    process.exitCode = 1;
});