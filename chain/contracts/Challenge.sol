// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./interfaces/IChallenge.sol";
import "hardhat/console.sol";

contract Challenge {
    mapping(bytes32 => Engagement) public challenges;
    address payable creator;

    struct Engagement {
        address payable person;
        Status status;
        uint256 funds;
    }

    struct Session {
        uint256 participantKey;
        address participant;
    }

    enum Status {
        None,
        InProgress,
        Completed
    }

    constructor() {
        creator = payable(msg.sender);
    }

    function test() public pure returns (string memory) {
        return "12345";
    }
}
