// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "hardhat/console.sol";

contract VowDAO {
    address payable public owner;
    mapping(address => bool) public challenges;


    constructor(address challengeAddress) {
        owner = payable(msg.sender);
        challenges[challengeAddress] = true;

        // @! adds challenge located there to this DAO
    }

    function test() public pure returns (string memory) {
        return "54321";
    }
}
