const { expect } = require("chai");
const { ethers } = require("hardhat");

let ATNToken;
let owner;

describe("ATNToken", function () {
  it("토큰이 정상적으로 발급된다.", async function () {
    [owner] = await ethers.getSigners();
    const TokenContractFactory = await ethers.getContractFactory("ATNToken");
    ATNToken = await TokenContractFactory.deploy("AllThatNode", "ATN", 10000);
    await ATNToken.deployed();
    console.log("Contract deployed to:", ATNToken.address);

    const ownerBalance = await ATNToken.balanceOf(owner.address);
    expect(await ATNToken.totalSupply()).to.equal(ownerBalance);
  });
});
