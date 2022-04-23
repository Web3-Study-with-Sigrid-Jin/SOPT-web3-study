// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "./YourToken.sol";

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vendor is Ownable {
  // Set a price for our token (1 ETH = 100 Token)
  // Implement a payable buyToken() function. To transfer tokens look at the transfer() function exposed by the OpenZeppelin ERC20 implementation.
  // Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
  // Transfer all the Tokens to the Vendor contract at deployment time
  // Transfer the ownership of the Vendor contract (at deploy time) to our frontend address (you can see it on the top right of your web app) to withdraw the ETH in the balance
}
