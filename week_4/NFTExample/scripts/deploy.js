// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const TokenContractFactory = await hre.ethers.getContractFactory("ATNToken");
  const TokenContract = await TokenContractFactory.deploy(
    "AllThatNode",
    "ATN",
    8000
  );
  await TokenContract.deployed();
  console.log("Contract deployed to:", TokenContract.address);
  // // Call the function.
  // let txn = await nftContract.makeAnEpicNFT();
  // // Wait for it to be mined.
  // await txn.wait();

  // // Mint another NFT for fun.
  // txn = await nftContract.makeAnEpicNFT();
  // // Wait for it to be mined.
  // await txn.wait();
}

const runMain = async () => {
  try {
    await main();
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  } catch (error) {
    console.log(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

// eslint-disable-next-line prettier/prettier
runMain();