// SPDX-License-Identifier: GPL-3.0

    pragma solidity ^0.8.0;
    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    import "hardhat/console.sol";

    contract StoreToken {
        
        ERC20 private ERC20interface;
        
        address public tokenAdress; // This is the token address
        address payable public owner; // This is the client
        // uint public expenses; // The fee in eth to be stored in the smart contract (for example)


        
        constructor (address _tokenAdress) payable {
            tokenAdress = _tokenAdress; 
            ERC20interface = ERC20(tokenAdress);
            owner = payable(msg.sender);
            }
        
        event Transfer(address indexed _from, address indexed _to, uint256 _value);
        event Approval(address indexed _owner, address indexed _spender, uint256 _value);

        
        function contractBalance() public view returns (uint _amount){
            return ERC20interface.balanceOf(address(this));
        }
        
        function senderBalance() public view returns (uint){
            return ERC20interface.balanceOf(msg.sender);
        }
        
        function depositISHTokens (address _to, uint256 _amount) external payable {
            console.log("HEY", _to, _amount);
            ERC20interface.transferFrom(msg.sender, _to, _amount);
        }
        

        function transferBack (address payable _to) public payable  {
            _to = payable(msg.sender);
            uint balance = ERC20interface.balanceOf(address(this)); // the balance of this smart contract
            ERC20interface.transferFrom(address(this), _to, balance);
        }
        
     
    }