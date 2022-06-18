// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./interfaces/IChallenge.sol";
import "hardhat/console.sol";

contract Vow {
    address payable public owner;
    mapping(bytes32 => Challenge) public challenges;

    struct Challenge {
        address payable creator;
        Status status;
        uint256 funds;
    }

    struct Session {
        uint256 participantKey;
        address participant;
    }

    enum Status {
        None,
        Playing,
        Completed
    }

    constructor() {
        owner = payable(msg.sender);
    }

    function test() public pure returns (string memory) {
        return '12345';
    }
}
