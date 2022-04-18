// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // deploying ERC20 token
  const [owner, addr1] = await ethers.getSigners();

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  console.log('Deploying MyToken...');
  const token = await MyToken.deploy({value: hre.ethers.utils.parseEther("0.07")});
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // deploying storeToken
  const StoreToken = await ethers.getContractFactory("StoreToken");
  const store = await StoreToken.deploy(token.address, {value: hre.ethers.utils.parseEther("0.07")});
  console.log("Store deployed to:", store.address);

  await token.connect(owner).approve(store.address, 20000000);
  console.log("APPROVED")

  await store.connect(owner).depositISHTokens("0x01725BE700413D34bCC5e961de1d0C777d3A52F4", 10000000);

  // await store.depositISHTokens("0x01725BE700413D34bCC5e961de1d0C777d3A52F4", 5);

  console.log("DONE");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
