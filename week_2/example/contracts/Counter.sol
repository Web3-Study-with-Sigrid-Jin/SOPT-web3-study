pragma solidity ^0.8.10;

import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Counter {
    using Counters for Counters.Counter;
    Counters.Counter clock;
    address public owner = msg.sender;

    constructor(uint256 _value) {
        owner = msg.sender;
        clock._value = _value;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function current() external view returns (uint256) {
        return clock.current();
    }

    function increment() external onlyOwner returns (uint256) {
        clock.increment();
        return clock.current();
    }

    function decrement() external onlyOwner returns (uint256) {
        clock.decrement();
        return clock.current();
    }

    function reset() external onlyOwner returns (uint256) {
        clock.reset();
        return clock.current();
    }

}