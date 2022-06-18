// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "hardhat/console.sol";

contract VowDAO {
    address payable public owner;
    mapping(address => bool) public challenges;

    constructor() {
        owner = payable(msg.sender);
    }

    function ping() public pure returns (string memory) {
        return "dao";
    }

    function addChallenge(address challengeAddress) public {
        challenges[challengeAddress] = true;
        // @! adds challenge located there to this DAO
    }

    function getChallenge(address challengeAddress) public view returns (bool) {
        return challenges[challengeAddress];
    }
}
