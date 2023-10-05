const hre = require("hardhat");
const ethers = hre.ethers;
const swissProviders = ethers.getDefaultProvider("https://json-rpc.testnet.swisstronik.com");
const mumbaiProviders = ethers.getDefaultProvider("https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78");

//address of swisscontract deployed on swisstronik testnet
let swissContractAddress = "0xEe36fAD43D7C3bF5Dc95cE3AfAA257e33531a814";

//address of mumbaicontract deployed on mumbai testnet
let mumbaiContractAddress = "0xf9F73817f4359Ee7669926Fcc696142FbE19a67B";

async function main() {
   let swissResult = await swissProviders.getStorage(swissContractAddress, 0)
   console.log(swissResult)

   let mumbaiResult = await mumbaiProviders.getStorage(mumbaiContractAddress, 0)
   console.log(mumbaiResult)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });