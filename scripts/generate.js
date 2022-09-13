const hre = require("hardhat");

async function main() {
    const wallet = hre.ethers.Wallet.createRandom();
    console.info("Address:", wallet.address);
    console.info("Private Key:", wallet.privateKey);
    console.info("Mnemonic:", wallet.mnemonic.phrase);
}

main().catch((err)=> {
    console.error(err);
    process.exitCode = 1;
});