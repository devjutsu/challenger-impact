// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

// import "hardhat/console.sol";

contract Impact {
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
}
