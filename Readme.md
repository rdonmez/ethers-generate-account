# Generate Ethereum Accounts

This repo demonstrates how we can generate ethereum walllet adddresses with ethers. 

## 1. Install Dependencies
```shell 
$ npm install
```

## 2. Generate Accounts
```shell 
$ npx hardhat run scripts/generate.js
```

Copy the console result. 

## 2. Setting Env Variables
```javascript
ACCOUNT_ADDRESS={ADDRESS}
ACCOUNT_PRIVATE_KEY={PRIVATE_KEY}
ACCOUNT_MNEMONIC={MNEMONIC}
```

## 4. Print Accounts
```shell 
$ npx hardhat run scripts/print.js
```

