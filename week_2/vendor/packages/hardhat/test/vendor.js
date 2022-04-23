const {ethers} = require('hardhat');
const {use, expect} = require('chai');
const {solidity} = require('ethereum-waffle');

use(solidity);

describe('Staker dApp', () => {
  let owner;
  let addr1;
  let addr2;
  let addrs;

  let vendorContract;
  let tokenContract;
  let YourTokenFactory;

  let vendorTokensSupply;
  let tokensPerEth;

  beforeEach(async () => {
    // eslint-disable-next-line no-unused-vars
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy ExampleExternalContract contract
    YourTokenFactory = await ethers.getContractFactory('YourToken');
    tokenContract = await YourTokenFactory.deploy();

    // Deploy Staker Contract
    const VendorContract = await ethers.getContractFactory('Vendor');
    vendorContract = await VendorContract.deploy(tokenContract.address);

    await tokenContract.transfer(vendorContract.address, ethers.utils.parseEther('1000'));
    await vendorContract.transferOwnership(owner.address);

    vendorTokensSupply = await tokenContract.balanceOf(vendorContract.address);
    tokensPerEth = await vendorContract.tokensPerEth();
  });

  describe('Test buyTokens() method', () => {
    it('buyTokens reverted no eth sent', async () => {
      const amount = ethers.utils.parseEther('0');
      await expect(
        vendorContract.connect(addr1).buyTokens({
          value: amount,
        }),
      ).to.be.revertedWith('Send ETH to buy some tokens');
    });

    it('buyTokens reverted vendor has not enough tokens', async () => {
      const amount = ethers.utils.parseEther('101');
      await expect(
        vendorContract.connect(addr1).buyTokens({
          value: amount,
        }),
      ).to.be.revertedWith('Vendor contract has not enough tokens in its balance');
    });

    it('buyTokens success!', async () => {
      const amount = ethers.utils.parseEther('1');

      // Check that the buyTokens process is successful and the event is emitted
      await expect(
        vendorContract.connect(addr1).buyTokens({
          value: amount,
        }),
      )
        .to.emit(vendorContract, 'BuyTokens')
        .withArgs(addr1.address, amount, amount.mul(tokensPerEth));

      // Check that the user's balance of token is 100
      const userTokenBalance = await tokenContract.balanceOf(addr1.address);
      const userTokenAmount = ethers.utils.parseEther('100');
      expect(userTokenBalance).to.equal(userTokenAmount);

      // Check that the vendor's token balance is 900
      const vendorTokenBalance = await tokenContract.balanceOf(vendorContract.address);
      expect(vendorTokenBalance).to.equal(vendorTokensSupply.sub(userTokenAmount));

      // Check that the vendor's ETH balance is 1
      const vendorBalance = await ethers.provider.getBalance(vendorContract.address);
      expect(vendorBalance).to.equal(amount);
    });
  });

  describe('Test withdraw() method', () => {
    it('withdraw reverted because called by not the owner', async () => {
      await expect(vendorContract.connect(addr1).withdraw()).to.be.revertedWith('Ownable: caller is not the owner');
    });

    it('withdraw reverted because called by not the owner', async () => {
      await expect(vendorContract.connect(owner).withdraw()).to.be.revertedWith('Owner has not balance to withdraw');
    });

    it('withdraw success', async () => {
      const ethOfTokenToBuy = ethers.utils.parseEther('1');

      // buyTokens operation
      await vendorContract.connect(addr1).buyTokens({
        value: ethOfTokenToBuy,
      });

      // withdraw operation
      const txWithdraw = await vendorContract.connect(owner).withdraw();

      // Check that the Vendor's balance has 0 eth
      const vendorBalance = await ethers.provider.getBalance(vendorContract.address);
      expect(vendorBalance).to.equal(0);

      // Check the the owner balance has changed of 1 eth
      await expect(txWithdraw).to.changeEtherBalance(owner, ethOfTokenToBuy);
    });
  });

  describe('Test sellTokens() method', () => {
    it('sellTokens reverted because tokenAmountToSell is 0', async () => {
      const amountToSell = ethers.utils.parseEther('0');
      await expect(vendorContract.connect(addr1).sellTokens(amountToSell)).to.be.revertedWith(
        'Specify an amount of token greater than zero',
      );
    });

    it('sellTokens reverted because user has not enough tokens', async () => {
      const amountToSell = ethers.utils.parseEther('1');
      await expect(vendorContract.connect(addr1).sellTokens(amountToSell)).to.be.revertedWith(
        'Your balance is lower than the amount of tokens you want to sell',
      );
    });

    it('sellTokens reverted because vendor has not enough tokens', async () => {
      // User 1 buy
      const ethOfTokenToBuy = ethers.utils.parseEther('1');

      // buyTokens operation
      await vendorContract.connect(addr1).buyTokens({
        value: ethOfTokenToBuy,
      });

      await vendorContract.connect(owner).withdraw();

      const amountToSell = ethers.utils.parseEther('100');
      await expect(vendorContract.connect(addr1).sellTokens(amountToSell)).to.be.revertedWith(
        'Vendor has not enough funds to accept the sell request',
      );
    });

    it('sellTokens reverted because user has now approved transfer', async () => {
      // User 1 buy
      const ethOfTokenToBuy = ethers.utils.parseEther('1');

      // buyTokens operation
      await vendorContract.connect(addr1).buyTokens({
        value: ethOfTokenToBuy,
      });

      const amountToSell = ethers.utils.parseEther('100');
      await expect(vendorContract.connect(addr1).sellTokens(amountToSell)).to.be.revertedWith(
        'ERC20: transfer amount exceeds allowance',
      );
    });

    it('sellTokens success', async () => {
      // addr1 buy 1 ETH of tokens
      const ethOfTokenToBuy = ethers.utils.parseEther('1');

      // buyTokens operation
      await vendorContract.connect(addr1).buyTokens({
        value: ethOfTokenToBuy,
      });

      const amountToSell = ethers.utils.parseEther('100');
      await tokenContract.connect(addr1).approve(vendorContract.address, amountToSell);

      // check that the Vendor can transfer the amount of tokens we want to sell
      const vendorAllowance = await tokenContract.allowance(addr1.address, vendorContract.address);
      expect(vendorAllowance).to.equal(amountToSell);

      const sellTx = await vendorContract.connect(addr1).sellTokens(amountToSell);

      // Check that the vendor's token balance is 1000
      const vendorTokenBalance = await tokenContract.balanceOf(vendorContract.address);
      expect(vendorTokenBalance).to.equal(ethers.utils.parseEther('1000'));

      // Check that the user's token balance is 0
      const userTokenBalance = await tokenContract.balanceOf(addr1.address);
      expect(userTokenBalance).to.equal(0);

      // Check that the user's ETH balance is 1
      const userEthBalance = ethers.utils.parseEther('1');
      await expect(sellTx).to.changeEtherBalance(addr1, userEthBalance);
    });
  });
});
