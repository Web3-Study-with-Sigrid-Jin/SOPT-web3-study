const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });

  it("Counter Example", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const CounterFactory = await ethers.getContractFactory("Counter");
    const counterImpl = await CounterFactory.deploy(5);
    await counterImpl.deployed();

    expect(await counterImpl.owner()).to.equal(owner.address);

    // get
    expect(await counterImpl.current()).to.equal(5);

    // reset
    await counterImpl.reset()
    expect(await counterImpl.current()).to.equal(0);

    // increment
    await counterImpl.increment()
    expect(await counterImpl.current()).to.equal(1);

    // decrement
    await counterImpl.decrement()
    expect(await counterImpl.current()).to.equal(0);

    // increment not by owner
    await counterImpl.connect(addr1).increment(); // failed
  });
});
