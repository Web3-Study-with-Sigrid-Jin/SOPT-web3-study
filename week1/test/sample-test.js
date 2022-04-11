const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should transfer tokens", async function () {
    const StoreToken = await ethers.getContractFactory("StoreToken");
    const contract = await StoreToken.attach("0xc494f3b672060607a865cf737732bc5048fd8670");
    await contract.approveSpendToken(10);

    await contract.depositISHTokens("0x01725BE700413D34bCC5e961de1d0C777d3A52F4", 5);


    // // const greeter = await Greeter.deploy("Hello, world!");
    // // await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
