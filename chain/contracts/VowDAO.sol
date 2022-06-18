// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "hardhat/console.sol";

contract Vow {
    address payable public owner;

    constructor(address challengeAddress) {
        owner = payable(msg.sender);

        // @! adds challenge located there to this DAO
    }

    function test() public pure returns (string memory) {
        return "54321";
    }
}
